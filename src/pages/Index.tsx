import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, Battery, MapPin, Clock, Car, Truck, Building } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Baterias em Ribeirão Preto</h1>
          <p className="text-xl md:text-2xl mb-8">Atendimento 24 horas com a melhor qualidade em baterias</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <PhoneCall className="mr-2" /> Atendimento Emergencial
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-blue-50">
              <Battery className="mr-2" /> Ver Produtos
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Baterias Automotivas</h3>
              <p>Ampla linha de baterias para carros, motos e utilitários.</p>
            </Card>
            <Card className="p-6">
              <Truck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Baterias para Caminhões</h3>
              <p>Baterias de alta performance para veículos pesados.</p>
            </Card>
            <Card className="p-6">
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Baterias Estacionárias</h3>
              <p>Soluções para nobreaks e sistemas de energia.</p>
            </Card>
          </div>
        </section>

        {/* Areas Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Atendemos em Ribeirão Preto</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Jardim Paulista",
              "Centro",
              "Campos Elíseos",
              "Vila Tibério",
              "Lagoinha",
              "Jardim Independência",
              "Ipiranga",
              "Sumarezinho"
            ].map((bairro) => (
              <div key={bairro} className="p-4 bg-blue-50 rounded-lg">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p>{bairro}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Dúvidas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual o tempo de garantia das baterias?</AccordionTrigger>
              <AccordionContent>
                Nossas baterias possuem garantia de 12 a 36 meses, dependendo do modelo escolhido.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Vocês fazem teste de bateria gratuito?</AccordionTrigger>
              <AccordionContent>
                Sim! Realizamos teste gratuito da sua bateria para avaliar seu estado de funcionamento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como funciona o atendimento 24 horas?</AccordionTrigger>
              <AccordionContent>
                Nosso atendimento emergencial está disponível 24/7. Basta entrar em contato pelo WhatsApp ou telefone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Card className="p-6">
              <PhoneCall className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Telefone</h3>
              <p>(16) 99999-9999</p>
            </Card>
            <Card className="p-6">
              <Clock className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Horário</h3>
              <p>24 horas - todos os dias</p>
            </Card>
            <Card className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Endereço</h3>
              <p>Av. Francisco Junqueira, Ribeirão Preto - SP</p>
            </Card>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5516999999999"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Baterias Ribeirão Preto - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;