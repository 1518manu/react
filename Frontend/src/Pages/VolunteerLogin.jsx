import  { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bg.jpg'

const VolunteerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');

  const navigate = useNavigate();
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && email && password) {
      // Handle form submission here (e.g., send data to server)
      console.log('Form submitted');

      // Clear form fields after submission
      setEmail('');
      setPassword('');
      setEmailError('');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(1px)' }} 
      />
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full z-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Volunteer Login</h2>
        
        {/* Email Field */}
        <div className="mb-4 relative flex items-center">
          <FaEnvelope className="absolute left-3 text-gray-400" />
          <input 
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            className="pl-10 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
        </div>
        {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}
        
        {/* Password Field */}
        <div className="mb-4 relative flex items-center">
          <FaLock className="absolute left-3 text-gray-400" />
          <input 
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="pl-10 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button 
            onClick={togglePasswordVisibility} 
            className="absolute right-3 text-gray-400"
          >
            {passwordVisible ? '🙈' : '👁️'}
          </button>
        </div>

        {/* Sign in with Google */}
        <button 
          className="flex items-center justify-center w-full py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150"
        >
          <FcGoogle className="mr-2" /> Sign in with Google
        </button>

        {/* Submit Button */}
        {/* <button 
          onClick={handleSubmit}
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150"
          disabled={!email || !password || emailError}
        >
          Submit
        </button> */}

        <button onClick={() => {
            handleSubmit();
            navigate('/volunteer-login');
          }} className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150"
          disabled={!email || !password || emailError}>
          Submit
        </button>

        {/* Link to Volunteer Registration */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <button 
            onClick={() => navigate('/volunteer-register')}
            className="text-blue-500 hover:underline"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default VolunteerLogin;
