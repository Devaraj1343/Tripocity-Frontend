import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function LoginPage({ onClose,onSwitch,onLoginSuccess }) {


   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3100/api';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Login success:', data);
        setSuccess(data.message);
        toast.success('Login successful');
        // Optionally store token in localStorage
        localStorage.setItem('authToken', data.data.token);
        onLoginSuccess(data?.data?.user?.name); // Close the login modal on success
      } else {
        // Login failed
        console.error('Login failed:', data.message);
        toast.error(data.message || 'Login failed');
        setError(data.message || 'Login failed');
      }

    } catch (err) {
      console.error('Error during login:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center   ">
      <div className="rounded-2xl shadow-2xl p-8 w-full max-w-md relative bg-white dark:bg-bg-dark dark:text-text-dark">
        <h2 className="text-2xl font-bold text-center text-text-light  mb-6 dark:text-text-dark">
          Sign In to Your Account
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-text-light dark:bg-bg-dark dark:text-text-dark focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  dark:bg-bg-dark dark:text-text-dark focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Forgot Password */}
        <div className="text-right mb-4 flex flex-col gap-1">
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot password?
          </a>
          <button
            type="button"
            onClick={onSwitch}
            className="text-sm text-primary hover:underline text-end"
          >
            Don't have an account?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-700 mb-4 "
          onClick={handleLogin}
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-400">or continue with</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4">
          {/* Google */}
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2  hover:bg-gray-50 transition dark:bg-bg-dark dark:text-text-dark">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>

          {/* Facebook */}
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-50 hover:text transition dark:bg-bg-dark dark:text-text-dark">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}