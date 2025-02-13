import { createContext, useState, useContext } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Custom Hook to use the Theme Context
export const useTheme = () => useContext(ThemeContext);

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  // Toggle Theme Function
  const toggleTheme = () => setIsDark((prevTheme) => !prevTheme);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
