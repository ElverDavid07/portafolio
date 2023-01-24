import { Caveat, Josefin_Sans } from "@next/font/google";
import { BsFillMoonStarsFill, BsFillSunFill, BsList } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { itemNavbar } from "@/components/profile";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" });
const Navbar = () => {
  // usestates
  const [themeState, setThemeState] = useState(false);
  useEffect(() => {
    setThemeState(true);
  }, []);
  const { theme, setTheme, systemTheme } = useTheme();
  const customTheme = theme === "system" ? systemTheme : theme;
  return (
    <nav className="flex items-center justify-between px-3 bg-white dark:bg-slate-800 py-5 sticky top-0 z-20">
      <motion.span
        initial={{ x: -100, rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        animate={{ x: 1, rotate: 1 }}
        className={`${caveat.className} text-4xl dark:text-indigo-500 text-indigo-600 px-2`}
      >
        <b>{"<Elv>"}</b>
      </motion.span>
      <div className="flex items-center lg:gap-x-8  ">
        {" "}
        {/* todo */}
        {/* <BsList className="lg:hidden mr-3 text-indigo-600 text-2xl" /> */}
        <div className="mr-3   flex   z-20  items-center gap-3   capitalize">
          {itemNavbar.map(({ link, name, offset, smooth, to }, i) => (
            <Link
            key={i}
              href={link}
              to={to}
              offset={offset}
              smooth={smooth}
              className={`${josefin.className} hover:text-indigo-800 hidden lg:flex text-indigo-600 text-base dark:text-slate-50 dark:hover:text-indigo-600 duration-300 capitalize`}
            >
              {name}
            </Link>
          ))}
        </div>
        <motion.div whileTap={{ scale: 1.2 }}>
          {/* modo oscuro y modo claro */}
          {!themeState ? null : customTheme === "dark" ? (
            <BsFillSunFill
              className="text-yellow-300 hover:text-yellow-400 cursor-pointer text-xl mr-4  hover:-translate-y-[0.8px]"
              onClick={() => setTheme("light")}
            />
          ) : (
            <BsFillMoonStarsFill
              className="text-blue-800 hover:text-blue-900 hover:-translate-y-[0.8px]   cursor-pointer text-xl mr-4"
              onClick={() => setTheme("dark")}
            />
          )}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
