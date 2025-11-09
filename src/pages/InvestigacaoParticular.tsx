import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Phone, CheckCircle2, Shield, Clock, Lock } from "lucide-react";

const InvestigacaoParticular = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561999711190", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
                <Search className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">Investigação Particular</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Investigação Particular Profissional
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Investigações discretas e eficazes para resolver suas questões pessoais com total confidencialidade
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Serviços de Investigação Particular</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3">Localização de Pessoas</h3>
                    <p className="text-muted-foreground">
                      Encontramos pessoas desaparecidas, devedores, testemunhas e parentes perdidos utilizando técnicas avançadas de investigação e banco de dados especializados.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3">Investigação de Antecedentes</h3>
                    <p className="text-muted-foreground">
                      Verificação completa de histórico pessoal, profissional e financeiro para sua segurança em relacionamentos, negócios ou contratações.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3">Localização de Bens</h3>
                    <p className="text-muted-foreground">
                      Rastreamento e localização de veículos, imóveis e outros patrimônios para execução de dívidas ou processos judiciais.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3">Investigação de Fraudes</h3>
                    <p className="text-muted-foreground">
                      Identificação de golpes, estelionatos e fraudes diversas com coleta de provas para uso legal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Nosso Processo de Trabalho</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Consulta Inicial Confidencial</h3>
                    <p className="text-muted-foreground">
                      Atendimento sigiloso para entender suas necessidades e definir a melhor estratégia de investigação.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Planejamento Estratégico</h3>
                    <p className="text-muted-foreground">
                      Elaboração de plano de ação personalizado com prazos, custos e metodologia detalhada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Execução da Investigação</h3>
                    <p className="text-muted-foreground">
                      Trabalho de campo discreto com uso de tecnologia avançada e técnicas especializadas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Relatório Completo</h3>
                    <p className="text-muted-foreground">
                      Entrega de dossiê detalhado com provas, fotos, vídeos e documentação para uso legal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Por Que Nos Escolher</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg">+47 Anos de Experiência</h3>
                  <p className="text-muted-foreground">
                    Tradição e confiabilidade desde 1977 em Brasília
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <Lock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg">100% Confidencial</h3>
                  <p className="text-muted-foreground">
                    Sigilo absoluto garantido por contrato
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg">Atendimento 24/7</h3>
                  <p className="text-muted-foreground">
                    Disponíveis sempre que você precisar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Precisa de uma Investigação Particular?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Entre em contato agora e receba uma consulta gratuita e confidencial
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InvestigacaoParticular;
