// components/Footer.tsx

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <AiOutlineInstagram /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-stone-800">
        <div className="container mx-auto py-10">
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
            {/* logo and policy side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-4">
              <h1 className="text-4xl font-bold text-yellow-300">movieCo</h1>
              <p className="text-sm font-light text-white">
                Privacy Policy | © {new Date().getFullYear()} movieCo <br />
                All Rights Reserved
              </p>
            </div>
            {/* description and socials side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <p className="text-base font-normal text-white">
                Ditch the lines & book movies from your couch! movieCo lets
                you pick your seat, see showtimes, and even get reminders - all
                in one app. Download today for a hassle-free movie night!
              </p>
              <div className="flex gap-7 text-[18px] text-white justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-stone-700 p-2 rounded-full hover:bg-teal-500 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;