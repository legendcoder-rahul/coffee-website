import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import footer_logo from "../assets/logo-white-footer.webp";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#212121] text-white md:flex">
        <img className="p-8 md:h-100" src={footer_logo} alt="" />
        <div className="p-6 md:flex">
          
          <div className="pr-10">
            <h3 className="text-2xl pb-2">Location & Hours</h3>
            <p>Visit Us</p>
            <p>4A - 5A Perrins Court, NW3 1QS</p>
            <p>9354814477</p>
            <br />
            <ul>
              <li>Store Hours</li>
              <li>Mon - Fri: 7:30 AM - 5:30 PM</li>
              <li>Sat: 7:30 AM - 6:00 PM</li>
              <li>Sun: 8:00 AM - 6:00 PM</li>
            </ul>
          <ul className="flex items-center gap-3 py-6">
            <li>
              <FaFacebookF className="text-2xl" />
            </li>
            <li>
              <FaInstagram className="text-2xl" />
            </li>
            <li>
              <FaTwitter className="text-2xl" />
            </li>
          </ul>
          </div>
          <div>

          <h3 className="text-xl py-2">More Information</h3>
          <ul className="underline">
            <li>Our Menu</li>
            <li>Our story</li>
            <lI>Recipes</lI>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        </div>
      </div>
        <hr className=" h-full bg-[#121212] text-gray-500 " />
        <p className="text-center py-6 bg-[#121212] text-white">
          &copy; 2024 Coffee Shop. All rights reserved.
        </p>
    </div>
  );
};

export default Footer;
