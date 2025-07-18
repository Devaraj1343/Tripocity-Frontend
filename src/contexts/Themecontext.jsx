import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Load theme from localStorage on app start
  useEffect(() => {
    const storedTheme = localStorage.getItem("isLightTheme");
    const isLight = storedTheme === null ? true : storedTheme === "true";
    setIsLightTheme(isLight);

    // Apply theme to body
    document.body.classList.toggle("dark", !isLight);
  }, []);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => {
      const newTheme = !prevTheme;

      // Update body class
      document.body.classList.toggle("dark", !newTheme);

      // Save preference
      localStorage.setItem("isLightTheme", newTheme);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easier usage
export const useTheme = () => useContext(ThemeContext);
