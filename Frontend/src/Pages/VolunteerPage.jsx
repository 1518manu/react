import { useState } from 'react';
import { FiMenu, FiX, FiEdit } from 'react-icons/fi';
import backgroundImage from '../assets/bg.jpg';
import { Link } from 'react-router-dom';

const VolunteerPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [messages] = useState([
    { id: 1, title: 'Availability Reminder', text: 'Remember to submit your availability for next week!' },
    { id: 2, title: 'Meeting Reminder', text: 'Meeting scheduled for Thursday at 3 PM.' },
  ]);

  // Current month and year based on system date
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  // Get the calendar aligned with the system date
  const getCalendarDays = () => {
    const startOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentYear, currentDate.getMonth() + 1, 0);
    const startDayOfWeek = startOfMonth.getDay(); // 0 (Sun) to 6 (Sat)
    const daysInMonth = endOfMonth.getDate();

    const daysArray = Array(startDayOfWeek).fill(null); // Empty slots before the first day
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push({ date: new Date(currentYear, currentDate.getMonth(), day), available: true });
    }
    return daysArray;
  };

  const [calendar, setCalendar] = useState(getCalendarDays());

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
        <div className="bg-white rounded p-4 w-11/12 md:w-1/3">
          <h2 className="text-xl font-bold mb-2">Message Details</h2>
          <p>{message}</p>
          <button
            className="mt-4 bg-blue-600 text-white rounded py-2 px-4"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const toggleEditProfile = () => {
    setEditProfileOpen(!editProfileOpen);
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email, skills });
    setName('');
    setPhone('');
    setEmail('');
    setSkills('');
    setEditProfileOpen(false);
  };

  const toggleAvailability = (index) => {
    setCalendar((prevCalendar) =>
      prevCalendar.map((day, i) =>
        i === index ? { ...day, available: !day.available } : day
      )
    );
  };

  const openModal = (message) => {
    setSelectedMessage(message);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMessage(null);
    setModalOpen(false);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar "fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-30 bg-gray-800 bg-opacity-75 backdrop-blur-sm"*/}
      
      <nav className="relative p-4 flex justify-between items-center z-30 backdrop-blur-sm">
        <div className="text-white text-lg font-bold">MyLogo</div>
        <div className="hidden md:flex space-x-6 items-center">
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
      <div className="relative z-10 flex min-h-screen">
        {/* Left Section: Welcome and Text */}
        <div className="bg-white bg-opacity-70 p-6 w-2/5 flex flex-col justify-center rounded shadow-md">
          <h1 className="text-4xl font-bold mb-4">Welcome, {name || 'User'}!</h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Edit Profile Section */}
          <div className="mt-6">
            <div className="flex items-center cursor-pointer" onClick={toggleEditProfile}>
              <FiEdit className="mr-2" />
              <span>Edit Profile</span>
            </div>

            {editProfileOpen && (
              <div className="mt-4 bg-white bg-opacity-80 p-4 rounded shadow-md">
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
        </div>

        {/* Right Section: Calendar and Messages */}
        <div className="relative bg-white bg-opacity-70 p-6 w-3/5 flex flex-col rounded shadow-md">
          <h2 className="text-3xl font-bold mb-4">{`${currentMonth} ${currentYear}`}</h2>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {/* Day Labels */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-bold text-center text-gray-600">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {calendar.map((day, index) => {
              const isPastDate = day && day.date < currentDate;
              return day ? (
                <div
                  key={day.date}
                  className={`p-4 border rounded cursor-pointer transition duration-200 
                    ${day.available ? (isPastDate ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-200') : 'bg-red-200'} 
                    ${isPastDate ? 'opacity-50' : 'hover:opacity-75'}`}
                  onClick={() => !isPastDate && toggleAvailability(index)}
                >
                  <div className="text-center">{day.date.getDate()}</div>
                </div>
              ) : (
                <div key={index} className="p-4"></div>
              );
            })}
          </div>

          {/* Messages Section */}
          <div className="mt-6 bg-white bg-opacity-80 p-4 rounded shadow-md">
            <h2 className="text-3xl font-bold mb-2">Messages</h2>
            {messages.map((message) => (
              <div key={message.id} className="border-b mb-2 pb-2 cursor-pointer" onClick={() => openModal(message.text)}>
                <p className="text-gray-700">{message.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Message Details */}
      <Modal isOpen={modalOpen} onClose={closeModal} message={selectedMessage} />
    </div>
  );
};

export default VolunteerPage;
