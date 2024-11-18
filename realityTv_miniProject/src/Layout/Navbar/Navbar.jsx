import { useContext, useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import navLinks from "../../Data/Data";
import { AppContext } from "../../Context/AppContext";
import ToggleDarkModeIcon from "../../Components/Toggled_DarkMode_Icon/ToogleDarkModeIcon";

/**
 * The Navbar component renders the navigation bar of this website.
 * It contains links to different pages and a sign in button.
 * It also has a responsive menu for smaller devices.
 */
const Navbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { darkMode } = useContext(AppContext);

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-white py-4 md:px-10 px-4 border-b border-[#e6e6e6] fixed z-50 w-full top-0`}
      >
        {/* Link to the home page */}
        <Link
          to="/"
          className={`text-2xl font-bold ${
            darkMode ? "text-black" : "text-black"
          }`}
        >
          Reality <span className="text-blue-400">TV</span>
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <ul className="max-lg:hidden">
          {navLinks.map((navlink) => (
            <li key={navlink.label} className={`inline-block px-8 `}>
              <Link
                to={navlink.path}
                className={`font-montserrat focus:text-black text-base leading-normal text-[#1d232a] ${
                  darkMode ? "text-black" : "text-black"
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        {/*//! Contact Us button */}
        <div className="lg:gap-x-6 gap-x-4 flex justify-center items-center">
          <ToggleDarkModeIcon />
          <Link
            to="/contact-us"
            className="py-1.5 lg:px-4 px-3 border-[1px] b text-sm lg:text-base rounded-3xl text-black hover:opacity-50"
          >
            Contact Us
          </Link>
          {/*//! Menu toggle button for smaller devices */}
          <TbMenu2
            className={`max-lg:block hidden text-3xl cursor-pointer ${
              darkMode ? "text-black" : "text-black"
            }`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-blue-400 fixed top-16 bottom-0 left-0 right-0 z-50">
            {/* Close button for the menu */}
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdOutlineCancelPresentation className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden bg-1 gap-y-7 z-40 flex flex-col items-center justify-center h-full">
              {/* Menu items for smaller devices */}
              {navLinks.map((navlink) => (
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <Link
                    to={navlink.path}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
              <Link
                to="/contact-us"
                className="py-1.5 lg:px-4 px-5 border-[1px] border-white text-xl lg:text-lg rounded-3xl text-white hover:opacity-50"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  window.scrollTo(0, 8000);
                }}
              >
                Contact Us
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
