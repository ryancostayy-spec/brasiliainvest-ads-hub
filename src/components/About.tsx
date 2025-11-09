import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Equipe especializada e certificada",
  "Equipamentos de última geração",
  "Relatórios detalhados e documentados",
  "Sigilo e discrição garantidos",
  "Atendimento 24 horas",
  "Atuação em todo o Distrito Federal",
];

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Sobre Nós
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Confiança e Experiência a Seu Serviço
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                A <strong className="text-foreground">Agência Brasília de Investigações Ltda</strong> é referência em investigação particular e corporativa no Distrito Federal desde 1985.
              </p>
              <p>
                Com mais de 35 anos de atuação, nossa equipe é formada por investigadores experientes, muitos com formação em segurança pública e inteligência, garantindo resultados precisos e confiáveis.
              </p>
              <p>
                Utilizamos tecnologia de ponta e seguimos rigorosos protocolos de confidencialidade, assegurando que cada caso seja tratado com o máximo sigilo e profissionalismo.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Por que nos escolher?
              </h3>
              <div className="space-y-4">
                {differentials.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <p className="text-foreground">
                <strong className="text-accent">CNPJ:</strong> 03.254.280/0001-52
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Empresa regularmente constituída e apta a prestar serviços de investigação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
