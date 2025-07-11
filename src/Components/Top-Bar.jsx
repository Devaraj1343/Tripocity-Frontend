import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "./Toggle-Theme";
import { MenuItems } from "../common/constants";
import { PackageCategories } from "../common/packageConstants/package";
import { HoneymoonCategories } from "../common/packageConstants/honeymoon";
import { WeddingCategories } from "../common/packageConstants/wedding";
import { IndiaCategories } from "../common/packageConstants/india";
import Logo from "./logo";
import Login from "../Pages/Login";
import Signup from "../Pages/signup/LoginPage";
import { AlignJustify } from 'lucide-react';
import Package from "../Pages/package";
import Navcard from "./Navcard";

export default function Topbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showNavcard,setShowNavcard] = useState(false)

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
    // navigate(<Package region={region} place={formatted} />);
    setHoveredItem(null);
    setIsDropdownHovered(false);
  };

  const openNavbar = ()=>{
    setShowNavcard(true)
  }
 

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-black ">
      <div className="hidden min1000:flex flex-wrap items-center justify-between p-4 sm:p-6 md:p-4 text-base sm:text-lg font-medium dark:text-text-dark text-text-light shadow-bottom-only">
        {/* Logo */}
        {/* <div className="font-rouge text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
        Tourism 
      </div> */}
        <Logo />

        {/* Menu */}
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
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Dropdown */}
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
                className="max-w-[1300px] mx-auto p-6 shadow-lg text-sm text-black grid auto-rows-min"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "2rem",
                  maxHeight: "60vh",
                  overflowY: "auto",
                }}
              >
                {Object.entries(currentDropdown).map(([region, places]) => (
                  <div key={region} className="min-w-[180px] max-w-[200px]">
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

                {/* Optional: View All Packages button
              {hoveredItem === "PACKAGES" && (
                <div className="w-full flex justify-end mt-4">
                  <button
                    onClick={() => navigate("/packages")}
                    className="bg-black text-white text-sm font-semibold px-4 py-2"
                  >
                    View All Packages
                  </button>
                </div>
              )} */}
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#9333ea] hover:bg-black text-white text-fluid px-2 py-1 rounded-sm transition-colors duration-200">
          <h2>Call Us :123456789</h2>
        </div>

        {/* Toggle + Avatar */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {/* Theme Toggle Button */}
          <ToggleTheme className="hover:text-primary cursor-pointer" />

          <div className="flex gap-4 text-sm sm:text-base font-medium">
            <button
              className="px-3 py-1 text-fluid rounded-md bg-transparent text-black dark:text-white hover:bg-purple-600 hover:text-white transition-colors duration-200"
              onClick={() => setShowSignup(true)}
            >
              Register
            </button>

            <button
              className="px-3 py-1 text-fluid rounded-md bg-purple-600 text-white hover:bg-black transition-colors duration-200"
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </button>
          </div>
          {/* Login Popup & signup Popup */}
          {showLogin && <Login onClose={() => setShowLogin(false)} />}
          {showSignup && <Signup onClose={() => setShowSignup(false)} />}
        </div>
      </div>

      <div className="min1000:hidden  mt-4 shadow-bottom-only  dark:text-text-dark text-text-light ">
        <div className="flex justify-between align-center items-center px-3 py-4">
           <Logo />

           <div className="flex gap-20 items-center">
            <ToggleTheme/>
               <AlignJustify onClick={()=> openNavbar()} className="" />
          {
            showNavcard && <Navcard onClose={() => setShowNavcard(false)} showNavcard={showNavcard} />
          }
           </div>
        
        </div>
       
      </div>
    </div>
  );
}
