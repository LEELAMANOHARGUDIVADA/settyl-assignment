import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({
  theme: "dark",
  setTheme: () => null,
});

export function ThemeProvider({ children, storageKey = "vite-ui-theme", ...props }) {
  const [theme, setTheme] = useState(() => "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark"); // Always set to dark theme
  }, []);

  const value = {
    theme,
    setTheme: () => null, // Disable setTheme functionality, as only "dark" is used
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
