import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Award, Shield, Users, Target, History, Building2 } from "lucide-react";

const Escritorio = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561999711190", "_blank");
  };

  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/FaCpNKCL5i1CL6TM9", "_blank");
  };

  const valores = [
    {
      icon: Shield,
      title: "Confidencialidade",
      description: "Sigilo absoluto em todos os casos, garantido por contrato e código de ética profissional"
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Métodos rigorosos e tecnologia de ponta para resultados assertivos"
    },
    {
      icon: Award,
      title: "Ética",
      description: "Atuação dentro dos limites legais, respeitando direitos e garantias individuais"
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Dedicação total para atender e superar as expectativas dos clientes"
    }
  ];

  const historia = [
    {
      ano: "1977",
      titulo: "Fundação",
      descricao: "Agência Brasília de Investigações é fundada, iniciando uma tradição de excelência"
    },
    {
      ano: "1990",
      titulo: "Expansão",
      descricao: "Ampliação da equipe e incorporação de novas tecnologias investigativas"
    },
    {
      ano: "2010",
      titulo: "Modernização",
      descricao: "Implementação de sistemas digitais e forense computacional"
    },
    {
      ano: "2024",
      titulo: "Liderança",
      descricao: "Reconhecida como uma das principais agências de investigação do Distrito Federal"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sobre Nossa Agência
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Mais de 45 anos de experiência em investigações profissionais, 
              com tradição, credibilidade e resultados comprovados
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <History className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Nossa História</h2>
              <p className="text-muted-foreground">
                Uma trajetória de dedicação e excelência em investigações
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {historia.map((marco, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{marco.ano}</span>
                      </div>
                      <CardTitle>{marco.titulo}</CardTitle>
                    </div>
                    <CardDescription>{marco.descricao}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Nossos Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{valor.title}</CardTitle>
                  <CardDescription>{valor.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Nossa Localização</h2>
              <p className="text-muted-foreground">
                Escritório em Brasília-DF, atendimento em todo o Brasil
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Informações de Contato */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Endereço</p>
                        <p className="text-sm text-muted-foreground">
                          Col. Agrícola Vereda da Cruz, St. Hab. Arniqueira<br />
                          Brasília - DF
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Telefone</p>
                        <p className="text-sm text-muted-foreground">(61) 99971-1190</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Horário de Atendimento</p>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 9h às 13h<br />
                          Emergências: 24/7
                        </p>
                      </div>
                    </div>

                    <Button 
                      onClick={handleMapClick} 
                      variant="outline" 
                      className="w-full"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Como Chegar
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Mapa */}
              <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61412.15037882116!2d-48.13264846239988!3d-15.842958098552666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a320a6f71c74b%3A0xf6a80c5c7e4f868e!2sAg%C3%AAncia%20Bras%C3%ADlia%20de%20Investiga%C3%A7%C3%A3o%20-%20Detetive%20Bareta!5e0!3m2!1spt-BR!2sbr!4v1762862062953!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Agência Brasília de Investigação"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Agende uma Visita ao Nosso Escritório
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Conheça nossa estrutura e converse pessoalmente com nossos especialistas
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            variant="secondary"
            size="lg"
            className="text-lg px-8"
          >
            Agendar Visita
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Escritorio;
