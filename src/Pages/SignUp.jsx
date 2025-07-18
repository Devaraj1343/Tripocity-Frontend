import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SignupPage({ onClose,onSwitch }) {


   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3100/api';

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${apiUrl}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password,name }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Signup success:', data);
        setSuccess(data.message);
        toast.success('Signup successful');
        onClose(); // Close the signup modal on success
        // Optionally store token in localStorage
       // localStorage.setItem('token', data.data.token);
      } else {
        // Login failed
        console.error('Signup failed:', data.message);
        toast.error(data.message || 'Signup failed');
        setError(data.message || 'Signup failed');
      }

    } catch (err) {
      console.error('Error during Signup:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center   ">
      <div className="rounded-2xl shadow-2xl p-8 w-full max-w-md relative bg-white dark:bg-bg-dark dark:text-text-dark">
        <h2 className="text-2xl font-bold text-center  mb-6 text-text-light dark:text-text-dark">
          Create New Account
        </h2>

        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-text-light dark:bg-bg-dark dark:text-text-dark focus:ring-purple-500"
        ></input>

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
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-text-light dark:bg-bg-dark dark:text-text-dark focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Forgot Password */}
        <div className="text-right mb-4 flex flex-col">
          <button
            type="button"
            onClick={onSwitch}
            className="text-sm text-primary hover:underline text-end"
          >
            Sign In?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-700 mb-4"
          onClick={handleSignUp}
        >
          Create Account
        </button>

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