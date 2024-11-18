import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import Criterial from "./Pages/Criterials/Criterial";
import MusicCriterials from "./Pages/More_Criterials/Music_Award/MusicAward";
import SocialsAward from "./Pages/More_Criterials/Socials_Award/SocialsAward";
import LeaderShipAward from "./Pages/More_Criterials/LeaderShip_Award/LeaderShipAward";
import EnterpreneurAward from "./Pages/More_Criterials/Entrepreneur_Award/EntrepreneurAward";
import SportAward from "./Pages/More_Criterials/Sport_Award/SportAward";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Nomination from "./Pages/Nomination/Nomination";

const App = () => {
  const { darkModeStyle } = useContext(AppContext);
  return (
    <>
      <div style={darkModeStyle}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/nominations" element={<Nomination />} />

            {/* // Criterials Pages */}
            <Route path="/criterials" element={<Criterial />} />
            <Route path="/muscial-awards" element={<MusicCriterials />} />
            <Route path="/social-awards" element={<SocialsAward />} />
            <Route path="/leadership-awards" element={<LeaderShipAward />} />
            <Route path="/best-entrepreneur" element={<EnterpreneurAward />} />
            <Route path="/sports-category" element={<SportAward />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
