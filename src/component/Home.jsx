import youtube from "../assets/image/youtube.png";
import Facebook from "../assets/image/facebook.png";
import Github from "../assets/image/github.png";
import Linkedin from "../assets/image/linkedin.png";
import Reddit from "../assets/image/reddit.png";
import NS from "../assets/image/NS.png";
import "../index.css";
import { Link } from "react-scroll";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

const Front = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    const elements = [
      ".animate-this1",
      ".animate-this2",
      ".animate-this3",
      ".animate-this4",
      ".animate-this5",
      ".animate-this6",
      ".animate-this7",
    ];
    elements.forEach((element, index) => {
      tl.from(element, { opacity: 0, x: -50, duration: 1 }, index * 0.5).to(
        element,
        { opacity: 1, x: 0, duration: 1 }, // Change y to x here
        "-=0.5"
      );
    });

    // Trigger the animations when the component mounts
    tl.play();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 grid-col   md:grid-cols-2 lg:grid-cols-2 mt-[3rem]">
        {/* left side  */}
        <div className="order-2 sm:order-none flex flex-col pl-24 sm:pl-32 gap-4 mt-10 sm:mt-20 h-64 sm:h-auto md:h-auto">
          <div className="animate-this1 text-2xl font-playfoir font-semibold color-change">
            Nayem Here ! 👋
          </div>
          <div className="animate-this2 text-4xl font-playfoir font-extrabold">
            Love to Learn New Technology.. <br /> Love to Code..😊
          </div>
          <div className="animate-this3 text-2xl text-green-500 font-serif font-extrabold">
            Front End Web-Developer
          </div>
          <div className="animate-this5 flex gap-4 cursor-pointer">
            <div className="shadow-xl border h-12 w-12 flex justify-center items-center rounded-lg ">
              <a href="https://www.youtube.com/channel/UCEnteSXoLRM0h_mfcgJuhhw">
                <img src={youtube} alt="" className="w-6 color-change" />
              </a>
            </div>
            <div className="shadow-xl border h-12 w-12 flex justify-center items-center rounded-lg">
              <a href="https://www.facebook.com/Nayeemsorkar3334?mibextid=ZbWKwL">
                <img src={Facebook} alt="" className="w-6 color-change" />
              </a>
            </div>
            <div className="shadow-xl border h-12 w-12 flex justify-center items-center rounded-lg">
              <a href="https://github.com/mdnayemsarkar">
                <img src={Github} alt="" className="w-6 color-change" />
              </a>
            </div>
            <div className="shadow-xl border h-12 w-12 flex justify-center items-center rounded-lg">
              <a href="https://www.linkedin.com/in/nayem-sarkar-1207aa179/">
                <img src={Linkedin} alt="" className="w-6" />
              </a>
            </div>
          </div>
          <div className="animate-this6 flex gap-12">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={2000}
            >
              {" "}
              <button className="text-white  font-playfoir h-12  w-28 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg   px-5 py-2.5 text-center me-2 mb-2">
                Hire Me!
              </button>
            </Link>
            <div>
              <img src={Reddit} alt="" className="h-12 color-change" />
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="animate-this7 flex items-center justify-center ">
          <img src={NS} alt="" className="h-80  sm:mt-0 sm:h-auto  sm:block" />
        </div>
      </div>
    </>
  );
};
export default Front;
