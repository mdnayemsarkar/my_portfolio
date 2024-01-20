import Map from "../assets/image/map.png";
import Gmail from "../assets/image/gmail.png";
import Phone from "../assets/image/phone.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // const handleSubmit = () => {
  //   // Perform your form submission logic here

  //   // Show a success toast
  //   toast.success("Form submitted successfully!", {
  //     position: "top-right",
  //     autoClose: 3000, // Adjust the duration (in milliseconds) the toast should be displayed
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  const notify = () => toast(" Submit  Successfully!" ,{
    position:"top-center",theme: "dark"
  });
  return (
    <>
      <div className="grid grid-cols-1  sm:grid sm:grid-cols-2 bg-slate-100  mt-52 sm:mt-0" id="Contact">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md ">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form>
            <div className="flex mb-4 w-60 sm:w-auto">
              <div className="w-1/2 mr-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
            onClick={notify}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              type="submit"
            >
              Send Message
            </button>
          
          </form>
        </div>
        {/* contact field ends here  */}
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md ">
          <div className="w-60 sm:w-auto">
            <p className="text-2xl font-serif font-bold">Contact Info :</p>
            <p className="mt-4 font-serif text-gray-900 ">
              Feel free to contact me for career prospects, <br /> business
              services,and other professional <br />
              inquiries!
            </p>
            <div className="flex flex-col mt-10">
              {/* location start  */}
              <div className="flex gap-8 sm:gap-20 mt-4">
                <div>
                  <img
                    src={Map}
                    alt=""
                    className="h-14 w-14 sm:h-10 border rounded-xl shadow-xl"
                  />
                </div>
                <div className="overflow-x-hidden sm:overflow-auto text-sm">
                  <p>Location</p>
                  <p>Dhaka,Bangladesh</p>
                </div>
              </div>
              {/* location ends  */}
              <div className="flex gap-8 sm:gap-20 mt-4">
                <div>
                  <img
                    src={Gmail}
                    alt=""
                    className="h-14 w-14 sm:h-10 border rounded-xl shadow-xl"
                  />
                </div>
                <div className="overflow-x-hidden sm:overflow-auto text-sm">
                  <p>Email me at</p>
                  <p>nayemsarkar.ln@gmail.com</p>
                </div>
              </div>
              {/* email ends  */}
              <div className="flex gap-20 mt-6">
                <div>
                  <img
                    src={Phone}
                    alt=""
                    className="h-14 w-14 sm:h-10 border rounded-xl shadow-xl"
                  />
                </div>
                <div className="overflow-x-hidden sm:overflow-auto text-sm">
                  <p>Call me at</p>
                  <p>01754582520</p>
                </div>
              </div>
              {/* call ends  */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Contact;
