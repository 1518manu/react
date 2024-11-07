// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UsersPageLo = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [formType, setFormType] = useState(''); // 'donate' or 'consume'
//   const [itemName, setItemName] = useState('');
//   const [itemCount, setItemCount] = useState(0);
//   const navigate = useNavigate();

//   const handleDonateClick = () => {
//     setShowForm(true);
//     setFormType('donate');
//   };

//   const handleConsumeClick = () => {
//     setShowForm(true);
//     setFormType('consume');
//   };

//   const handleSubmit = () => {
//     // Implement your MongoDB update logic here
//     // Example: Update inventory based on formType
//     if (formType === 'donate') {
//       console.log(`Donating ${itemCount} of ${itemName}`);
//       // Increment inventory logic here
//     } else {
//       console.log(`Consuming ${itemCount} of ${itemName}`);
//       // Decrement inventory logic here
//     }

//     // Reset form
//     setShowForm(false);
//     setItemName('');
//     setItemCount(0);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     navigate('/');
//   };
  

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 flex flex-col justify-between">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-white shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-xl font-bold">User Dashboard</div>
//           <div>
//             <button
//               aria-label="Edit Profile"
//               className="mr-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
//               onClick={() => console.log('Edit Profile Clicked')}
//             >
//               Edit Profile
//             </button>
//             <button
//               aria-label="Logout"
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="pt-24 px-4 sm:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
//             <p>Here is some important information displayed for you.</p>
//             {/* Inventory Table */}
//             <h3 className="text-xl font-semibold mt-6">Inventory</h3>
//             <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mt-4">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                   <th className="py-3 px-6 text-left">Item Name</th>
//                   <th className="py-3 px-6 text-left">Count</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-600 text-sm font-light">
//                 <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
//                   <td className="py-3 px-6">Food</td>
//                   <td className="py-3 px-6">100</td>
//                 </tr>
//                 <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
//                   <td className="py-3 px-6">Clothing (Men)</td>
//                   <td className="py-3 px-6">50</td>
//                 </tr>
//                 <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
//                   <td className="py-3 px-6">Clothing (Women)</td>
//                   <td className="py-3 px-6">30</td>
//                 </tr>
//                 <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
//                   <td className="py-3 px-6">Clothing (Children)</td>
//                   <td className="py-3 px-6">20</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Right Side */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Donate Box or Form */}
//             <div className={`bg-cyan-400 p-6 rounded-lg shadow-lg flex items-center justify-center ${showForm && formType === 'donate' ? 'hidden' : ''}`}>
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold mb-4">Donate</h2>
//                 <p className="mb-4">Make a donation to help others in need.</p>
//                 <button
//                   aria-label="Donate"
//                   className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
//                   onClick={handleDonateClick}
//                 >
//                   Donate
//                 </button>
//               </div>
//             </div>

//             {/* Consume Box or Form */}
//             <div className={`bg-cyan-400 p-6 rounded-lg shadow-lg flex items-center justify-center ${showForm && formType === 'consume' ? 'hidden' : ''}`}>
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold mb-4">Consume</h2>
//                 <p className="mb-4">Get support or aid for your needs.</p>
//                 <button
//                   aria-label="Consume"
//                   className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
//                   onClick={handleConsumeClick}
//                 >
//                   Consume
//                 </button>
//               </div>
//             </div>

//             {/* Form for Donation/Consumption */}
//             {showForm && (
//               <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//                 <h2 className="text-2xl font-bold mb-4">{formType === 'donate' ? 'Donate Item' : 'Consume Item'}</h2>
//                 <div className="mb-4">
//                   <label className="block mb-1">Name of Item:</label>
//                   <select
//                     value={itemName}
//                     onChange={(e) => setItemName(e.target.value)}
//                     className="border border-gray-300 rounded px-2 py-1"
//                   >
//                     <option value="">Select Item</option>
//                     <option value="Food">Food</option>
//                     <option value="Clothing (Men)">Clothing (Men)</option>
//                     <option value="Clothing (Women)">Clothing (Women)</option>
//                     <option value="Clothing (Children)">Clothing (Children)</option>
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block mb-1">Count:</label>
//                   <input
//                     type="number"
//                     value={itemCount}
//                     onChange={(e) => setItemCount(Number(e.target.value))}
//                     className="border border-gray-300 rounded px-2 py-1"
//                   />
//                 </div>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-400 py-4 text-center shadow-md">
//         <p>&copy; 2024 User Dashboard. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default UsersPageLo;
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UsersPageLo = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [formType, setFormType] = useState(''); // 'donate' or 'consume'
//   const [itemName, setItemName] = useState('');
//   const [itemCount, setItemCount] = useState(0);
//   const [inventory, setInventory] = useState([]);

//   // Initial dummy data for inventory
//   const initialInventory = [
//     { name: 'Food', count: 100 },
//     { name: 'Clothing (Men)', count: 50 },
//     { name: 'Clothing (Women)', count: 30 },
//     { name: 'Clothing (Children)', count: 20 },
//   ];

//   // Load inventory data from localStorage or set initial data
//   useEffect(() => {
//     const storedInventory = localStorage.getItem('inventoryData');
//     setInventory(storedInventory ? JSON.parse(storedInventory) : initialInventory);
//   }, []);

//   // Save inventory data to localStorage on update
//   const updateInventory = (newInventory) => {
//     setInventory(newInventory);
//     localStorage.setItem('inventoryData', JSON.stringify(newInventory));
//   };

//   // Show donation form
//   const handleDonateClick = () => {
//     setShowForm(true);
//     setFormType('donate');
//   };

//   // Show consumption form
//   const handleConsumeClick = () => {
//     setShowForm(true);
//     setFormType('consume');
//   };

//   // Handle form submission for donation or consumption
//   const handleSubmit = () => {
//     const adjustment = formType === 'donate' ? itemCount : -Math.abs(itemCount);

//     const updatedInventory = inventory.map((item) => {
//       if (item.name === itemName) {
//         return { ...item, count: item.count + adjustment };
//       }
//       return item;
//     });

//     updateInventory(updatedInventory);
//     setShowForm(false);
//     setItemName('');
//     setItemCount(0);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 flex flex-col justify-between">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-gray-800 text-white shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-xl font-bold">User Dashboard</div>
//           <div>
//             <button
//               aria-label="Edit Profile"
//               className="mr-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
//               onClick={() => console.log('Edit Profile Clicked')}
//             >
//               Edit Profile
//             </button>
//             <button
//               aria-label="Logout"
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
//               onClick={() => {
//                 console.log('Logged out');
//                 navigate('/');
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="pt-24 px-4 sm:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
//             <p>Here is some important information displayed for you.</p>
//             {/* Inventory Table */}
//             <h3 className="text-xl font-semibold mt-6">Inventory</h3>
//             <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mt-4">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                   <th className="py-3 px-6 text-left">Item Name</th>
//                   <th className="py-3 px-6 text-left">Count</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-600 text-sm font-light">
//                 {inventory.map((item) => (
//                   <tr key={item.name} className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
//                     <td className="py-3 px-6">{item.name}</td>
//                     <td className="py-3 px-6">{item.count}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Right Side */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Donate Box or Form */}
//             <div className={`bg-cyan-400 p-6 rounded-lg shadow-lg flex items-center justify-center ${showForm && formType === 'donate' ? 'hidden' : ''}`}>
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold mb-4">Donate</h2>
//                 <p className="mb-4">Make a donation to help others in need.</p>
//                 <button
//                   aria-label="Donate"
//                   className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
//                   onClick={handleDonateClick}
//                 >
//                   Donate
//                 </button>
//               </div>
//             </div>

//             {/* Consume Box or Form */}
//             <div className={`bg-cyan-400 p-6 rounded-lg shadow-lg flex items-center justify-center ${showForm && formType === 'consume' ? 'hidden' : ''}`}>
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold mb-4">Consume</h2>
//                 <p className="mb-4">Get support or aid for your needs.</p>
//                 <button
//                   aria-label="Consume"
//                   className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
//                   onClick={handleConsumeClick}
//                 >
//                   Consume
//                 </button>
//               </div>
//             </div>

//             {/* Form for Donation/Consumption */}
//             {showForm && (
//               <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//                 <h2 className="text-2xl font-bold mb-4">{formType === 'donate' ? 'Donate Item' : 'Consume Item'}</h2>
//                 <div className="mb-4">
//                   <label className="block mb-1">Name of Item:</label>
//                   <select
//                     value={itemName}
//                     onChange={(e) => setItemName(e.target.value)}
//                     className="border border-gray-300 rounded px-2 py-1"
//                   >
//                     <option value="">Select Item</option>
//                     {inventory.map((item) => (
//                       <option key={item.name} value={item.name}>{item.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block mb-1">Count:</label>
//                   <input
//                     type="number"
//                     value={itemCount}
//                     onChange={(e) => setItemCount(Number(e.target.value))}
//                     className="border border-gray-300 rounded px-2 py-1"
//                   />
//                 </div>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <footer className="bg-gray-800 text-white p-4 mt-10">
//         <div className="text-center">
//           <p className="mb-2">© 2024 Community Support System. All Rights Reserved.</p>
//           <p className="mb-1">Building a better future together.</p>
//           <p>Follow us on social media for updates and events!</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default UsersPageLo;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UsersPageLo = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(''); // 'donate' or 'consume'
  const [itemName, setItemName] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [inventory, setInventory] = useState([]);

  // Initial dummy data for inventory
  const initialInventory = [
    { name: 'Food', count: 100 },
    { name: 'Clothing (Men)', count: 50 },
    { name: 'Clothing (Women)', count: 30 },
    { name: 'Clothing (Children)', count: 20 },
  ];

  // Load inventory data from localStorage or set initial data
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      // Redirect to the home page if not authenticated
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const storedInventory = localStorage.getItem('inventoryData');
    setInventory(storedInventory ? JSON.parse(storedInventory) : initialInventory);
  }, []);

  // Save inventory data to localStorage on update
  const updateInventory = (newInventory) => {
    setInventory(newInventory);
    localStorage.setItem('inventoryData', JSON.stringify(newInventory));
  };

  // Show donation form
  const handleDonateClick = () => {
    setShowForm(true);
    setFormType('donate');
  };

  // Show consumption form
  const handleConsumeClick = () => {
    setShowForm(true);
    setFormType('consume');
  };

  // Handle form submission for donation or consumption
  const handleSubmit = () => {
    const adjustment = formType === 'donate' ? itemCount : -Math.abs(itemCount);

    const updatedInventory = inventory.map((item) => {
      if (item.name === itemName) {
        return { ...item, count: item.count + adjustment };
      }
      return item;
    });

    updateInventory(updatedInventory);
    setShowForm(false);
    setItemName('');
    setItemCount(0);
  };

  // Logout function to navigate to the home page and replace history
  const handleLogout = () => {
    console.log('Logged out');
    localStorage.removeItem('isAuthenticated');
    navigate('/', { replace: true }); // Navigates to home and clears history
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-800 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">User Dashboard</div>
          <div>
            <button
              aria-label="Edit Profile"
              className="mr-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
              onClick={() => console.log('Edit Profile Clicked')}
            >
              Edit Profile
            </button>
            <button
              aria-label="Logout"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
            <p>Here is some important information displayed for you.</p>
            {/* Inventory Table */}
            <h3 className="text-xl font-semibold mt-6">Inventory</h3>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mt-4">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Item Name</th>
                  <th className="py-3 px-6 text-left">Count</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {inventory.map((item) => (
                  <tr key={item.name} className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
                    <td className="py-3 px-6">{item.name}</td>
                    <td className="py-3 px-6">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Donate Box or Form */}
            <div className={`bg-cyan-400 p-6 rounded-lg shadow-lg flex items-center justify-center ${showForm && formType === 'donate' ? 'hidden' : ''}`}>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Donate</h2>
                <p className="mb-4">Make a donation to help others in need.</p>
                <button
                  aria-label="Donate"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
                  onClick={handleDonateClick}
                >
                  Donate
                </button>
              </div>
            </div>

            {/* Consume Box or Form */}
            <div className={`bg-cyan-400 p-6 rounded-lg shadow-lg flex items-center justify-center ${showForm && formType === 'consume' ? 'hidden' : ''}`}>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Consume</h2>
                <p className="mb-4">Get support or aid for your needs.</p>
                <button
                  aria-label="Consume"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
                  onClick={handleConsumeClick}
                >
                  Consume
                </button>
              </div>
            </div>

            {/* Form for Donation/Consumption */}
            {showForm && (
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">{formType === 'donate' ? 'Donate Item' : 'Consume Item'}</h2>
                <div className="mb-4">
                  <label className="block mb-1">Name of Item:</label>
                  <select
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="">Select Item</option>
                    {inventory.map((item) => (
                      <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Count:</label>
                  <input
                    type="number"
                    value={itemCount}
                    onChange={(e) => setItemCount(Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
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

export default UsersPageLo;
