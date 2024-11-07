// import { useState, useEffect } from 'react';
// import { Pie, Bar } from 'react-chartjs-2';
// import { motion } from 'framer-motion';
// import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
// import { useNavigate } from 'react-router-dom';

// Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [volunteerData, setVolunteerData] = useState({
//     assigned: 0,
//     unassigned: 0,
//     skillCounts: {}
//   });
  
//   const [organisationData, setOrganisationData] = useState([]);
//   const [inventoryData, setInventoryData] = useState({
//     food: 0,
//     clothMen: 0,
//     clothWomen: 0,
//     clothChildren: 0,
//     medicine: 0
//   });

//   const [showOrgModal, setShowOrgModal] = useState(false);
//   const [fetchedOrgData, setFetchedOrgData] = useState([]);

//   // Dummy data for frontend testing
//   useEffect(() => {
//     setVolunteerData({
//       assigned: 50,
//       unassigned: 30,
//       skillCounts: {
//         JavaScript: 20,
//         Python: 15,
//         React: 10,
//         Node: 15,
//         MongoDB: 20
//       }
//     });

//     setOrganisationData([
//       { name: 'Org1', volunteers: { JavaScript: 5, Python: 3, React: 2 } },
//       { name: 'Org2', volunteers: { Node: 7, MongoDB: 4 } }
//     ]);

//     setInventoryData({
//       food: 200,
//       clothMen: 150,
//       clothWomen: 130,
//       clothChildren: 100,
//       medicine: 50
//     });

//   }, []);

//   // MongoDB connection code would go here, but for now it is commented
//   /*
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const volunteerResponse = await fetch('/api/volunteers');
//         const volunteerJson = await volunteerResponse.json();
//         setVolunteerData(volunteerJson);

//         const organisationResponse = await fetch('/api/organisations');
//         const organisationJson = await organisationResponse.json();
//         setOrganisationData(organisationJson);

//         const inventoryResponse = await fetch('/api/inventory');
//         const inventoryJson = await inventoryResponse.json();
//         setInventoryData(inventoryJson);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   */

//   // Data for pie chart (assigned vs unassigned volunteers)
//   const pieData = {
//     labels: ['Assigned', 'Unassigned'],
//     datasets: [
//       {
//         data: [volunteerData.assigned, volunteerData.unassigned],
//         backgroundColor: ['#4CAF50', '#FF6347'],
//       },
//     ],
//   };

//   // Data for bar chart (organisation and volunteers by skill)
//   const barData = {
//     labels: organisationData.map(org => org.name),
//     datasets: Object.keys(volunteerData.skillCounts).map(skill => ({
//       label: skill,
//       data: organisationData.map(org => org.volunteers[skill] || 0),
//       backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
//     }))
//   };


//   const handleLogout = () => {
//     // Clear session or authentication data
//     localStorage.removeItem('authToken');  // Replace with your actual session token key
//     sessionStorage.removeItem('authToken'); // If you use sessionStorage instead

//     // Redirect to login page or another route
//     navigate('/', { replace: true });
//   };


//   const fetchOrganizations = async () => {
//     try {
//       const response = await fetch('/api/organisations');
      
//       // Log the raw response for inspection
//       const responseText = await response.text();  // Read the response as plain text
//       console.log('Raw Response:', responseText);
  
//       // Check if the response is JSON
//       const contentType = response.headers.get('content-type');
//       if (!contentType || !contentType.includes('application/json')) {
//         throw new Error('Response is not JSON');
//       }
  
//       // Parse JSON if it's valid
//       const data = JSON.parse(responseText);  // Explicitly parse the raw response
//       setFetchedOrgData(data);  // Use the data as intended
//     } catch (error) {
//       console.error('Error fetching organization data:', error);
//     }
//   };
  
  

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-white shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-xl font-bold">Admin Dashboard</div>
//           <div>
//             <button 
//             onClick={fetchOrganizations}
//             className="mr-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">
//               Add Organisation
//             </button>
//             <button 
//             onClick={handleLogout}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="pt-20 px-4 sm:px-8">
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Volunteer Pie Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Volunteers Assignment</h2>
//             <Pie data={pieData} />
//           </div>

//           {/* Organisation Bar Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Organisation Volunteers by Skill</h2>
//             <Bar data={barData} />
//           </div>

//           {/* Inventory Information */}
//           <div className="bg-white p-6 rounded-lg shadow-lg col-span-full">
//             <h2 className="text-2xl font-bold mb-4">Inventory Details</h2>
//             <ul>
//               <li>Food: {inventoryData.food}</li>
//               <li>Cloth (Men): {inventoryData.clothMen}</li>
//               <li>Cloth (Women): {inventoryData.clothWomen}</li>
//               <li>Cloth (Children): {inventoryData.clothChildren}</li>
//               <li>Medicine: {inventoryData.medicine}</li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Organisation More Info */}
//         <motion.div
//           className="bg-white p-6 rounded-lg shadow-lg mt-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Organisation Volunteer Details</h2>
//           {organisationData.map(org => (
//             <div key={org.name} className="mb-4">
//               <h3 className="text-xl font-bold">{org.name}</h3>
//               <ul>
//                 {Object.keys(org.volunteers).map(skill => (
//                   <li key={skill}>{skill}: {org.volunteers[skill]}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
//             More Information
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [volunteerData, setVolunteerData] = useState({
    assigned: 50,
    unassigned: 30,
    skillCounts: {
      MachineOperator: 15,
      Cooking: 10,
      Driving: 12,
      Swimming: 8,
      CriticalThinking: 20,
    },
  });

  const [organisationData, setOrganisationData] = useState([
    { name: 'Karmasena', volunteers: { MachineOperator: 5, Cooking: 3, Driving: 4, Swimming: 2, CriticalThinking: 6 } },
    { name: 'Sevabharathi', volunteers: { MachineOperator: 4, Cooking: 6, Driving: 5, Swimming: 3, CriticalThinking: 7 } },
    { name: 'SavePeople', volunteers: { MachineOperator: 6, Cooking: 5, Driving: 3, Swimming: 4, CriticalThinking: 5 } },
  ]);

  const [inventoryData, setInventoryData] = useState({
    food: 200,
    clothMen: 150,
    clothWomen: 130,
    clothChildren: 100,
    medicine: 50,
  });

  // Data for pie chart (assigned vs unassigned volunteers)
  const pieData = {
    labels: ['Assigned', 'Unassigned'],
    datasets: [
      {
        data: [volunteerData.assigned, volunteerData.unassigned],
        backgroundColor: ['#4CAF50', '#FF6347'],
      },
    ],
  };

  // Data for bar chart (organization volunteers by skill)
  const barData = {
    labels: organisationData.map(org => org.name),
    datasets: Object.keys(volunteerData.skillCounts).map(skill => ({
      label: skill,
      data: organisationData.map(org => org.volunteers[skill] || 0),
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color generation fixed
    })),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Admin Dashboard</div>
          <div>
            <button className="mr-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">
              Add Organisation
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
              onClick={() => {
                console.log('Logged out');
                navigate('/');
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Volunteer Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Volunteers Assignment</h2>
            <Pie data={pieData} />
          </div>

          {/* Organization Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Organization Volunteers by Skill</h2>
            <Bar data={barData} />
          </div>

          {/* Inventory Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-full">
            <h2 className="text-2xl font-bold mb-4">Inventory Details</h2>
            <ul>
              <li>Food: {inventoryData.food}</li>
              <li>Cloth (Men): {inventoryData.clothMen}</li>
              <li>Cloth (Women): {inventoryData.clothWomen}</li>
              <li>Cloth (Children): {inventoryData.clothChildren}</li>
              <li>Medicine: {inventoryData.medicine}</li>
            </ul>
          </div>
        </motion.div>

        {/* Organization More Info */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Organization Volunteer Details</h2>
          {organisationData.map(org => (
            <div key={org.name} className="mb-4">
              <h3 className="text-xl font-bold">{org.name}</h3>
              <ul>
                {Object.keys(org.volunteers).map(skill => (
                  <li key={skill}>{skill}: {org.volunteers[skill]}</li>
                ))}
              </ul>
            </div>
          ))}
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            More Information
          </button>
        </motion.div>
      </div>

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="text-center">
          <p className="mb-2">© 2024 Community Support System. All Rights Reserved.</p>
          <p className="mb-1">Building a better future together.</p>
          <p>Follow us on social media for updates and events!</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
