import { Josefin_Sans, Kalam } from "@next/font/google";
import Img from "next/legacy/image";
import { motion } from "framer-motion";
import { Spacer } from "@nextui-org/react";

const kalam = Kalam({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" });
const Home = () => {
  const certificado = () => {
    window.open("curriculum.pdf", "_blank");
  };
  return (
    <>
      <div className="flex flex-col-reverse  lg:flex-row mx-auto  md:flex-col lg:justify-between ">
        {/* nombre y descripcion */}
        <section className="pl-4   md:mx-0 lg:mx-0 mt-16 lg:basis-[450px] basis-60 ">
          <h5
            className={`${josefin.className} text-slate-600 pl-2 dark:text-indigo-50 `}
          >
            Hola,soy
          </h5>
          <h2
            className={`${kalam.className} text-5xl pt-3  capitalize dark:text-indigo-500 text-indigo-600`}
          >
            Elver David Peñate
          </h2>
          <h3
            className={`${josefin.className}  text-slate-600 dark:text-indigo-50 text-lg`}
          >
            Desarrollador de paginas web
          </h3>
          <Spacer y={0.8} />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-emerald-700 to-emerald-600  text-white font-medium   px-4 py-2 rounded-lg"
            onClick={certificado}
          >
            curriculum
          </motion.button>
        </section>

        {/* imagen */}
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4 }}
        >
          <Img src="/icon.svg" alt="icon" width={550} height={550} priority />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
