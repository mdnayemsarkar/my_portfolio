const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto grid grid-cols-2 sm:flex sm:justify-between sm:items-center mb-16 bg-slate-100 mt-12 pl-6 sm:pl-auto">
        <div>
          <h3 className="text-sm sm:text-2xl font-semibold">NS Programming</h3>
          <p className="text-xs sm:text-auto">
            Creating awesome things since 2023
          </p>
        </div>
        <div>
          <h4 className="text-sm sm:text-2xl font-semibold mb-4">Contact Us</h4>
          <p className="text-xs sm:text-auto">
            Email: nayemsarkar.ln@gmail.com
          </p>
          <p className="text-xs sm:text-auto">Phone: 01754582520</p>
        </div>
        <div className="pr-20">
          <h4 className="text-sm sm:text-2xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/Nayeemsorkar3334?mibextid=ZbWKwL"
              className="  hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/nayem-sarkar-1207aa179/" className="  hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/mdnayemsarkar" className="  hover:text-gray-400">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} NS Programming. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
