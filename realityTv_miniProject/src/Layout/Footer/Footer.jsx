import { Link } from "react-router-dom";
import { footerLinks } from "../../Data/Data";
import {
  FaInstagram,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-400 px-6 py-10">
        <div className="grid md:grid-cols-3 grid-cols-1 pb-8 md:gap-4 gap-y-8">
          <h1 className="text-3xl font-bold text-white">
            Reality <span>TV</span>
          </h1>
          <div className="">
            {/* Social media links */}
            {footerLinks.map((link) => (
              <Link
                to={link.path}
                className="text-white hover:text-black text-lg px-5 md:py-0 py-4 inline-block"
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-6">
            <FaFacebookSquare className="text-3xl text-white" />
            <FaInstagram className="text-3xl text-white" />
            <FaWhatsappSquare className="text-3xl text-white" />
            <FaTelegram className="text-3xl text-white" />
            <FaXTwitter className="text-3xl text-white" />
          </div>
        </div>

        <hr />

        <p className="text-white text-center pt-8 text-xl">
          Copyright © {new Date().getFullYear()}. All Rights Reserved. Reality
          TV
        </p>
      </div>
    </>
  );
};

export default Footer;
