import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Abaut from "@/components/Abaut";
import Skill from "@/components/Skills";
import Certificados from "@/components/Certificates";
import Proyectos from "@/components/Projects";
import Contact from "@/components/Contact";
import { ToastContainer, Zoom } from "react-toastify";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="lg:px-20 md:px-15 px-4 scroll-smooth" id="home">
        <Home />
        <Abaut />
        <Skill />
        <Certificados />
        <Proyectos />
        <Contact />
        <ToastContainer
          autoClose={1000}
          closeOnClick={false}
          closeButton={false}
          pauseOnHover={false}
          transition={Zoom}
        />
      </div>
      <Footer />
    </>
  );
};

export default Index;
