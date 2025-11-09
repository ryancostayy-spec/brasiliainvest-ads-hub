import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Phone, Shield, Lock, Clock, CheckCircle2 } from "lucide-react";

const InvestigacaoMatrimonial = () => {
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
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">Investigação Matrimonial</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Investigação de Infidelidade Conjugal
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Discrição absoluta para esclarecer suas dúvidas sobre relacionamento com provas concretas
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5" />
                Consulta Sigilosa
              </Button>
            </div>
          </div>
        </section>

        {/* When to Hire */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Quando Contratar uma Investigação Matrimonial</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                    <h3 className="font-bold text-lg">Mudança de Comportamento</h3>
                    <p className="text-muted-foreground">
                      Alterações repentinas na rotina, secretismo com celular ou ausências inexplicadas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                    <h3 className="font-bold text-lg">Distanciamento Emocional</h3>
                    <p className="text-muted-foreground">
                      Frieza, desinteresse e falta de intimidade no relacionamento.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                    <h3 className="font-bold text-lg">Provas para Processo</h3>
                    <p className="text-muted-foreground">
                      Necessidade de documentação legal para divórcio ou guarda dos filhos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                    <h3 className="font-bold text-lg">Paz de Espírito</h3>
                    <p className="text-muted-foreground">
                      Confirmar ou descartar suspeitas para tomar decisões conscientes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Nossa Abordagem Profissional</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Lock className="w-6 h-6 text-accent" />
                      Sigilo Absoluto
                    </h3>
                    <p className="text-muted-foreground">
                      Todas as investigações matrimoniais são conduzidas com máxima discrição. Seu cônjuge jamais saberá que está sendo investigado, e sua privacidade é protegida por sigilo profissional.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-accent" />
                      Provas Legalmente Válidas
                    </h3>
                    <p className="text-muted-foreground">
                      Coletamos evidências que podem ser usadas em processos judiciais: fotos, vídeos, documentos e relatórios detalhados com data, hora e local de cada registro.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-accent" />
                      Acompanhamento em Tempo Real
                    </h3>
                    <p className="text-muted-foreground">
                      Vigilância discreta 24 horas utilizando equipamentos profissionais de última geração. Você recebe atualizações periódicas sobre o andamento da investigação.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">O Que Você Recebe</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Relatório Completo e Detalhado</h3>
                    <p className="text-muted-foreground">Dossiê profissional com cronologia dos fatos observados</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Fotos e Vídeos em Alta Resolução</h3>
                    <p className="text-muted-foreground">Evidências visuais nítidas com data e hora registradas</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Documentação de Locais e Horários</h3>
                    <p className="text-muted-foreground">Registro preciso de deslocamentos e encontros</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Consultoria Jurídica</h3>
                    <p className="text-muted-foreground">Orientação sobre como usar as provas legalmente</p>
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
                Tem Dúvidas Sobre Seu Relacionamento?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Converse com nossos especialistas em total sigilo. Atendimento 24/7 via WhatsApp
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5" />
                Consulta Confidencial
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

export default InvestigacaoMatrimonial;
