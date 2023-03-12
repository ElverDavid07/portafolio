import { proyects } from "utils/profile";
import Img from "next/legacy/image";
import { Kalam, Josefin_Sans } from "@next/font/google";
import { Spacer, Tooltip, Badge } from "@nextui-org/react";
import { RiGithubFill, RiGlobalLine } from "react-icons/ri";
import { BsImages } from "react-icons/bs";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState } from "react";

//tipo de letras
const kalam = Kalam({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" });
//-----------------
const Proyectos = () => {
  const { theme } = useTheme();
  //usestate
  const [loader, setLoader] = useState(false);
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
        {proyects.map(
          (
            { link, name, descripcion, github, web, ocultarIcon, type, color,githubId },
            i
          ) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
              key={i}
              className=" py-12 px-3 rounded-lg relative shadow-md shadow-indigo-600/20 dark:shadow-2xl dark:shadow-indigo-500/30"
            >
              <Badge
                disableOutline
                isSquared
                variant={"default"}
                enableShadow
                color={color}
                className="absolute top-0 right-1"
              >
                {type}
              </Badge>
              <div className="relative">
                {!loader && (
                  <div className="flex justify-center inset-16 z-50 absolute">
                    <BsImages className="text-8xl animate-pulse text-gray-300" />
                  </div>
                )}
                <Img
                  onLoadingComplete={() => setLoader(true)}
                  src={link}
                  width={400}
                  height={250}
                  alt={name}
                  className="mx-auto"
                />
              </div>
              <Spacer y={1} />
              <h2 className={`${josefin.className} flex dark:text-white justify-center text-lg mb-3`}>
                {name}{" "}
              </h2>
              <span className={`${josefin.className} dark:text-white`}>
                {descripcion}{" "}
              </span>
              <Spacer y={1} />
              <div className="flex items-center gap-x-2">
                <Tooltip
                  aria-label="tooltip icon github"
                  content="ver codigo"
                  placement="bottomEnd"
                  contentColor={theme === "light" ? "primary" : "secondary"}
                >
                  <a
                  id={githubId}
                    href={github}
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiGithubFill className="h-9 w-8 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600  duration-500" />
                  </a>
                </Tooltip>
                <Tooltip
                  aria-label="tooltip icon web"
                  content="ir a la web"
                  placement="bottomEnd"
                  contentColor={theme === "light" ? "primary" : "secondary"}
                >
                  <a
                    id={ocultarIcon}
                    href={web}
                    aria-label="global"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiGlobalLine
                      aria-label="icon web"
                      className="h-9 w-8 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600  duration-500"
                    />
                  </a>
                </Tooltip>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Proyectos;
