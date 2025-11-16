import { Camera } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import storyImage from "@/assets/story-sunset.jpg";
import ceremonyImage from "@/assets/ceremony-venue.jpg";
import receptionImage from "@/assets/reception-venue.jpg";
import foto1 from "@/assets/ft1.jpg";
import foto2 from "@/assets/ft2.jpg";
import foto3 from "@/assets/ft3.jpg";
import foto4 from "@/assets/ft4.jpg";
import foto5 from "@/assets/ft5.jpg";
import foto6 from "@/assets/ft6.jpg";
import foto7 from "@/assets/ft7.jpg";
import foto8 from "@/assets/ft8.jpg";
import foto9 from "@/assets/ft9.jpg";
import foto10 from "@/assets/ft10.jpg";
import foto11 from "@/assets/ft11.jpg";
import foto12 from "@/assets/ft12.jpg";
import foto13 from "@/assets/ft13.jpg";
import foto14 from "@/assets/ft14.jpg";
import foto15 from "@/assets/ft15.jpg";
import foto16 from "@/assets/ft16.jpg";
import foto17 from "@/assets/ft17.jpg";
import foto18 from "@/assets/ft18.jpg";
import foto19 from "@/assets/ft19.jpg";
import foto20 from "@/assets/ft20.jpg";
import foto21 from "@/assets/ft21.jpg";
import foto22 from "@/assets/ft22.jpg";
import foto23 from "@/assets/ft23.jpg";
import foto24 from "@/assets/ft24.jpg";

const Gallery = () => {
  const images = [
    //{ src: heroImage, alt: "Momento especial 1" },
    // { src: storyImage, alt: "Momento especial 2" },
    //{ src: ceremonyImage, alt: "Momento especial 3" },
    // { src: receptionImage, alt: "Momento especial 4" },
    //  { src: foto1, alt: "Momento especial 5" },
    { src: foto2, alt: "Momento especial 6" },
    { src: foto3, alt: "Momento especial 7" },
    { src: foto4, alt: "Momento especial 8" },
    { src: foto5, alt: "Momento especial 9" },
    { src: foto6, alt: "Momento especial 10" },
    { src: foto7, alt: "Momento especial 11" },
    { src: foto8, alt: "Momento especial 12" },
    { src: foto9, alt: "Momento especial 13" },
    { src: foto10, alt: "Momento especial 14" },
    { src: foto11, alt: "Momento especial 15" },
    { src: foto12, alt: "Momento especial 16" },
    { src: foto13, alt: "Momento especial 17" },
    { src: foto14, alt: "Momento especial 18" },
    { src: foto15, alt: "Momento especial 19" },
    { src: foto16, alt: "Momento especial 20" },
    { src: foto17, alt: "Momento especial 21" },
    { src: foto18, alt: "Momento especial 22" },
    { src: foto19, alt: "Momento especial 23" },
    { src: foto20, alt: "Momento especial 24" },
  ];

  return (
    <section id="galeria" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Galeria
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary"></div>
            <Camera className="w-8 h-8 text-primary" />
            <div className="h-px w-20 bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            Mais fotos em breve...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
