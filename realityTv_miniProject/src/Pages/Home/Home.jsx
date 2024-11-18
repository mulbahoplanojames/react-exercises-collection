import { useEffect } from "react";
import HomeHero from "../../Components/Home_Hero/HomeHero";
import Swal from "sweetalert2";
import Team from "../../Components/Team/Team";
import NewsLetter from "../../NewsLetter/NewsLetter";
import FAQ from "../../Components/FAQ/FAQ";

const Home = () => {
  useEffect(() => {
    Swal.fire({
      title: "THE REALITY TV NOMINATION OFFICIAL PLATFORM",
      text: "Please be inform that this is not the Official Website for the Reality TV Show. It is just a platform created for the purpose of the Reality TV nomination.",
      icon: "info",
    });
  }, []);

  return (
    <>
      <div className=" mt-[4.5rem] md:px-14 px-3 ">
        <HomeHero />
        <Team />
        <NewsLetter />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
