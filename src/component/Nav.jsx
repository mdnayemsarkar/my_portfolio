import { FaArrowLeft } from "react-icons/fa"; // Import the appropriate icon from a library
import { Link } from "react-scroll";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNeos } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

function Component() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4">
          {/* logo  */}
          <div className="flex">
            <FontAwesomeIcon icon={faNeos} className="text-3xl " />
            <span className="font-serif text-2xl font-semibold whitespace-nowrap dark:text-white color-change">
              ayem Sarkar
            </span>
          </div>
          {/* button section  */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            {isOpen ? (
              // Render the back button when the menu is open
              <FaArrowLeft className="w-5 h-5" />
            ) : (
              // Render the regular menu button when the menu is closed
              <svg
                className=" h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          {/* button section  */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium font-serif text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li>
                <a
                  href="#"
                  className="block color-change   px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 "
                  aria-current="page"
                >
                  👋 Hey!
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCEnteSXoLRM0h_mfcgJuhhw"
                  className="block    text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  "
                >
                  YouTube
                </a>
              </li>
              <li>
                <Link
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={2000}
                  className="cursor-pointer block  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  "
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={2000}
                  className="cursor-pointer block  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  "
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={2000}
                  className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a href="https://www.youtube.com/channel/UCEnteSXoLRM0h_mfcgJuhhw">
            <button className="cursor-pointer hidden sm:inline-block text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <i className="fa-brands fa-youtube pr-1 color-change"></i>
              YouTube
            </button>
          </a>
        </div>
      </nav>
      {/* for mobile items  */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-gray-800  z-50 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center h-full ">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none md:hidden lg:hidden"
            >
              {/* Add your back button icon or text here */}
              Back
            </button>

            <ul className="flex flex-col justify-center items-center text-white mb-24">
              <li>
                <a href="#" className="block py-4 px-6 hover:bg-gray-600">
                  Hey!
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCEnteSXoLRM0h_mfcgJuhhwhttps://www.youtube.com/channel/UCEnteSXoLRM0h_mfcgJuhhw"
                  className="block py-4 px-6 hover:bg-gray-600"
                >
                  YouTube
                </a>
              </li>
              <li>
                <Link
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={2000}
                  className="block py-4 px-6 hover:bg-gray-600"
                >
                  Project
                </Link>
              </li>
              <li>
                <a href="#" className="block py-4 px-6 hover:bg-gray-600">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="block py-4 px-6 hover:bg-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Component;
