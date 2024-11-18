/* This file defines a context that will be used to store and share data across multiple
    components of our application.
*/

// I am importing the necessary functions from the React library to manage the state of the dark mode.
import { createContext, useEffect, useState } from "react";

// I create a new context using the `createContext` function. The argument is the initial value of the context.
export const AppContext = createContext(null);

/* I define a functional component called `AppContextProvider`. This component will be
    used to provide the context to all of its child components.
 */
const AppContextProvider = ({ children }) => {
  // I am Checking local storage for theme preference, default to false (light mode)
  const saveDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

  // I am checking local storage for the user login status, default to false
  const saveIsLogin = JSON.parse(localStorage.getItem("isLogin")) || false;

  /* 
    i am using the `useState` hook to create a state variable called `darkMode`.
     This state variable will keep track of whether the application is in dark mode or not
     base on the value of the `saveDarkMode` variable from local storage.
  */
  const [darkMode, setDarkMode] = useState(saveDarkMode);

  // I create a state variable called `logIn`. This state variable will keep track of whether the user is logged in or not.
  const [isLoggedIn, setIsLoggedIn] = useState(saveIsLogin);

  // Update local storage whenever darkMode state changes using the useEffect hook
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    console.log("darkMode", darkMode);

    // Update local storage whenever isLogin state changes using the useEffect hook
    localStorage.setItem("isLogin", JSON.stringify(isLoggedIn));
    console.log("isLogin", isLoggedIn);
  }, [darkMode, isLoggedIn]);

  // I define a function called `toggleDarkMode`. This function will be used to
  //toggle the value of the `darkMode` state variable.
  const toggleDarkMode = () => {
    /* 
        I use the `setDarkMode` function to update the value of the `darkMode` state variable.
        I pass a function as an argument to the `setDarkMode` function. This function takes the
        current value of the `darkMode` state variable and returns the opposite value.
    */
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // I create an object called `darkModeStyle`. This object will provide CSS styles for the app based on the `darkMode` state variable.
  const darkModeStyle = {
    // If the `darkMode` state variable is true, the background color of the app will be "#23272f". Otherwise, it will be "#f6f7f9".
    backgroundColor: darkMode ? "#1d232a" : "white",
    // If the `darkMode` state variable is true, the text color of the app will be "white". Otherwise, it will be "#1d232a".
    color: darkMode ? "white" : "black",
  };

  // I create an object called `contextValue`. This object will store all of the data that i want to share to all parts of this project.
  const contextValue = {
    darkMode,
    toggleDarkMode,
    darkModeStyle,
    isLoggedIn,
    setIsLoggedIn,
  };

  // I return the `AppContext.Provider` component, which will provide the `contextValue` object to all of its child components.
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
