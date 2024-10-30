import { useState, useEffect } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    //initializes the theme state with the value from localstorage if it exists otherwise defaults to light
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  //reference the root HTML element (<html>) to easily manipualte its class list
  const element = document.documentElement;

  //runs the provided function after every render when the theme variable changes
  useEffect(() => {
    
    //adds or removes the "dark" class from the root element (<html>) based on the current theme state
    //updatest localstorage with the current theme so it persists across page reloads
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [element.classList, theme]);
  return (
    <>
      <div className="relative ">
        <img
          // src={theme === "dark" ? darkPng : lightPng}
          src={lightPng}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${
            
            //sets the opacity to 0 if the theme is "dark" (making it insvisible) and to 100 if the theme is "light" (making it fully visible)  
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `}
        />
        <img
          src={darkPng}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
        />
      </div>
    </>
  );
};

export default DarkMode;