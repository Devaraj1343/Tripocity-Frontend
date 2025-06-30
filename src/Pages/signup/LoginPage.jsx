import React from 'react';

export default function LoginPage({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In to Your Account</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 mb-4">
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
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>

          {/* Facebook */}
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5 mr-2" />
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