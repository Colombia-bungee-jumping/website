export interface Testimonial {
  id: string;
  name: string;
  countryCode: string;
  text: string;
  rating: number;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Martinez",
    countryCode: "co",
    text: "La experiencia mas increible de mi vida. El equipo de VertexDrop hizo que me sintiera seguro en todo momento. Sin duda volvere a saltar.",
    rating: 5,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "2",
    name: "Ana Lopez",
    countryCode: "es",
    text: "Saltar de noche fue absolutamente magico. Las luces, la adrenalina, la vista de la ciudad. Es algo que todos deberian experimentar al menos una vez.",
    rating: 5,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    name: "Miguel Torres",
    countryCode: "mx",
    text: "Era mi primer salto de bungee y los instructores fueron increibles. Me explicaron todo paso a paso y me dieron la confianza que necesitaba para lanzarme.",
    rating: 5,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "4",
    name: "Laura Fernandez",
    countryCode: "ar",
    text: "La calidad del video y las fotos es impresionante. Tengo recuerdos para toda la vida. El equipo es super profesional y amable.",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "5",
    name: "Diego Ramirez",
    countryCode: "cl",
    text: "Vine con miedo y me fui con ganas de repetir. La atencion desde el momento que llegas es de primera. Te transmiten calma y seguridad.",
    rating: 5,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "6",
    name: "Sofia Herrera",
    countryCode: "co",
    text: "Lo regale a mi novio por su cumpleanos y terminamos saltando los dos. Fue una noche que jamas olvidaremos. Totalmente recomendable.",
    rating: 5,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "7",
    name: "Javier Mendoza",
    countryCode: "us",
    text: "He saltado en 5 paises distintos y VertexDrop tiene el mejor equipo y las mejores ubicaciones. El salto de 120m es pura adrenalina.",
    rating: 5,
    color: "from-indigo-500 to-violet-600",
  },
  {
    id: "8",
    name: "Valentina Cruz",
    countryCode: "br",
    text: "Tenia panico a las alturas y queria superarlo. Los instructores fueron tan pacientes y motivadores que al finalelte sin pensarlo. Experiencia transformadora.",
    rating: 5,
    color: "from-teal-500 to-green-600",
  },
  {
    id: "9",
    name: "Roberto Silva",
    countryCode: "pe",
    text: "Organizamos un evento corporativo con VertexDrop para nuestro equipo de 20 personas. La logistica fue impecable y todos quedaron encantador.",
    rating: 5,
    color: "from-red-500 to-orange-600",
  },
  {
    id: "10",
    name: "Camila Ortega",
    countryCode: "co",
    text: "Las vistas desde la plataforma son de otro mundo. Y cuando te lanzas, sientes que vuelas. VertexDrop sabe como hacer de esto algo magico.",
    rating: 5,
    color: "from-amber-500 to-yellow-600",
  },
];
