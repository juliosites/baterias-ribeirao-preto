import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, Battery, MapPin } from "lucide-react";

const Neighborhood = () => {
  const { neighborhood } = useParams();
  
  const neighborhoodData = {
    "jardim-paulista": {
      title: "Baterias no Jardim Paulista - Ribeirão Preto",
      description: "Serviço especializado de baterias automotivas no Jardim Paulista. Atendimento 24 horas com profissionais qualificados.",
      content: "Precisando de bateria nova no Jardim Paulista? Nossa equipe especializada atende toda a região com serviço móvel 24 horas. Oferecemos as melhores marcas de baterias para carros, motos e caminhões, com garantia estendida e preços competitivos.",
      features: [
        "Atendimento emergencial 24 horas",
        "Troca de bateria em domicílio",
        "Teste gratuito da bateria atual",
        "Descarte ecológico da bateria antiga"
      ]
    },
    "centro": {
      title: "Baterias no Centro - Ribeirão Preto",
      description: "Troca de bateria 24 horas no Centro de Ribeirão Preto. Atendimento rápido e profissional para todos os tipos de veículos.",
      content: "Localizado no coração de Ribeirão Preto, nosso serviço de baterias atende toda a região central com rapidez e eficiência. Contamos com estoque completo das principais marcas e técnicos especializados.",
      features: [
        "Pronto atendimento no Centro",
        "Serviço móvel para empresas",
        "Baterias com garantia estendida",
        "Suporte técnico especializado"
      ]
    },
    "campos-eliseos": {
      title: "Baterias em Campos Elíseos - Ribeirão Preto",
      description: "Serviço completo de baterias em Campos Elíseos. Atendimento 24 horas com as melhores marcas do mercado.",
      content: "Em Campos Elíseos, oferecemos serviço completo de baterias para todos os tipos de veículos. Nossa equipe está sempre pronta para atender suas necessidades com rapidez e qualidade.",
      features: [
        "Atendimento residencial e comercial",
        "Baterias para todos os tipos de veículos",
        "Serviço de socorro 24 horas",
        "Melhores preços da região"
      ]
    },
    "vila-tiberio": {
      title: "Baterias na Vila Tibério - Ribeirão Preto",
      description: "Troca de bateria e assistência técnica na Vila Tibério. Atendimento 24 horas com serviço móvel.",
      content: "Na Vila Tibério, conte com nossa experiência em baterias automotivas. Oferecemos serviço completo de diagnóstico, troca e manutenção, com atendimento personalizado.",
      features: [
        "Diagnóstico gratuito",
        "Troca de bateria em domicílio",
        "Atendimento 24 horas",
        "Garantia em todos os serviços"
      ]
    },
    "lagoinha": {
      title: "Baterias na Lagoinha - Ribeirão Preto",
      description: "Serviço de baterias na Lagoinha com atendimento 24 horas. Troca de bateria em domicílio.",
      content: "Atendemos toda a região da Lagoinha com serviço especializado em baterias. Nossa equipe está preparada para resolver seu problema com agilidade e profissionalismo.",
      features: [
        "Atendimento emergencial",
        "Baterias de alta qualidade",
        "Preços competitivos",
        "Garantia estendida"
      ]
    },
    "jardim-independencia": {
      title: "Baterias no Jardim Independência - Ribeirão Preto",
      description: "Serviço de baterias no Jardim Independência. Atendimento 24 horas com as melhores marcas.",
      content: "No Jardim Independência, oferecemos serviço completo de baterias com atendimento 24 horas. Trabalhamos com as melhores marcas do mercado e garantia estendida.",
      features: [
        "Socorro 24 horas",
        "Troca de bateria no local",
        "Marcas premium",
        "Melhor custo-benefício"
      ]
    },
    "ipiranga": {
      title: "Baterias no Ipiranga - Ribeirão Preto",
      description: "Troca de bateria e assistência técnica no Ipiranga. Atendimento 24 horas em toda região.",
      content: "Precisando de bateria nova no Ipiranga? Nossa equipe especializada atende toda a região com serviço móvel 24 horas. Oferecemos as melhores marcas e condições.",
      features: [
        "Atendimento local",
        "Serviço móvel 24h",
        "Garantia estendida",
        "Suporte técnico"
      ]
    },
    "sumarezinho": {
      title: "Baterias no Sumarezinho - Ribeirão Preto",
      description: "Serviço de baterias no Sumarezinho com atendimento 24 horas. Melhor preço da região.",
      content: "No Sumarezinho, conte com nossa experiência em baterias automotivas. Oferecemos serviço completo com as melhores marcas e preços da região.",
      features: [
        "Atendimento rápido",
        "Melhores marcas",
        "Preço justo",
        "Garantia em todos os serviços"
      ]
    }
  };

  const currentNeighborhood = neighborhoodData[neighborhood as keyof typeof neighborhoodData];

  if (!currentNeighborhood) {
    return <div className="container mx-auto px-4 py-8">Bairro não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-battery-primary mb-4">{currentNeighborhood.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{currentNeighborhood.description}</p>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Serviços de Bateria na Região</h2>
          <p className="text-gray-700 mb-6">{currentNeighborhood.content}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {currentNeighborhood.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Battery className="text-battery-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              Solicitar Atendimento
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Ver Localização
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Neighborhood;