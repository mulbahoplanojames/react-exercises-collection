import { TeamData } from "../../Data/Data";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <div className="px-4 mt-20 pb-16 text-center">
        <h1 className="text-4xl font-bold md:px-[23rem] pr-1">
          Meet the team of the Reality TV Show
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-14">
          {TeamData.map((member) => (
            <div
              className="flex flex-col text-left shadow-xl p-2 rounded-md"
              key={member.id}
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-[16rem] w-full"
              />
              <h1 className="text-2xl font-bold pt-3 pb-1">{member.name}</h1>
              <h2 className="text-lg pb-4">{member.role}</h2>
              <div className="flex gap-6 pb-4">
                <Link to={member.social_links.facebook} target="blank">
                  <FaFacebookSquare className={`text-2xl `} />
                </Link>
                <Link to={member.social_links.twitter} target="blank">
                  <FaXTwitter className={`text-2xl `} />
                </Link>
                <Link to={member.social_links.instagram} target="blank">
                  <FaInstagram className={`text-2xl `} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
