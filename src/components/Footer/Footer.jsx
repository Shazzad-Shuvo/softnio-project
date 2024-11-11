// icons
import { FaRegClock } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const iconClass = "text-[#FEBF00] text-2xl";
  const footerDivClass = "flex flex-col justify-center items-center gap-5";

  return (
    <div className="py-10 lg:py-24 px-5 text-white">
      <h2 className="text-center font-bebas text-4xl">
        Ready to provide you the best dining experience
      </h2>

      {/* footer text sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-16">
        <div className={footerDivClass}>
          <FaRegClock className={iconClass}></FaRegClock>
          <h4 className="font-bebas text-xl">Opening hours</h4>
          <span className="text-center">
            <p>Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </span>
        </div>
        <div className={footerDivClass}>
          <LuPhoneCall className={iconClass}></LuPhoneCall>
          <h4 className="font-bebas text-xl">LET'S TALK</h4>
          <span className="text-center">
            <p>Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </span>
        </div>
        <div className={footerDivClass}>
          <MdOutlineMail className={iconClass}></MdOutlineMail>
          <h4 className="font-bebas text-xl">BOOK A TABLE</h4>
          <span className="text-center">
            <p>Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </span>
        </div>
        <div className={footerDivClass}>
          <IoLocationOutline className={iconClass}></IoLocationOutline>
          <h4 className="font-bebas text-xl">Our Address</h4>
          <span className="text-center">
            <p>123 Stree New York City , United States Of America.</p>
          </span>
        </div>
      </div>

      {/* footer copyrights & logo */}
      <div className="flex justify-center items-center gap-4 mt-24">
        <span className="">
            <FaFacebook className="text-white text-5xl border rounded-full border-white p-3"></FaFacebook>
        </span>
        <span className="">
            <FaSquareXTwitter className="text-white text-5xl border rounded-full border-white p-3"></FaSquareXTwitter>
        </span>
        <span className="">
            <FaSquareInstagram className="text-white text-5xl border rounded-full border-white p-3"></FaSquareInstagram>
        </span>
        <span className="">
            <FaLinkedin className="text-white text-5xl border rounded-full border-white p-3"></FaLinkedin>
        </span>
      </div>
      <p className="text-center mt-4">&copy; 2023 All Rights Reserved </p>
    </div>
  );
};

export default Footer;
