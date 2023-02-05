export interface skill {
  name: string;
  link: string;
}
export interface certificate {
  name: string;
  link: string;
  pdf: string;
  nombreDeElCertificado: string;
  universidad: string;
  descripcion: string;
}
export interface project {
  name: string;
  link: string;
  descripcion: string;
  github: string;
  web?: string;
  ocultarIcon?: string;
}

export interface navbar {
  link: string;
  to: string;
  offset: number;
  smooth: boolean;
  name: string;
}
