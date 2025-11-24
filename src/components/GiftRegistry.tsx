import { Gift, Heart, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import qrCodePix from "@/assets/qr-code-pix.jpg";
import valeMassagem from "@/assets/Presentes/1- Vale mensagem para a noiva.png";
import lacday from "@/assets/Presentes/2- Lacday.png";
import cofrinho from "@/assets/Presentes/3-Cofrinho da lua de mel.jpeg";
import dosePaciencia from "@/assets/Presentes/4- Dose de paciência para o noivo esperar.png";
import lenco from "@/assets/Presentes/5- Lenço.png";
import gamer from "@/assets/Presentes/6.png";
import aulaOvoFrito from "@/assets/Presentes/7- Aulas de como fritar ovo.png";
import cobertor from "@/assets/Presentes/8- .png";
import cafeAeroporto from "@/assets/Presentes/9- Cafezinho no aeroporto.png";
import cafeRomantico from "@/assets/Presentes/10- Café da manhã romântico no quarto.png";
import buque from "@/assets/Presentes/11- não jogar o buquê.png";
import kitSobrevivencia from "@/assets/Presentes/12- Kit sobrevivência a dois.png";
import passeioBuggy from "@/assets/Presentes/13- Passeio de buggy.png";
import netflix from "@/assets/Presentes/14- 3 meses de netflix.png";
import cursoDeSim from "@/assets/Presentes/15- Curso intensivo de “Sim, amor, você tem razão.png";
import valeShoppe from "@/assets/Presentes/16- .png";
import valeJogo from "@/assets/Presentes/17- Vale para a noiva deixar o noivo jogar vídeo game a vontade.png";
import cotaJantar from "@/assets/Presentes/18- Cota Jantar Romântico para o Casal.png";
import dindin from "@/assets/Presentes/19- Din Din para as lembrancinhas.png";
import diarioHotel from "@/assets/Presentes/20- Diária no hotel.png";
import barco from "@/assets/Presentes/21- Vale Passeio de Barco.png";
import luaDeMel from "@/assets/Presentes/22- Cotas de lua de mel.png";
import cartorio from "@/assets/Presentes/23- Contribua com o cartório.png";
import culinaria from "@/assets/Presentes/24- Um curso de culinária básica para a noiva.png";
import academia from "@/assets/Presentes/25- Academia.png";
import aposentadoria from "@/assets/Presentes/26- Ajuda com a aposentadoria dos noivos.png";
import faturaCartao from "@/assets/Presentes/27- Ajuda com a fatura do cartão do noivo.png";
import psicologo from "@/assets/Presentes/28- Psicólogo para os noivos não surtarem com os preparativos.png";
import cabeloNoivo from "@/assets/Presentes/29- Um ano de cabelo do noivo.png";
import rotaMilagre from "@/assets/Presentes/30- passeio Rota dos milagres em maceio.png";
import traslado from "@/assets/Presentes/31- Traslado do aeroporto_hotel_aeroporto.png";
import computador from "@/assets/Presentes/32- Peça nova de computador para o noivo.png";
import convidadoPreferido from "@/assets/Presentes/33- Seja nosso convidado preferido.png";
import passaporte from "@/assets/Presentes/34- .png";
import mercado from "@/assets/Presentes/35- Mercado para a noiva intolerante e alérgica 2.png";
import rica from "@/assets/Presentes/36- Eu sou ricaaaaa.png";
import passagemAerea from "@/assets/Presentes/37- 2 Passagens Aéreas para a Lua de Mel.png";
import pitaco from "@/assets/Presentes/38- Dar pitaco  falar mal da festa 2.png";
import ajudaLuaMel from "@/assets/Presentes/39- Deus te iluminou e você resolveu dar uma boa ajuda na nossa lua de mel.png";

interface GiftItem {
  name: string;
  price: string;
  image: string;
}

const GiftRegistry = () => {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const gifts: GiftItem[] = [
    {
      name: "Vale mensagem para a noiva",
      price: "R$ 50,00",
      image: valeMassagem,
    },
    {
      name: "Remédio de intolerância à lactose para a noiva comer tudo",
      price: "R$ 60,00",
      image: lacday,
    },
    {
      name: "Cofrinho da lua de mel — para juntar amor e trocados",
      price: "R$ 80,00",
      image: cofrinho,
    },
    {
      name: "Dose de paciência para o noivo esperar a noiva se arrumar",
      price: "R$ 85,00",
      image: dosePaciencia,
    },
    {
      name: "Lenço para o noivo chorão secar as lágrimas na entrada da noiva",
      price: "R$ 85,00",
      image: lenco,
    },
    {
      name: "Tampão de ouvido para a noiva não escutar o noivo jogar",
      price: "R$ 100,00",
      image: gamer,
    },
    {
      name: "Aulas de como fritar ovo",
      price: "R$ 100,00",
      image: aulaOvoFrito,
    },
    {
      name: "Cobertor para a noiva estar sempre coberta de razão",
      price: "R$ 125,00",
      image: cobertor,
    },
    {
      name: "Cafezinho no aeroporto",
      price: "R$ 130,00",
      image: cafeAeroporto,
    },
    {
      name: "Café da manhã romântico no quarto",
      price: "R$ 150,00",
      image: cafeRomantico,
    },
    {
      name: "Taxa para a noiva não jogar o buquê para a sua namorada",
      price: "R$ 150,00",
      image: buque,
    },
    {
      name: "Kit 'sobrevivência a dois' (chocolate + paciência + Wi-Fi)",
      price: "R$ 150,00",
      image: kitSobrevivencia,
    },
    { name: "Passeio de buggy", price: "R$ 174,00", image: passeioBuggy },
    { name: "3 meses de netflix", price: "R$ 180,00", image: netflix },
    {
      name: "Curso intensivo de 'Sim, amor, você tem razão'",
      price: "R$ 180,00",
      image: cursoDeSim,
    },
    { name: "Vale shoppe para a noiva", price: "R$ 200,00", image: valeShoppe },
    {
      name: "Vale para a noiva deixar o noivo jogar vídeo game a vontade",
      price: "R$ 220,00",
      image: valeJogo,
    },
    {
      name: "Cota Jantar Romântico para o Casal",
      price: "R$ 250,00",
      image: cotaJantar,
    },
    {
      name: "Din Din para as lembrancinhas",
      price: "R$ 275,00",
      image: dindin,
    },
    { name: "Diária no hotel", price: "R$ 300,00", image: diarioHotel },
    { name: "Vale Passeio de Barco", price: "R$ 300,00", image: barco },
    { name: "Cotas de lua de mel!", price: "R$ 330,00", image: luaDeMel },
    { name: "Contribua com o cartório", price: "R$ 385,00", image: cartorio },
    {
      name: "Um curso de culinária básica para a noiva",
      price: "R$ 400,00",
      image: culinaria,
    },
    {
      name: "Academia para os noivos entrarem em forma depois da lua de mel",
      price: "R$ 480,00",
      image: academia,
    },
    {
      name: "Ajuda com a aposentadoria dos noivos",
      price: "R$ 500,00",
      image: aposentadoria,
    },
    {
      name: "Ajuda com a fatura do cartão do noivo",
      price: "R$ 550,00",
      image: faturaCartao,
    },
    {
      name: "Psicólogo para os noivos não surtarem com os preparativos",
      price: "R$ 580,00",
      image: psicologo,
    },
    {
      name: "Um ano de cabelo do noivo",
      price: "R$ 600,00",
      image: cabeloNoivo,
    },
    { name: "Rota dos milagres", price: "R$ 660,00", image: rotaMilagre },
    {
      name: "Traslado do aeroporto/hotel/aeroporto",
      price: "R$ 680,00",
      image: traslado,
    },
    {
      name: "Peça nova de computador para o noivo",
      price: "R$ 750,00",
      image: computador,
    },
    {
      name: "Seja nosso convidado preferido",
      price: "R$ 800,00",
      image: convidadoPreferido,
    },
    {
      name: "Deixar o passaporte e visto em dia",
      price: "R$ 932,00",
      image: passaporte,
    },
    {
      name: "Mercado para a noiva intolerante e alérgica",
      price: "R$ 1.000,00",
      image: mercado,
    },
    { name: "Eu sou ricaaaaa", price: "R$ 1.500,00", image: rica },
    {
      name: "2 Passagens Aéreas para a Lua de Mel",
      price: "R$ 1.800,00",
      image: passagemAerea,
    },
    {
      name: "Dar pitaco/ falar mal da festa",
      price: "R$ 2.000,00",
      image: pitaco,
    },
    {
      name: "Deus te iluminou e você resolveu dar uma boa ajuda na nossa lua de mel",
      price: "R$ 2.500,00",
      image: ajudaLuaMel,
    },
  ];

  const handleGiftClick = (gift: GiftItem) => {
    setSelectedGift(gift);
    setIsDialogOpen(true);
  };

  return (
    <section id="presentes" className="py-20 px-4 bg-gradient-romantic">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Lista de Presentes
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-primary"></div>
            <Gift className="w-8 h-8 text-primary" />
            <div className="h-px w-20 bg-primary"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preparamos nossa lista de presentes de um jeitinho diferente: todos
            os itens são simbólicos e podem ser adquiridos através de Pix. Cada
            presente representa um pedacinho do nosso novo começo!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
          {gifts.map((gift, index) => (
            <button
              key={index}
              onClick={() => handleGiftClick(gift)}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-elegant transition-all duration-300 hover:scale-105 text-left group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                    {gift.name}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {gift.price}
                  </p>
                </div>
                <Heart className="w-5 h-5 text-primary flex-shrink-0 group-hover:fill-primary transition-all" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Clique em qualquer presente para ver as informações de pagamento via
            Pix
          </p>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {selectedGift?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-2xl font-bold text-primary">
              {selectedGift?.price}
            </p>
            <div className="flex justify-center">
              <img
                src={qrCodePix}
                alt="QR Code PIX para presente"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Escaneie o QR Code acima para fazer o PIX
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GiftRegistry;
