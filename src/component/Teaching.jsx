import Youtube from "../assets/image/youtube.png";
import React from "../assets/image/React.png";
import lp from "../assets/video/updated11.mp4";
import gp from "../assets/video/GP.mp4";
import btn from "../assets/video/BTN.mp4";
import Scl from "../assets/video/scl.mp4";
import Tvl from "../assets/video/Tvl.mp4";
import Tvll from "../assets/video/Travel.mp4";
import Dust from "../assets/video/Dust.mp4";
import { useEffect } from "react";
import gsap from "gsap";

const Teach = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    const elements = [
      ".animate-this1",
      ".animate-this2",
      ".animate-this3",
      ".animate-this4",
      ".animate-this5",
      ".animate-this6",
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
      <div className="h-full mt-44 sm:mt-24 sm:mb-16" id="Project">
        <div className="text-center text-xl sm:text-3xl font-serifv font-extrabold flex justify-center">
          <img src={Youtube} alt="" className="h-10 pr-4" />
          Youtube - Teaching - Passion
        </div>
        <p className="text-sm sm:text-lg mt-2 text-gray-400 font-playfoir font-bold text-center">
          Never Thought I'll will enjoy teaching this much and want to be a
          teacher
        </p>
        {/* courses section  */}
        <div className="flex pl-10 sm:pl-32 mt-16  shadow-sm w-64">
          <div className="h-7 w-1 bg-slate-500  "></div>
          <div className="pl-0 sm:pl-3 text-base sm:text-xl text-green-500 font-playfoir font-bold">
            courses :
          </div>
        </div>
        {/* card  */}
        <div className=" flex flex-col justify-center items-center gap-6 sm:flex sm:flex-row sm:justify-evenly mt-10">
          <div className=" animate-this1 h-60 w-64 rounded-md shadow-2xl">
            <div className="h-44 w-full ">
              <video controls autoPlay muted className="h-full">
                <source src={lp} type="video/mp4" />
              </video>
            </div>
            <div className="font-serif font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400 font-playfoir">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500 font-playfoir"
              >
                CLick Here..
              </a>
            </div>
          </div>
          <div className="animate-this2 h-60 w-64 rounded-md shadow-2xl">
            <div className="h-44 w-full ">
              <video controls muted className="h-full">
                <source src={gp} type="video/mp4" className="h-full" />
              </video>
            </div>
            <div className="font-serif font-extrabold text-gray-700 pl-4">
              Glassmorphism Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400 font-playfoir">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0coOgGFKsWe8SdyoepdZajO%26si%3DkQhprQLGgiBAeioE%26fbclid%3DIwAR30wVQxZSkeUtOydvWf643oYG1yQMCpGXibTC9QITxv_HpA5BJmw319Sqk&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500 font-playfoir"
              >
                CLick Here..
              </a>
            </div>
          </div>
          <div className="animate-this3 shadow-2xl h-60 w-64 rounded-md">
            <div className="h-44 w-full ">
              <video controls muted className="h-full">
                <source src={btn} type="video/mp4" />
              </video>
            </div>
            <div className="font-serif font-extrabold text-gray-700 pl-4">
              Button Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400 font-playfoir">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0cR2GqG9De0zp3mlqUZsSyn%26si%3DocbC9e1zwrVdDjpb%26fbclid%3DIwAR1ZbfZ931j0N3FsQvrXwqPELKqYlAH7b5ijXGJx7VCkj6yC_mYPGkxhZks&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500 font-playfoir"
              >
                CLick Here..
              </a>
            </div>
          </div>
        </div>
        {/* React Project here */}
        <div className="text-center text-xl sm:text-3xl font-serifv font-extrabold flex justify-center mt-28">
          <img src={React} alt="" className="h-10 pr-4" />A Few React Project
          Here..
        </div>
        <p className="text-sm pl-3 sm:text-lg mt-2 text-gray-400 font-playfoir font-bold text-center">
          Never Thought I'll will enjoy teaching this much and want to be a
          teacher
        </p>
        <div className="flex pl-10 sm:pl-32 mt-16  shadow-sm  w-96">
          <div className="h-7 w-1 bg-slate-500  "></div>
          <div className="pl-3 text-xl text-green-500 font-playfoir font-bold">
            Practice React Project:
          </div>
        </div>
        {/* card  */}
        <div className="flex flex-col justify-center items-center gap-6 sm:flex sm:flex-row sm:justify-evenly mt-10">
          <div className=" animate-this1 h-60 w-64 rounded-md shadow-2xl">
            <div className="h-44 w-full ">
              <video controls autoPlay muted className="h-full">
                <source src={Scl} type="video/mp4" />
              </video>
            </div>
            <div className="font-serif font-extrabold text-gray-700  pl-4">
              School Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400 font-playfoir">
                Github Link
              </p>
              <a
                href="https://github.com/mdnayemsarkar/Mbksk_scl"
                className="text-sm text-blue-500 font-playfoir"
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* sub card  */}
          <div className="animate-this2 h-60 w-64 rounded-md shadow-2xl">
            <div className="h-44 w-full ">
              <video controls autoPlay muted className="h-full">
                <source src={Tvl} type="video/mp4" className="h-full" />
              </video>
            </div>
            <div className="font-serif font-extrabold text-gray-700 pl-4">
              Travell page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400 font-playfoir">
                Github Link
              </p>
              <a
                href="https://github.com/mdnayemsarkar/First_responsive_website"
                className="text-sm text-blue-500 font-playfoir"
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* sub card */}
          <div className="animate-this3 shadow-2xl h-60 w-64 rounded-md">
            <div className="h-44 w-full ">
              <video controls autoPlay muted className="h-full">
                <source src={Tvll} type="video/mp4" />
              </video>
            </div>
            <div className="font-serif font-extrabold text-gray-700 pl-4">
              Travell page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400 font-playfoir">
                Github Link
              </p>
              <a
                href="https://github.com/mdnayemsarkar/Digital_website"
                className="text-sm text-blue-500 font-playfoir"
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* sub card  */}
          <div className=" ">
            <div className="animate-this4 h-60 w-64 rounded-md shadow-2xl ">
              <div className="h-44 w-full ">
                <video controls autoPlay muted className="h-full">
                  <source src={Dust} type="video/mp4" className="h-full" />
                </video>
              </div>
              <div className="font-serif font-extrabold text-gray-700 pl-4">
                Travell page Design
              </div>
              <div className="flex justify-between mt-4 px-4">
                <p className="text-sm text-green-400 font-playfoir">
                  Live link
                </p>
                <a
                  href="https://soft-horse-076568.netlify.app/ "
                  className="text-sm text-blue-500 font-playfoir"
                >
                  CLick Here..
                </a>
              </div>
            </div>
          </div>
          {/* sub card ends  */}
        </div>

        {/* card ends here  */}
        <div className="text-center h-56">
          <a href="https://www.youtube.com/channel/UCEnteSXoLRM0h_mfcgJuhhw">
            <button className="bg-blue-600 text-white font-playfoir text-lg text-center h-12 w-40 mt-28 rounded-lg ">
              Watch more 👉
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Teach;
