import { Kalam, Josefin_Sans } from "@next/font/google";
import { certificados } from "utils/profile";
import { RiMapPinLine } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import Img from "next/legacy/image";
import { useState } from "react";
import { BsImages } from "react-icons/bs";

//tipos de letras
const kalam = Kalam({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

//ver certificados
const Certificados = () => {
  const certificado = (pdf: string) => {
    window.open(pdf, "_blank");
  };
  //loader que se muestra mientras carga las imagenes
const [loader, setLoader] = useState(false)
  return (
    <div id="certificates">
      <span
        className={`${kalam.className} mt-44 inline-flex text-3xl text-indigo-600 dark:text-indigo-500 pb-16`}
      >
        Certificados
      </span>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center ">
        {certificados.map(
          ({ link, name, pdf, universidad, nombreDeElCertificado }, i) => (
            <div
              key={i}
              className="border rounded-lg py-6 px-2 border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col justify-center relative">
              {!loader && (
                  <div className="flex justify-center mt-16 z-50 absolute inset-8">
                    <BsImages className="text-8xl animate-pulse text-gray-300" />
                  </div>
                )}
                <Img
                onLoadingComplete={()=>setLoader(true)}
                  className="lg:mx-auto  w-full p-2 rounded-sm lg:pt-0"
                  src={link}
                  alt={name}
                  width={320}
                  height={250}
                  
                />

                <div className="flex-col self-center pb-5">
                  <span
                    className={`${josefin.className} flex items-start text-slate-600 dark:text-white pt-3 gap-2`}
                  >
                    <RiMapPinLine className="text-emerald-600 dark:text-emerald-500 h-6 w-6" />
                    Otorgado por : {universidad}
                  </span>
                  <span
                    className={`${josefin.className} flex items-start text-slate-600 dark:text-white pt-2 gap-2`}
                  >
                    <TbCertificate className="text-emerald-600 dark:text-emerald-500 h-6 w-6" />
                    Nombre de el diplomado : {nombreDeElCertificado}
                  </span>
                </div>
                <h2
                  onClick={() => certificado(pdf)}
                  className={`${josefin.className} bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent dark:text-emerald-500 text-end cursor-pointer hover:text-emerald-700 dark:hover:text-emerald-700 text-xl duration-300`}
                >
                  ver certificado
                </h2>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Certificados;
