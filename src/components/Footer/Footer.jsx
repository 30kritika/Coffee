import { FaFacebook, FaGoogle, FaInstagram, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";

const Footer = () => {
  return (
    <main >
      <div className="bg-beige1 pt-12 pb-8 text-brown2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ml-12">
          {/* company details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Developers Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime, numquam
              dolores.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +1 (123) 456-789
              </p>
              <p className="flex items-center gap-2">
                <BsFillPinMapFill /> Delhi, India
              </p>
            </div>
          </div>

          {/* footer details */}
          <div className="space-y-6 ml-12">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="flex flex-wrap gap-3">
              <ul className="flex flex-col space-y-2 ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact us</li>
                <li className="cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* socials details */}
          <div className="space-y-6 ml-12">
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
