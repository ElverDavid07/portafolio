import { certificate, navbar, project, skill } from "@/interfaces/component";
//abilidades
export const skills: skill[] = [
  {
    name: "Html5",
    link: "/icons/html.svg",
  },
  {
    name: "Css3",
    link: "/icons/css.svg",
  },
  {
    name: "Javascript",
    link: "/icons/js.svg",
  },
  {
    name: "React.js",
    link: "/icons/react.svg",
  },
  {
    name: "Tailwind css",
    link: "/icons/tailwind.svg",
  },
  {
    name: "Node.js",
    link: "/icons/node.svg",
  },
  {
    name: "Express.js",
    link: "/icons/express.png",
  },
  {
    name: "NextUi",
    link: "/icons/nextUi.png",
  },
  {
    name: "Mongodb",
    link: "/icons/mongodb.svg",
  },
  {
    name: "Next.js",
    link: "/icons/next.svg",
  },
  {
    name: "framer motion",
    link: "/icons/framer-motion.svg",
  },
  {
    name: "Git",
    link: "/icons/git.svg",
  },
  {
    name: "vite.js",
    link: "/icons/vitejs.svg",
  },
  {
    name: "postman",
    link: "/icons/postman.svg",
  },
  {
    name: "Typescript",
    link: "/icons/typescript.svg",
  },
];
//*-----------certificados-----------
export const certificados: certificate[] = [
  {
    name: "certificadoAll",
    link: "/certificates/certificadoAll.jpg",
    pdf: "certificates/certificado.pdf",
    nombreDeElCertificado: "diplomado MisionTic 2022",
    universidad: "Universidad autonoma de bucaramanga",
    descripcion:
      "Obtuve un Diplomado en MisionTic 2022 en la Universidad Autónoma de Bucaramanga en colaboración con el MINTIC. Durante este programa, adquirí una amplia gama de habilidades y conocimientos en desarrollo de front end y back end",
  },
  {
    name: "certificado4",
    link: "/certificates/certificadoC4.jpg",
    nombreDeElCertificado: "desarrollo de aplicaciones web",
    pdf: "certificates/certificadoC4.pdf",
    universidad: "Universidad autonoma de bucaramanga",
    descripcion: "curso realizado en la universidad autonoma de bucaramanga",
  },
  {
    name: "certificadoC3",
    link: "/certificates/certificadoC3.jpg",
    nombreDeElCertificado: "desarrollo de software",
    pdf: "certificados/certificadoC3.pdf",
    universidad: "Universidad sergio arboleda",
    descripcion: "curso realizado en la univercidad sergio arboleda",
  },
];
//*----------projectos------------
export const proyects: project[] = [
  {
    name: "Api de gestion de usuarios",
    link: "/project/apiNode.png",
    descripcion:
      "API de gestión de usuarios con validaciones, autenticación, protección de rutas, paginación, roles de usuario y encriptación de contraseñas. Implementado en Express, TypeScript y MongoDB, incluye un sistema de caché para optimizar el tiempo de respuesta.",
    github: "https://github.com/ElverDavid07/user-management-api",
    ocultarIcon: "icon1",
    web: "#",
    type: "avanzado",
    color: "success",
  },
  {
    name: "crud con next.js",
    link: "/project/crud.png",
    descripcion:
      "Aplicación contruida con next.js, que permite consumir una API de libros y poder realizar operaciones CRUD como  agregar, editar y eliminar libros",
    github: "https://github.com/ElverDavid07/crud-next",
    web: "https://crud-next-two.vercel.app",
    type: "intermedio",
    color: "warning",
  },
  {
    name: "Dasboard",
    link: "/project/dasboard.png",
    descripcion:
      "Estoy desarrollando un dashboard con Next.js que integra dos APIs: usuarios y productos. Este dashboard permitirá visualizar información relevante de ambas APIs en una sola plataforma",
    ocultarIcon: "icon1",
    githubId:"ocultarIconoDeGithub",
    web: "#",
    type: "En desarrollo",
    color: "primary",
  },
];

//navbar
export const itemNavbar: navbar[] = [
  {
    link: "#home",
    to: "home",
    offset: -80,
    smooth: true,
    name: "inicio",
  },
  {
    link: "#abaut",
    to: "abaut",
    offset: -30,
    smooth: true,
    name: "sobre mi",
  },
  {
    link: "#skills",
    to: "skills",
    offset: -160,
    smooth: true,
    name: "abilidades",
  },
  {
    link: "#certificates",
    to: "certificates",
    offset: 75,
    smooth: true,
    name: "certificados",
  },
  {
    link: "#projects",
    to: "projects",
    offset: -110,
    smooth: true,
    name: "proyectos",
  },
  {
    link: "#contact",
    to: "contact",
    offset: -270,
    smooth: true,
    name: "contacto",
  },
];
