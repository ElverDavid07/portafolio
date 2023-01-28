import { Josefin_Sans, Kalam } from "@next/font/google";
import Img from "next/legacy/image";

//tipos de letras
const kalam = Kalam({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" });

const Abaut = () => {
  return (
    <>
      <section id="abaut">
        <h3
          className={`${kalam.className} text-indigo-600 dark:text-indigo-500 pt-16 text-4xl pl-3`}
        >
          Sobre mi
        </h3>
        <div className="flex lg:flex-row  flex-col lg:justify-between">
          <p
            className={`${josefin.className} text-slate-600 dark:text-indigo-50 lg:basis-96 basis-40 pt-2 text-center text-lg flex-wrap`}
          >
            Soy un joven de 18 años con un gran interés en el aprendizaje y el
            desarrollo personal. He estudiado en la Universidad Sergio Arboleda
            y en la Universidad Autónoma de Bucaramanga, y actualmente continuo
            mi formación de manera autodirigida. Estoy emocionado de compartir
            mi conocimiento y habilidades a través de mi portafolio y trabajar
            en proyectos interesantes.
          </p>
          <Img
            src="/computer.svg"
            alt="icon computer"
            width={550}
            height={550}
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Abaut;
