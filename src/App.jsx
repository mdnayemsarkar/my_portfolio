import Front from "./component/Home";
import Component from "./component/Nav";
import Teach from "./component/Teaching";
import Html from "./component/Htmlcss";
import Teachnology from "./component/Teachnology";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const Home = () => {
  return (
    <>
      <div className="h-full overflow-hidden">
        <Component />
        <Front />
        <Teach />
        <Html />
        <Teachnology />
        <Contact />
        <Footer />
      </div>
    </> 
  );
};

export default Home;
