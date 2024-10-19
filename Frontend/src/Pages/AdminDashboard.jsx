import { useState } from 'react';

const AdminDashboard = () => {
  const [requests, setRequests] = useState([
    { id: 1, title: 'Request 1', description: '20-10-2024,driving' },
    { id: 2, title: 'Request 2', description: '22-10-2024,first aid' },
    { id: 3, title: 'Request 3', description: '23-10-2024,cooking' }
  ]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [volunteers, setVolunteers] = useState([]); 
  const [error, setError] = useState(null);  // Move useState declaration outside of the function

  const fetchVolunteers = async (e) => {
    e.preventDefault();
    
    if (!selectedRequest) {
      setError('Please select a request.');
      return;
    }

    const [date1, skill1] = selectedRequest.description.split(',');
    console.log(date1,skill1)
    if (!date1 || !skill1) {
      setError('Invalid request description format.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5500/api/admin-dashboard/${skill1}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Failed to fetch volunteers');
        setVolunteers([]);  // Clear previous results if error occurs
        return;
      }

      // Set the fetched volunteer data in state
      setVolunteers(data);
      setError(null);  // Clear any previous errors
    } catch (error) {
      console.error('Error fetching volunteers:', error);
      setError('Error fetching volunteers. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div>
          <button className="mr-4 hover:text-cyan-400">Home</button>
          <button className="hover:text-red-400">Logout</button>
        </div>
      </nav>

      <div className="flex flex-grow">
        {/* Left section: Request List */}
        <div 
          className="w-1/6 p-4 shadow-md" 
          style={{ backgroundImage: 'url(/path/to/left-section-bg.jpg)', backgroundSize: 'cover' }} // Background image for the left section
        >
          <h2 className="text-lg font-bold mb-4 text-white">Request List</h2>
          <ul>
            {requests.map((request) => (
              <li
                key={request.id}
                onClick={() => setSelectedRequest(request)}
                className="cursor-pointer p-2 bg-gray-200 hover:bg-gray-300 mb-2 rounded"
              >
                {request.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle section: Request Details and Fetch Volunteer */}
        <div 
          className="w-2/6 p-4"
          style={{ backgroundColor: '#f0f4f8' }} // Custom color for the middle section
        >
          <h2 className="text-lg font-bold mb-4">Request Details</h2>
          {selectedRequest ? (
            <div className="bg-white p-4 shadow-md rounded">
              <h3 className="text-md font-semibold mb-2">{selectedRequest.title}</h3>
              <p className="mb-4">{selectedRequest.description}</p>
            </div>
          ) : (
            <p>Select a request to view details</p>
          )}
          
          <div className="mt-4">
            <button 
              onClick={fetchVolunteers} 
              className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600"
            >
              Fetch Volunteer
            </button>
          </div>

          {/* Display error message if any */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Right section: Volunteer Table */}
        <div 
          className="w-3/6 p-4 shadow-md overflow-auto" 
          style={{ backgroundImage: 'url(/path/to/right-section-bg.jpg)', backgroundSize: 'cover', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }} // Background image and overlay for the right section
        >
          <h2 className="text-lg font-bold mb-4 text-white">Volunteers</h2>
          <table className="w-full border-collapse bg-white bg-opacity-80">
            <thead>
              <tr>
                <th className="border p-2 text-left">Name</th>
                <th className="border p-2 text-left">Phone</th>
                <th className="border p-2 text-left">Availability</th>
                <th className="border p-2 text-left">Select</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer, index) => (
                <tr key={index}>
                  <td className="border p-2">{volunteer.name}</td>
                  <td className="border p-2">{volunteer.phone}</td>
                  <td className="border p-2">{volunteer.availability}</td>
                  <td className="border p-2 text-center">
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
