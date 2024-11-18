import FormfacadeEmbed from "@formfacade/embed-react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Nomination = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <>
      <div className="pt-32 px-3 bg-[#162017]">
        {/* <h1 className="text-center text-3xl uppercase text-white">
          Please fill in this form to nominate a person
        </h1> */}

        {/* <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/108351829281762739211/form/1FAIpQLSe6iWzDKwaVqepE1vVclDnbq3yeUuKif1ApssksouRZ586X0Q/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        /> */}

        <h1 className="text-center text-3xl py-5 md:pb-[9rem]">
          Nomination Portal will be Out Soon
        </h1>
      </div>
    </>
  );
};

export default Nomination;
