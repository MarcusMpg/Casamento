import { Shirt, Sparkles } from "lucide-react";
import padrinhosImg from "@/assets/dressCode/padrinho.png";
import convidados1 from "@/assets/dressCode/convidados01.png";
import convidados2 from "@/assets/dressCode/convidados02.png";
import convidados3 from "@/assets/dressCode/convidado03.png";
import convidados4 from "@/assets/dressCode/convidado04.png";

import madrinha01 from "@/assets/dressCode/madrinhas/imagem-madrinhas01.png";
import madrinha02 from "@/assets/dressCode/madrinhas/imagem-madrinhas02.png";
import convidadas01 from "@/assets/dressCode/convidadas/convidadas01.png";
import convidadas02 from "@/assets/dressCode/convidadas/convidada02.png";
import convidadas03 from "@/assets/dressCode/convidadas/convidada03.png";

const DressCode = () => {
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
              <h3 className="text-2xl font-bold mb-4 text-foreground ">
                Esporte Fino
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 text-justify">
                O traje escolhido é o esporte fino, o equilíbrio ideal entre
                conforto e elegância, para curtir o momento com estilo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl md:text-2xl font-semibold text-primary">
                Para Elas
              </h4>
              <p className="text-muted-foreground md:text-lg">
                Vestidos longos e fluídos, com tecidos leves e confortáveis.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Madrinhas
              </h3>
              <p className="text-sm md:text-base text-muted-foreground italic text-justify">
                As madrinhas e damas usarão tons de rosa seco, rosa canela e
                rose, mas essa cor não é exclusiva delas! Se você, convidada,
                quiser usar também, sinta-se à vontade.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <img
                  src={madrinha01}
                  alt="Dress code das madrinhas"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <img
                  src={madrinha02}
                  alt="Dress code das madrinhas"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Convidadas
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <img
                  src={convidadas01}
                  alt="Dress code das madrinhas"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <img
                  src={convidadas02}
                  alt="Dress code das madrinhas"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <img
                  src={convidadas03}
                  alt="Dress code das madrinhas"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl md:text-2xl font-semibold text-primary">
                Para Eles
              </h4>
              <p className="text-muted-foreground text-justify md:text-lg">
                Camisa social de manga longa, calça de alfaiataria ou sarja,
                blazer leve ou terno (opcional). Sapatos sociais, loafers ou
                mocassins. Gravata não é obrigatória — o visual pode ser leve e
                elegante!
              </p>
              {/* <p className="text-sm text-muted-foreground italic">
                
              </p> */}
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Padrinhos
              </h3>
              <p className="text-sm md:text-base text-muted-foreground italic text-justify">
                Os padrinhos usarão terno cinza claro, camisa branca, gravata
                rosa (a mesma que enviamos na caixa dos padrinhos), além de
                sapato e cinto marrom. Esse visual foi escolhido para manter a
                harmonia do dia e deixar tudo ainda mais especial.
              </p>
              <div>
                <img
                  src={padrinhosImg}
                  alt="Dress code dos padrinhos"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Convidados
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <img
                  src={convidados1}
                  alt="Dress code dos padrinhos"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <img
                  src={convidados2}
                  alt="Dress code dos padrinhos"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <img
                  src={convidados3}
                  alt="Dress code dos padrinhos"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <img
                  src={convidados4}
                  alt="Dress code dos padrinhos"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
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
