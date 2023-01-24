import { proyects } from "@/components/profile";
import Img from "next/legacy/image";
import { Kalam, Josefin_Sans } from "@next/font/google";
import { Spacer, Tooltip } from "@nextui-org/react";
import { RiGithubFill } from "react-icons/ri";
import { useTheme } from "next-themes";

//tipografia 
const kalam = Kalam({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" });
//-----------------
const Proyectos = () => {
  const {theme} = useTheme()
  return (
    <div id="projects">
      <Spacer y={8} />
      <span
        className={`${kalam.className} text-3xl text-indigo-600 dark:text-indigo-500`}
      >
        Proyectos personales
      </span>
      <Spacer y={2} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-7 ">
        {proyects.map(({ link, name, descripcion, github }, i) => (
          <div
            key={i}
            className=" py-12 px-3 rounded-lg shadow-md shadow-indigo-600/20 dark:shadow-2xl dark:shadow-indigo-500/30"
          >
            <div className="flex justify-center">
            <Img src={link} width={400} height={250} alt={name} className="md:mx-auto" />
            </div>
            <Spacer y={1} />
            <span className={`${josefin.className} dark:text-white`}>
              {descripcion}{" "}
            </span>
            <Spacer y={1} />
            <Tooltip
              content="ver codigo"
              placement="bottomEnd"
              contentColor={(theme === "light")? "primary" : "secondary"}
              
            >
              <a
                href={github}
                aria-label="github"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubFill className="h-9 w-8 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600  duration-500" />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
