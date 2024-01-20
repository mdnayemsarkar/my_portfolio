import Next from "../assets/image/nextjs.webp";
import React from "../assets/image/React.png";
import Css3 from "../assets/image/css.webp";
import Sass from "../assets/image/sass.webp";
import Tailwind from "../assets/image/tailwind-css.webp";
import Git from "../assets/image/git.webp";
import Github from "../assets/image/github.webp";
import Vs from "../assets/image/vscode.webp";
import Figma from "../assets/image/figma.webp";
import Clickup from "../assets/image/clickup.webp";

const Teachnology = () => {
  return (
    <>
      <div className="h-full " id="Skills">
        <p className="text-center mt-32 sm:mt-9 text-2xl font-serif font-bold">
          📺 Few Tech i Know
        </p>
        <p className="text-center mt-4 font-playfoir text-lg text-gray-600 font-bold">
          I just love to learn new things and it's a habit
        </p>
        {/* title ends here  */}

        <div className=" h-80 flex flex-col items-center sm:flex sm:flex-row sm:justify-evenly">
          <div>
            <h1 className="text-lg sm:text-2xl font-serif font-bold   mt-8">
              🖥Frontend Technologies..
            </h1>
            <div className="grid grid-cols-4 items-center justify-center sm:grid sm:grid-cols-3 gap-8 ">
              <img src={Next} alt="" className="h-10   sm:h-11 mt-9" />
              <img src={React} alt="" className="h-10 sm:h-11 mt-9" />
              <img src={Css3} alt="" className="h-10 sm:h-11 mt-9" />
              <img src={Sass} alt="" className="h-10 sm:h-11 mt-9" />
              <img src={Tailwind} alt="" className="h-8 sm:h-11 mt-9" />
            </div>
          </div>
          {/* right side  */}
          <div>
            <h1 className="text-lg pl-8 sm:pl-0 sm:text-2xl font-serif font-bold  mt-12">
              🖥Other Technologies..
            </h1>
            <div className="grid grid-cols-4 items-center justify-center sm:grid sm:grid-cols-3 gap-8 pl-8 sm:pl-0">
              <img src={Git} alt="" className="h-10 sm:h-11 mt-9" />
              <img src={Github} alt="" className="h-10 sm:h-11 mt-9" /> 
              <img src={Vs} alt="" className="h-10 sm:h-11 mt-9" />
              <img src={Figma} alt="" className="h-10 sm:h-11 mt-9" />
              <img src={Clickup} alt="" className="h-8 sm:h-11 mt-9" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Teachnology;
