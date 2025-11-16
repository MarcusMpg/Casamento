import { Shirt, Sparkles } from "lucide-react";
import madrinha1 from "@/assets/dressCode/Imagem-madrinhas01.png";
import madrinha2 from "@/assets/dressCode/Imagem-madrinhas02.png";
import padrinho from "@/assets/dressCode/Padrinho.png";
import convida1 from "@/assets/dressCode/Imagem-convidadas01.png";
import convida2 from "@/assets/dressCode/Imagem-convidadas02.png";

const DressCode = () => {
  const imagesMaPa = [
    { src: madrinha1, alt: "Madrinha vestido rosa seco" },
    { src: madrinha2, alt: "Madrinha vestido rosa canela" },
    { src: padrinho, alt: "Padrinho traje esporte fino" },
  ];
  const imagesConvidadas = [
    { src: convida1, alt: "Convidada vestido rosa seco" },
    { src: convida2, alt: "Convidada vestido rosa canela" },
  ];
  return (
    <section id="dresscode" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Dress Code
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary"></div>
            <Shirt className="w-8 h-8 text-primary" />
            <div className="h-px w-20 bg-primary"></div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant animate-slide-up">
          <div className="flex items-start gap-4 mb-8">
            <Sparkles className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Esporte Fino
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O traje escolhido é o esporte fino, o equilíbrio ideal entre
                conforto e elegância, para curtir o momento com estilo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Para Elas</h4>
              <p className="text-muted-foreground">
                Vestidos longos e fluídos, com tecidos leves e confortáveis.
              </p>
              <h3 className="text-xl font-semibold text-primary">Madrinhas</h3>
              <p className="text-sm text-muted-foreground italic">
                As madrinhas e damas usarão tons de rosa seco, rosa canela e
                rose, mas essa cor não é exclusiva delas! Se você, convidada,
                quiser usar também, sinta-se à vontade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {imagesMaPa.map((image, index) => (
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
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Para Eles</h4>
              <p className="text-muted-foreground">
                Camisa social de manga longa, calça de alfaiataria ou sarja,
                blazer leve ou terno (opcional). Sapatos sociais, loafers ou
                mocassins.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Gravata não é obrigatória — o visual pode ser leve e elegante!
              </p>
              <h3 className="text-xl font-semibold text-primary">Madrinhas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {imagesConvidadas.map((image, index) => (
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
            </div>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
            <p className="text-foreground font-medium mb-2">
              ⚠️ Atenção especial
            </p>
            <p className="text-muted-foreground">
              Pedimos cuidado com as cores{" "}
              <strong>branco, off-white, bege</strong> e tons muito próximos a
              estas cores, pois são de exclusividade da noiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
