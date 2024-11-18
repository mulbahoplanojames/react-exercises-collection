// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom";

import haerImage1 from "/src/assets/hero3.jpg";
import haerImage2 from "/src/assets/hero2.jpg";

const HomeHero = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center  md:py-16 py-8  md:gap-6 gap-14">
        <div className="">
          {/* Displaying the heading */}
          <h1 className=" text-4xl uppercase font-black md:pr-[14rem] pr-10 pb-6">
            Welcome to <br />
            the reality tv nomination official platform
          </h1>
          {/* Displaying the description */}
          <p className="text-lg pb-10">
            The Reality TV Nomination platform is a platform that allows you to
            nominate a person or a candidate of your choice for the reality tv
            award certifications. The platform is designed to be user-friendly
            and engaging for all.
          </p>
          {/* Displaying the link to the 'About Us' page */}
          <Link
            to="about"
            className="py-3 px-6 bg-blue-300 text-xl text-white border-none rounded-full hover:bg-opacity-70"
          >
            Critetials
          </Link>
        </div>
        {/* Displaying the image with social media links */}
        <div className=" md:w-[80%] md:h-[27rem] w-[95%] h-[23rem]  relative overflow-visible ">
          <div className="absolute top-0 left-0 bg-lime-500 md:w-[20rem] w-[19rem] md:h-[13rem] h-[10rem] overflow-hidden z-10">
            <img
              src={haerImage1}
              alt="Hero Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-pink-500 md:w-[20rem] w-[20rem] md:h-[13rem] h-[12rem] overflow-hidden ">
            <img
              src={haerImage2}
              alt="Hero Image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
