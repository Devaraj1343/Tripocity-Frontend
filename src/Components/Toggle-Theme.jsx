import { useEffect, useState } from "react";
import { SunMoon } from 'lucide-react';
import { Moon } from "lucide-react";

export default function ToggleTheme(){

    const [isLightTheme, setIsLightTheme] = useState(true);
    
    useEffect(() => {
       localStorage.setItem("isLightTheme", true);
    },[])

    const toggleTheme = () => {
        setIsLightTheme(prevTheme => {
            document.body.classList.toggle('dark', prevTheme);
            localStorage.setItem("isLightTheme", isLightTheme ? false : true);
            return !prevTheme;
        });
    };

    return (
      <>
        <button
          onClick={toggleTheme}
          className="relative w-10 h-10 flex items-center justify-center overflow-hidden"
        >
          {/* Sun Icon */}
          <span
            className={`absolute transition-all duration-300 ease-in-out transform ${
              isLightTheme
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
          >
            <SunMoon className="w-8 h-8" />
          </span>

          {/* Moon Icon */}
          <span
            className={`absolute transition-all duration-300 ease-in-out transform ${
              isLightTheme
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          >
            <Moon className="w-8 h-8" />
          </span>
        </button>
      </>
    );
}