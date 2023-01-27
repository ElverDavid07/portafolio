import { RiFlagLine, RiMapPinLine } from "react-icons/ri";

const Footer = () => {
  const data =new Date()
  const year = data.getFullYear()
  return (
    <>
 <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-y-5 items-center lg:justify-around md:justify-around dark:bg-gray-700 bg-slate-100 h-32">
 <span className="flex items-center gap-x-2 dark:text-white">
        <RiFlagLine className="text-lg" />
        Colombia
      </span>
      <span className="flex items-center gap-x-2 dark:text-white">
        <RiMapPinLine className="text-lg"/>
        Urabá-Antioquia
      </span>
      <span className="dark:text-white">Copyright &copy; {year} </span>
 </div>
    </>
  );
};

export default Footer;
