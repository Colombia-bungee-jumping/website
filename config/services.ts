export interface Service {
  id: string;
  title: string;
  priceFormatted?: string;
  price: string;
  image: string;
  alt: string;
  features: string[];
  showButton: boolean;
}

export const services: Service[] = [
  {
    id: "individual",
    title: "SALTO INDIVIDUAL",
    priceFormatted: "$120.000 COP",
    price: "120000",
    image: "/images/jump-classic.jpg",
    alt: "Salto individual de bungee jumping",
    features: ["Video HD incluido", "Certificado de salto", "Fotos profesionales"],
    showButton: true,
  },
  {
    id: "pareja",
    title: "SALTO EN PAREJA",
    priceFormatted: "$200.000 COP",
    price: "200000",
    image: "/images/jump-couple.jpg",
    alt: "Salto en pareja de bungee jumping",
    features: ["Video HD para los dos", "2 Certificados", "Fotos profesionales"],
    showButton: true,
  },
  {
    id: "video-pro",
    title: "VIDEO PRO 4K",
    priceFormatted: "$50.000 COP",
    price: "50000",
    image: "/images/jump-video.jpg",
    alt: "Video profesional 4K de bungee jumping",
    features: ["Video 4K", "Drone footage", "Edicion profesional"],
    showButton: false,
  },
];
