import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, Battery, MapPin, Clock, Car, Truck, Building, BatteryCharging, BatteryLow, Tool, Shield, Zap, BatteryFull, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Index = () => {
  const testimonials = [
    {
      name: "João Silva",
      text: "Excelente atendimento 24h! Precisei trocar a bateria do meu carro às 3h da manhã e eles me atenderam prontamente.",
      rating: 5
    },
    {
      name: "Maria Santos",
      text: "Preço justo e serviço de qualidade. Recomendo para todos em Ribeirão Preto.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      text: "Profissionais muito capacitados. Resolveram meu problema com a bateria rapidamente.",
      rating: 5
    }
  ];

  const neighborhoods = [
    {
      name: "Jardim Paulista",
      description: "Atendimento especializado em baterias para carros, motos e caminhões no Jardim Paulista, Ribeirão Preto."
    },
    {
      name: "Centro",
      description: "Troca de bateria 24 horas no Centro de Ribeirão Preto. Serviço rápido e garantido."
    },
    {
      name: "Campos Elíseos",
      description: "Baterias novas e serviço de socorro para todos os tipos de veículos em Campos Elíseos."
    },
    {
      name: "Vila Tibério",
      description: "Assistência técnica em baterias automotivas na Vila Tibério. Atendimento emergencial 24h."
    },
    {
      name: "Lagoinha",
      description: "Venda e instalação de baterias com garantia no bairro Lagoinha, Ribeirão Preto."
    },
    {
      name: "Jardim Independência",
      description: "Serviço especializado em baterias para todos os tipos de veículos no Jardim Independência."
    },
    {
      name: "Ipiranga",
      description: "Troca de bateria com atendimento 24 horas no bairro Ipiranga, Ribeirão Preto."
    },
    {
      name: "Sumarezinho",
      description: "Baterias para carros, motos e caminhões no Sumarezinho. Melhor preço da região."
    }
  ];

  const services = [
    {
      icon: <BatteryCharging className="w-12 h-12 text-battery-primary" />,
      title: "Troca de Bateria 24h",
      description: "Serviço emergencial de troca de bateria disponível 24 horas em Ribeirão Preto."
    },
    {
      icon: <BatteryLow className="w-12 h-12 text-battery-primary" />,
      title: "Teste de Bateria Gratuito",
      description: "Avaliação completa do estado da sua bateria sem custo em Ribeirão Preto."
    },
    {
      icon: <Tool className="w-12 h-12 text-battery-primary" />,
      title: "Manutenção Preventiva",
      description: "Serviço especializado de manutenção para prolongar a vida útil da sua bateria."
    },
    {
      icon: <Shield className="w-12 h-12 text-battery-primary" />,
      title: "Garantia Estendida",
      description: "Oferecemos garantia estendida em todas as baterias novas vendidas."
    },
    {
      icon: <Zap className="w-12 h-12 text-battery-primary" />,
      title: "Socorro Elétrico",
      description: "Assistência completa para problemas elétricos em seu veículo."
    },
    {
      icon: <BatteryFull className="w-12 h-12 text-battery-primary" />,
      title: "Reciclagem de Baterias",
      description: "Descarte ecologicamente correto de baterias usadas em Ribeirão Preto."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Menu Âncora */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <li><a href="#servicos" className="text-battery-primary hover:text-battery-secondary">Serviços</a></li>
            <li><a href="#areas" className="text-battery-primary hover:text-battery-secondary">Áreas Atendidas</a></li>
            <li><a href="#depoimentos" className="text-battery-primary hover:text-battery-secondary">Depoimentos</a></li>
            <li><a href="#faq" className="text-battery-primary hover:text-battery-secondary">FAQ</a></li>
            <li><a href="#contato" className="text-battery-primary hover:text-battery-secondary">Contato</a></li>
          </ul>
        </div>
      </nav>

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

      {/* Serviços Section */}
      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas Atendidas Section */}
      <section id="areas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas Atendidas em Ribeirão Preto</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoods.map((bairro, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <a href={`/bairros/${bairro.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                      <MapPin className="w-6 h-6 mx-auto mb-2 text-battery-primary" />
                      <p className="font-medium">{bairro.name}</p>
                    </div>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm">{bairro.description}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual o tempo de garantia das baterias em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                Nossas baterias possuem garantia de 12 a 36 meses, dependendo do modelo escolhido. Atendemos toda região de Ribeirão Preto com suporte técnico durante todo o período de garantia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como funciona o atendimento 24 horas em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                Nossa equipe está disponível 24 horas por dia, 7 dias por semana. Basta entrar em contato pelo WhatsApp ou telefone que enviaremos um técnico especializado até sua localização em Ribeirão Preto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Vocês atendem em todos os bairros de Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                Sim, atendemos em todos os bairros de Ribeirão Preto e região, com serviço móvel de troca de bateria e assistência técnica especializada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Quanto tempo leva para trocar uma bateria em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                O processo de troca de bateria geralmente leva entre 15 a 30 minutos, dependendo do modelo do veículo. Nossa equipe em Ribeirão Preto é treinada para realizar o serviço com agilidade e segurança.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Vocês aceitam a bateria antiga como parte do pagamento?</AccordionTrigger>
              <AccordionContent>
                Sim, aceitamos sua bateria antiga como parte do pagamento na compra de uma nova. Realizamos o descarte ecologicamente correto em Ribeirão Preto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Quais tipos de baterias vocês trabalham em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                Trabalhamos com todos os tipos de baterias automotivas, incluindo carros, motos, caminhões, ônibus e máquinas pesadas. Temos as principais marcas do mercado disponíveis em Ribeirão Preto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>O teste de bateria é realmente gratuito em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                Sim, realizamos o teste de bateria gratuitamente em Ribeirão Preto. Nossos técnicos utilizam equipamentos modernos para avaliar a saúde da sua bateria sem nenhum custo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Vocês emitem nota fiscal em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                Sim, emitimos nota fiscal para todos os serviços e produtos comercializados em Ribeirão Preto, garantindo sua segurança e direitos como consumidor.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Qual a durabilidade média de uma bateria em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                A durabilidade média de uma bateria em Ribeirão Preto é de 2 a 5 anos, dependendo do uso e manutenção. Fatores como clima e condições de uso podem influenciar na vida útil da bateria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>Vocês oferecem serviço de manutenção preventiva em Ribeirão Preto?</AccordionTrigger>
              <AccordionContent>
                Sim, oferecemos serviço completo de manutenção preventiva em Ribeirão Preto, incluindo limpeza dos terminais, teste de carga e verificação do sistema elétrico do veículo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-16" id="contato">
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
