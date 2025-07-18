import Logo from "./logo"
import { X } from 'lucide-react';
import { MenuItems } from "../common/constants";
import ToggleTheme from "./Toggle-Theme";

export default function ({
  onClose,
  showNavcard,
  openSignIn,
  isLoggedIn,
  logOut,
  userName,
}) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-bg-dark shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        showNavcard ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        {userName ? (
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Hi, {userName}!
          </div>
        ) : (
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Login to your account!
          </div>
        )}

        <X
          className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-red-500 transition-colors"
          onClick={onClose}
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-4 p-4">
        <ul className="flex flex-col gap-2">
          {MenuItems.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 rounded-md cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Action */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <button
          onClick={isLoggedIn ? logOut : openSignIn}
          className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
            isLoggedIn
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-primary text-white hover:bg-primary-dark"
          }`}
        >
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
}
