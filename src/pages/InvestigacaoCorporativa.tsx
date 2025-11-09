import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Phone, Shield, CheckCircle2, FileSearch, AlertTriangle } from "lucide-react";

const InvestigacaoCorporativa = () => {
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
                <Building2 className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">Investigação Corporativa</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Proteja Seu Negócio com Inteligência
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Investigações empresariais especializadas para prevenir fraudes e proteger seus ativos
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5" />
                Consulta Empresarial
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Serviços Corporativos</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <FileSearch className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-xl mb-3">Due Diligence</h3>
                    <p className="text-muted-foreground">
                      Investigação completa de parceiros comerciais, fornecedores e empresas antes de fusões e aquisições.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <AlertTriangle className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-xl mb-3">Fraudes Internas</h3>
                    <p className="text-muted-foreground">
                      Identificação de desvio de recursos, roubo de informações e condutas irregulares de colaboradores.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Shield className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-xl mb-3">Espionagem Industrial</h3>
                    <p className="text-muted-foreground">
                      Proteção contra vazamento de segredos comerciais e informações confidenciais da empresa.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-xl mb-3">Background Check</h3>
                    <p className="text-muted-foreground">
                      Verificação de antecedentes de candidatos para cargos estratégicos e de confiança.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Building2 className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-xl mb-3">Compliance</h3>
                    <p className="text-muted-foreground">
                      Auditorias e verificações para garantir conformidade com normas e regulamentações.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <FileSearch className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-xl mb-3">Concorrência Desleal</h3>
                    <p className="text-muted-foreground">
                      Investigação de práticas ilegais de concorrentes que prejudicam seu negócio.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Companies Trust Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Por Que Empresas Confiam em Nós</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Experiência Comprovada</h3>
                        <p className="text-muted-foreground">
                          Mais de 47 anos atendendo grandes empresas, escritórios de advocacia e órgãos públicos em Brasília.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <FileSearch className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Metodologia Profissional</h3>
                        <p className="text-muted-foreground">
                          Investigações seguindo rigorosos padrões éticos e legais, com provas admissíveis em tribunais.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Confidencialidade Total</h3>
                        <p className="text-muted-foreground">
                          NDA rigoroso, proteção de dados sensíveis e relatórios entregues apenas aos contratantes autorizados.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Processo de Investigação</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Diagnóstico Inicial</h3>
                    <p className="text-muted-foreground">
                      Reunião com gestores para entender o problema, riscos e objetivos da investigação.
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
                      Definição de metodologia, prazos e recursos necessários para a investigação.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Coleta de Evidências</h3>
                    <p className="text-muted-foreground">
                      Investigação discreta com técnicas avançadas e tecnologia de ponta.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Relatório Executivo</h3>
                    <p className="text-muted-foreground">
                      Entrega de dossiê completo com análise, conclusões e recomendações estratégicas.
                    </p>
                  </div>
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
                Proteja Sua Empresa Agora
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Fale com nossos especialistas em investigação corporativa
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5" />
                Agendar Reunião
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default InvestigacaoCorporativa;
