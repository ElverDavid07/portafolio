import { skills } from "./profile";
import { Loading, Tooltip } from "@nextui-org/react";
import { Kalam } from "@next/font/google";
import Img from "next/legacy/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";

const kalam = Kalam({ subsets: ["latin"], weight: "700" });
const Skill = () => {
  const { theme } = useTheme();
  const [loader, setLoader] = useState(false)

  return (
    <>
      <h3
        className={`${kalam.className} text-indigo-600 dark:text-indigo-500  text-4xl pt-16 text-center`}
      >
        habilidades
      </h3>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-y-4  justify-items-center pt-6"
        id="skills"
      >
        {skills.map(({name,link}, i) => (
          <motion.div whileHover={{ scale: 1.1 }} key={i}>
            <Tooltip
              content={name}
              color={theme === "dark" ? "default" : "invert"}
              contentColor={theme === "dark" ? "primary" : "success"}
              className="cursor-default"
            >
              <motion.div>
              {!loader && (
                  <div className="flex justify-center mt-10 z-50">
                    
                    <Loading type="points" size="lg"/>
                  </div>
                )}
                <Img
                onLoadingComplete={()=>setLoader(true)}
                  src={link}
                  alt={name}
                  width={50}
                  height={50}
                  className="cursor-default"
                />
              </motion.div>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skill;
