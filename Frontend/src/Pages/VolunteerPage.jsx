import { useState } from 'react';
import { FiMenu, FiX, FiEdit } from 'react-icons/fi';
import backgroundImage from '../assets/bg.jpg'; // Adjust path as needed
import { Link } from 'react-router-dom';

const VolunteerPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleEditProfile = () => {
    setEditProfileOpen(!editProfileOpen);
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, phone, email, skills });
    // Reset fields
    setName('');
    setPhone('');
    setEmail('');
    setSkills('');
    setEditProfileOpen(false);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}
      <nav className="relative p-4 flex justify-between items-center z-30 backdrop-blur-sm">
        <div className="text-white text-lg font-bold">MyLogo</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <Link to="/volunteer-page" className="text-white">Volunteer</Link>
          <button 
            className="text-white" 
            onClick={() => console.log('Logged out')}
          >
            Logout
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-2 relative z-30">
          <a href="#home" className="block text-white">Home</a>
          <a href="#about" className="block text-white">About</a>
          <Link to="/volunteer-page" className="block text-white">Volunteer</Link>
          <button 
            className="block text-white w-full text-left"
            onClick={() => console.log('Logged out')}
          >
            Logout
          </button>
        </div>
      )}

      {/* Content Section */}
      <div className="relative z-10 p-10">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome, User!</h1>

        {/* Edit Profile Section */}
        <div className="mt-6">
          <div className="flex items-center text-white cursor-pointer" onClick={toggleEditProfile}>
            <FiEdit className="mr-2" />
            <span>Edit Profile</span>
          </div>

          {editProfileOpen && (
            <div className="mt-4 bg-white p-4 rounded shadow-md">
              <form onSubmit={handleEditProfileSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="border border-gray-300 rounded w-full p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone No.</label>
                  <input 
                    type="text" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    className="border border-gray-300 rounded w-full p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="border border-gray-300 rounded w-full p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Skills</label>
                  <select 
                    value={skills} 
                    onChange={(e) => setSkills(e.target.value)} 
                    className="border border-gray-300 rounded w-full p-2"
                    required
                  >
                    <option value="">Select your skills</option>
                    <option value="skill1">Skill 1</option>
                    <option value="skill2">Skill 2</option>
                    <option value="skill3">Skill 3</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white rounded py-2 px-4"
                >
                  Edit
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Available Button */}
        <div className="mt-6">
          <button className="bg-green-600 text-white rounded py-2 px-4">
            Available
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
