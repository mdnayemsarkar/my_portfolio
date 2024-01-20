import Uni from "../assets/image/Uni.jpeg";
import Digiport from "../assets/image/Dport.jpeg";
import Netflix from "../assets/image/Netflix.jpeg";
import Notion from "../assets/image/notion.png";
const Html = () => {
  return (
    <>
      <div className="h-full bg-gray-100">
        <div>
          <p className="text-center text-2xl font-serif font-extrabold">
            😊💻A Few Html ,Css,Sass,Tailwindcss Project
          </p>
          <p className="text-center font-playfoir text-lg text-gray-600 font-bold">
            Happy to share my Though with you 😊
          </p>
        </div>
        {/* top title ends  */}
        <div className="flex justify-evenly  h-72 mt-10 ">
          <div className="mt-6">
            <div className="max-w-sm p-6 rounded-lg   dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2023
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Explore my HTML and Sass-powered landing page, a sleek showcase
                of modern design.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* left box ends here  */}
          <div className=" w-96 h-60 mt-16 sm:mt-6 rounded-xl shadow-lg overflow-y-scroll">
            <img src={Uni} alt="" />
          </div>
        </div>
        {/* first row ends here  */}
        <div className="">
          {/* left box ends here  */}

          {/* 2nd status  */}
          <div className="flex justify-evenly mt-20 h-72 sm:mt-10 ">
            <div className=" w-96 h-60 mt-16 sm:mt-6 rounded-xl shadow-lg overflow-y-scroll">
              <img src={Digiport} alt="" />
            </div>
            <div className="mt-6">
              <div className="max-w-sm p-6  dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Portfolio With React.js
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* secound row card ends here  */}
          <div className="flex justify-evenly  h-72 mt-24 sm:mt-10 ">
            <div className="mt-6">
              <div className="max-w-sm p-6 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Netflix Project with React.js
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far,trie to Work here api...
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* left box ends here  */}
            <div className=" w-96 h-60 mt-16 sm:mt-6 rounded-xl shadow-lg overflow-y-scroll">
              <img src={Netflix} alt="" />
            </div>
          </div>
          {/* third row ends here  */}
          <div className="flex justify-evenly  h-72 mt-24 sm:mt-10 ">
            <div className=" w-96 h-60 mt-6 rounded-xl shadow-lg overflow-y-scroll">
              <img src={Notion} alt="" />
            </div>
            <div className="mt-6">
              <div className="max-w-sm p-6 rounded-lg   dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Clone Notion Log in Page
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  I just tried my level best to clone Notion sign up page with
                  Html and Css
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* left box ends here  */}
          </div>
          {/* fourth ends here  */}
        </div>
      </div>
    </>
  );
};
export default Html;
