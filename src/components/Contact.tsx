import { Button, Loading, Spacer } from "@nextui-org/react";
import { Kalam, Josefin_Sans } from "@next/font/google";
import { useForm } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Link } from "@nextui-org/react";
import {useState} from 'react'

//tipos de letras
const kalam = Kalam({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" });

const Contact = () => {
  //validador de el formulario
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isValid },
  } = useForm();
  //cuando se envia el formulario
  const customSubmit = async () => {
    try {
      await emailjs.sendForm(
        "service_aqcg77r",
        "template_9v5xeya",
        "#formId",
        "HmJktww9rFB4Doery"
      );
      reset();
      toast.info("correo enviado correctamente");
    } catch (error) {
      console.log(error);
    }
    setLoaderbtn(true)
  };
  //usestate
  const [loaderbtn, setLoaderbtn] = useState(true)
 
  return (
    <>
      <Spacer y={10} />
      <span
        className={`${kalam.className} text-4xl text-indigo-600 dark:text-indigo-500 flex justify-center pb-10`}
      >
        contacto
      </span>
      <h2
        className={`${josefin.className} text-center text-xl text-slate-700 dark:text-white`}
      >
        ¡Gracias por visitar mi portafolio! Si deseas ponerte en contacto
        conmigo, puedes enviarme un correo electrónico, atravez de este
        formulario o atravez de{" "}
        <Link isExternal target={"_blank"} href="https://github.com/ElverDavid07" className="text-indigo-600 dark:text-indigo-400 underline">
          github
        </Link>
      </h2>
      <Spacer y={2} />
      <div className="flex justify-center" id="contact">
        <form
        id="formId"
          onSubmit={handleSubmit(customSubmit)}
          className="flex flex-col gap-y-5  py-10 px-5 rounded-xl border border-indigo-600 dark:border dark:border-indigo-600 dark:shadow-2xl dark:shadow-indigo-600/50 w-[370px] relative"
        >
          <label
            htmlFor="nombre"
            className=" text-indigo-600 dark:text-indigo-400 text-lg font-semibold"
          >
            Nombre
          </label>
          {/* uso de react-hook-form para validar el formulario */}
          <input
            type="text"
            {...register("nombre", { required: true })}
            autoComplete="off"
            placeholder="nombre"
            className={`${
              errors.nombre &&
              "focus:border-red-500 border-red-500 dark:focus:border-red-500 dark:border-red-500"
            } border-2 px-4 py-2 border-indigo-200 rounded-2xl placeholder:text-indigo-300 focus:border-indigo-600 dark:bg-white duration-500 `}
          />
          {errors.nombre && (
            <small className="text-red-500 pl-3 flex items-center gap-x-2 absolute top-[134px] ">
              <AiOutlineWarning className="h-4 w-4" /> el campo no puede estar
              vacio
            </small>
          )}
          {/* ------------- */}
          <label
            htmlFor="correo"
            className=" text-indigo-600 dark:text-indigo-400 text-lg font-semibold"
          >
            Correo
          </label>
          <input
            type="email"
            {...register("correo", {
              required: true,
              pattern:
                /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            })}
            autoComplete="off"
            placeholder="Correo"
            className={`${
              errors.correo &&
              "focus:border-red-500 border-red-500 dark:border-red-500 dark:focus:border-red-500"
            } border-2 dark:bg-white    placeholder:text-indigo-300 px-4 py-2 border-indigo-200 rounded-2xl focus:border-indigo-500 duration-500`}
          />
          {errors.correo?.type === "required" && (
            <small className="text-red-500 pl-3 flex items-center gap-x-2 absolute top-[250px] ">
              <AiOutlineWarning className="h-4 w-4" /> el campo no puede estar
              vacio
            </small>
          )}
          {errors.correo?.type === "pattern" && (
            <small className="text-red-500 pl-3 flex items-center gap-x-2 absolute top-[250px] ">
              <AiOutlineWarning className="h-4 w-4" />
              escribe un correo valido
            </small>
          )}

          {/* ------------- */}
          <label
            htmlFor="mensaje"
            className=" text-indigo-600 dark:text-indigo-400 text-lg font-semibold"
          >
            Mensaje
          </label>
          <textarea
            {...register("mensaje", { required: true,minLength:4 })}
            autoComplete="off"
            placeholder="Mensaje..."
            className={` ${
              errors.mensaje &&
              "focus:border-red-500 border-red-500 dark:focus:border-red-500 dark:border-red-500"
            } border-2 px-4 py-2 border-indigo-200 rounded-2xl focus:border-indigo-600 duration-500  resize-none dark:bg-white placeholder:text-indigo-300`}
          />
         {errors.mensaje?.type === "required" && (
            <small className="text-red-500 pl-3 flex items-center gap-x-2 absolute top-[385px] ">
              <AiOutlineWarning className="h-4 w-4" /> el campo no puede estar
              vacio
            </small>
          )}
          {errors.mensaje?.type === "minLength" && (
            <small className="text-red-500 pl-3 flex items-center gap-x-2 absolute top-[385px] ">
              <AiOutlineWarning className="h-4 w-4" /> el mensaje tiene que ser mayor a 4 caracteres
            </small>
          )}
          {/* ------------------ */}
          <Button
          onPress={()=>{(isValid === true)? setLoaderbtn(false) : ""}}
          type="submit"
            className="bg-gradient-to-r from-emerald-800 to-emerald-600 hover:shadow-lg dark:hover:shadow-emerald-600/70 duration-1000 mt-3"
          >
            {(loaderbtn === false)? (<Loading type="points-opacity" color={"white"}/>) :"Enviar"}
            
          </Button>
        </form>
      </div>
      <Spacer y={3} />
    </>
  );
};
/* www.linkedin.com/in/elver-peñate */
export default Contact;
