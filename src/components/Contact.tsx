import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561999711190", "_blank");
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Consulta gratuita e sigilosa. Estamos prontos para atendê-lo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Telefone / WhatsApp</h3>
                    <p className="text-muted-foreground">(61) 99971-1190</p>
                    <Button 
                      variant="link" 
                      className="px-0 h-auto text-accent hover:text-accent/80"
                      onClick={handleWhatsAppClick}
                    >
                      Clique para conversar no WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Setor Sha Conjunto 6 Chácara 11<br />
                      Lote 25 e 26 - Setor Habitacional<br />
                      Brasília - DF
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      24 horas por dia<br />
                      7 dias por semana<br />
                      Plantão permanente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8 flex flex-col justify-center h-full space-y-6">
                <div className="text-center space-y-4">
                  <MessageCircle className="w-16 h-16 text-accent mx-auto" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Consulta Gratuita
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Tire suas dúvidas sem compromisso. Nossa equipe está pronta para atendê-lo com total sigilo e profissionalismo.
                  </p>
                  <Button 
                    size="lg" 
                    variant="cta"
                    onClick={handleWhatsAppClick}
                    className="w-full text-lg py-6 mt-4"
                  >
                    <Phone className="w-5 h-5" />
                    Falar com Especialista
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Agência Brasília de Investigações Ltda</strong> | CNPJ: 03.254.280/0001-52<br />
              Todas as investigações são conduzidas dentro dos limites legais e com total respeito à privacidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
