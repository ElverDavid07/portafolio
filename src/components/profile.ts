interface skill {
  name: string;
  link: string;
}
interface certificate {
  name: string;
  link: string;
  pdf: string;
  nombreDeElCertificado: string;
  universidad: string;
  descripcion: string;
}
interface project {
  name: string;
  link: string;
  descripcion: string;
  github: string;
}

interface navbar {
  link: string;
  to: string;
  offset: number;
  smooth: boolean;
  name: string;
}
//abilidades
export const skills: skill[] = [
  {
    name: "Html5",
    link: "/html.svg",
  },
  {
    name: "Css3",
    link: "/css.svg",
  },
  {
    name: "Javascript",
    link: "/js.svg",
  },
  {
    name: "React.js",
    link: "/react.svg",
  },
  {
    name: "Tailwind css",
    link: "/tailwind.svg",
  },
  {
    name: "Node.js",
    link: "/node.svg",
  },
  {
    name: "Express.js",
    link: "/express.png",
  },
  {
    name: "NextUi",
    link: "/nextUi.png",
  },
  {
    name: "Mongodb",
    link: "/mongodb.svg",
  },
  {
    name: "Next.js",
    link: "/next.svg",
  },
  {
    name: "framer motion",
    link: "/framer-motion.svg",
  },
  {
    name: "Git",
    link: "/git.svg",
  },
  {
    name: "vite.js",
    link: "/vitejs.svg",
  },
  {
    name: "postman",
    link: "/postman.svg",
  },
];
//certificados
export const certificados: certificate[] = [
  {
    name: "certificadoAll",
    link: "/certificados/certificadoAll.jpg",
    pdf: "certificados/certificado.pdf",
    nombreDeElCertificado: "diplomado MisionTic 2022",
    universidad: "Universidad autonoma de bucaramanga",
    descripcion:
      "Obtuve un Diplomado en MisionTic 2022 en la Universidad Autónoma de Bucaramanga en colaboración con el MINTIC. Durante este programa, adquirí una amplia gama de habilidades y conocimientos en desarrollo de front end y back end",
  },
  {
    name: "certificado4",
    link: "/certificados/certificadoC4.jpg",
    nombreDeElCertificado: "desarrollo de aplicaciones web",
    pdf: "certificados/certificadoC4.pdf",
    universidad: "Universidad autonoma de bucaramanga",
    descripcion: "curso realizado en la universidad autonoma de bucaramanga",
  },
  {
    name: "certificadoC3",
    link: "/certificados/certificadoC3.jpg",
    nombreDeElCertificado: "desarrollo de software",
    pdf: "certificados/certificadoC3.pdf",
    universidad: "Universidad sergio arboleda",
    descripcion: "curso realizado en la univercidad sergio arboleda",
  },
];
//projectos
export const proyects: project[] = [
  {
    name: "apiNode",
    link: "/project/apiNode.png",
    descripcion:
      "API de libros desarrollada usando node.js, express.js y mongodb atlas, esta API se encarga de proporcionar las funciones básicas de un sistema CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de libros.",
    github: "https://github.com/ElverDavid07/backendC4G3",
  },
  {
    name: "crud con react",
    link: "/project/crud.png",
    descripcion:
      "interfaz de usuario construida con React, que permite consumir la API de libros y brinda una experiencia de usuario amigable y fácil de usar. Los usuarios podrán realizar operaciones como  agregar, editar y eliminar libros.",
    github: "https://github.com/ElverDavid07/frondG3C4",
  },
  {
    name: "usando api de rick y morty",
    link: "/project/rickMorty.png",
    descripcion:
      "aplicación web que consume la API de Rick and Morty para proporcionar información sobre los personajes, episodios y eventos de la serie. La interfaz de usuario está construida con React. ",
    github: "https://github.com/ElverDavid07/RickAndMorty",
  },
];

//navbar
export const itemNavbar: navbar[] = [
  {
    link: "#home",
    to: "home",
    offset: -80,
    smooth: true,
    name:"inicio"
  },
  {
    link: "#abaut",
    to: "abaut",
    offset: -30,
    smooth: true,
    name:"sobre mi"
  },
  {
    link: "#skills",
    to: "skills",
    offset: -160,
    smooth: true,
    name:"abilidades"
  },
  {
    link: "#certificates",
    to: "certificates",
    offset: 75,
    smooth: true,
    name:"certificados"
  },
  {
    link: "#projects",
    to: "projects",
    offset: -110,
    smooth: true,
    name:"proyectos"
  },
  {
    link: "#contact",
    to: "contact",
    offset: -270,
    smooth: true,
    name:"contacto"
  },
];