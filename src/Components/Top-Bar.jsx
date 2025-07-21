import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "./Toggle-Theme";
import { MenuItems } from "../common/constants";
import { PackageCategories } from "../common/packageConstants/package";
import { HoneymoonCategories } from "../common/packageConstants/honeymoon";
import { WeddingCategories } from "../common/packageConstants/wedding";
import { IndiaCategories } from "../common/packageConstants/india";
import Logo from "./logo";
import Login from "../Pages/LoginPage";
import Signup from "../Pages/SignUp";
import { AlignJustify, CircleUser } from 'lucide-react';
import Navcard from "./Navcard";

// 👇 import AuthContext
import { useAuth } from "../contexts/AuthContext";
import ForgotPassword from "../Pages/forgotPassword";
import { toast } from "react-toastify";

export default function Topbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showNavcard, setShowNavcard] = useState(false);
  const [showUsercard, setShowUsercard] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const menuRef = useRef(null);

  // 👇 get auth state from context
  const { isLoggedIn, user, updateAuthStatus } = useAuth();

  const DropdownData = {
    PACKAGES: PackageCategories,
    HONEYMOON: HoneymoonCategories,
    WEDDING: WeddingCategories,
    INDIA: IndiaCategories,
  };

  const currentDropdown = DropdownData[hoveredItem];

  const handleNavigate = (region, place) => {
    const formatted = place.toLowerCase().replace(/\s+/g, "-");
    navigate(`/packages/${region}/${formatted}-tour-packages`);
    setHoveredItem(null);
    setIsDropdownHovered(false);
  };

  const openNavbar = () => setShowNavcard(true);

  const naviagteToRotue = (name) => {
    if (name.toLowerCase() === "home") navigate("/");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUsercard(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    useEffect(() => {
    // Get token from query string (if redirected from backend)
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      window.history.replaceState({}, document.title, "/"); // Remove ?token= from URL
    }

    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      toast.success("Logged in successfully");
      // Decode JWT (optional: for showing user name/pic)
     updateAuthStatus(true,{name:"user"}); // 👈 update auth status globally
    }
  }, []);

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-black ">
      <div className="hidden min1000:flex flex-wrap items-center justify-between p-4 sm:p-6 md:p-4 text-base sm:text-lg font-medium dark:text-text-dark text-text-light shadow-bottom-only">
        <Logo />
        <div className="relative">
          <ul className="flex gap-6 text-sm md:text-base">
            {MenuItems.map((item, index) => (
              <li
                key={index}
                className="relative text-fluid cursor-pointer px-2 py-1 rounded-sm hover:bg-[#9333ea] hover:text-white transition-colors duration-200"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => {
                  if (!isDropdownHovered) setHoveredItem(null);
                }}
                onClick={() => naviagteToRotue(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          {hoveredItem && currentDropdown && (
            <div
              className="absolute top-full left-0 right-0 bg-white z-20"
              onMouseEnter={() => setIsDropdownHovered(true)}
              onMouseLeave={() => {
                setIsDropdownHovered(false);
                setHoveredItem(null);
              }}
            >
              <div
                className="max-w-[1300px] mx-auto p-6 shadow-lg text-sm text-black grid auto-rows-min dark:bg-bg-dark dark:text-text-dark"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "2rem",
                  maxHeight: "60vh",
                  overflowY: "auto",
                }}
              >
                {Object.entries(currentDropdown).map(([region, places]) => (
                  <div key={region} className="min-w-[180px] max-w-[200px] ">
                    <h4 className="font-extrabold border-b border-gray-300 mb-2">
                      {region}
                    </h4>
                    <ul className="space-y-1">
                      {places.map((place) => (
                        <li
                          key={place}
                          className="cursor-pointer px-2 py-1 rounded-sm hover:bg-[#9333ea] hover:text-white transition-colors duration-200"
                          onClick={() => handleNavigate(region, place)}
                        >
                          • {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#9333ea] hover:bg-black text-white text-fluid px-2 py-1 rounded-sm transition-colors duration-200">
          <h2>Call Us :123456789</h2>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <ToggleTheme className="hover:text-primary cursor-pointer" />

          {!isLoggedIn ? (
            <div className="flex gap-4 text-sm sm:text-base font-medium">
              <button
                className="px-3 py-1 text-fluid rounded-md bg-purple-600 text-white hover:bg-black transition-colors duration-200"
                onClick={() => setShowLogin(true)}
              >
                Sign In
              </button>
            </div>
          ) : (
            <div> 
              <CircleUser
                className="w-8 h-8 cursor-pointer hover:text-primary transition-colors duration-200"
                onClick={() => setShowUsercard(!showUsercard)}
              />
            </div>
          )}

          {showUsercard && (
            <div
              ref={menuRef}
              className="absolute right-4 top-14 w-56 bg-white dark:bg-bg-dark rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 transition-all duration-200 ease-out"
            >
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Signed in as
                </p>

                <p className="text-base font-semibold text-gray-800 dark:text-gray-200 truncate">
                  Hi, {user?.name || "Guest"}!
                </p>
              </div>

              <ul className="flex flex-col py-2">
                <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors rounded-md">
                  View Profile
                </li>
                <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors rounded-md">
                  Settings
                </li>
                <li
                  className="px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 cursor-pointer transition-colors rounded-md"
                  onClick={() => {
                    localStorage.removeItem("authToken");
                    setShowUsercard(false);
                     toast.warning("Logged out successfully");
                    updateAuthStatus(false); // 👈 logout globally
                   
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="min1000:hidden mt-4 shadow-bottom-only dark:text-text-dark text-text-light ">
        <div className="flex justify-between align-center items-center px-3 py-3">
          <Logo className="cursor-pointer text-2xl " />
          <div className="flex gap-20 items-center">
            <ToggleTheme />
            <AlignJustify onClick={openNavbar} className="cursor-pointer" />
            {showNavcard && (
              <Navcard
                onClose={() => setShowNavcard(false)}
                openSignIn={() => {
                  setShowNavcard(false);
                  setShowLogin(true);
                }}
                showNavcard={showNavcard}
                isLoggedIn={isLoggedIn}
                userName={user?.name || "Guest"}
                logOut={() => {
                  localStorage.removeItem("authToken");
                   setShowNavcard(false);
                   toast.warning("Logged out successfully");
                  updateAuthStatus(false); // 👈 logout globally
                  
                }}
              />
            )}
          </div>
        </div>
      </div>

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLoginSuccess={(name) => {
            setShowLogin(false);
            updateAuthStatus(true, name); // 👈 login globally
          }}
          onForgotPassword={() => {
            setShowLogin(false);
            setShowForgotPassword(true);
          }}
        />
      )}
      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSwitch={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
      {showForgotPassword && (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
}
