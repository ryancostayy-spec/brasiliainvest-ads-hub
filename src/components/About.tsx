import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Equipe especializada e certificada",
  "Equipamentos de última geração",
  "Relatórios detalhados e documentados",
  "Investigação sigilosa garantida",
  "Atendimento 24 horas - Detetive 24h DF",
  "Atendemos: Asa Sul, Asa Norte, Taguatinga, Ceilândia, Guará, Planaltina, Gama, Águas Claras, Sobradinho, Samambaia e todo o DF",
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
              Detetive Particular DF - Bareta
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Sou o <strong className="text-foreground">Detetive Bareta</strong>, detetive particular profissional em Brasília DF, sempre pautando o meu trabalho na ética e no sigilo e almejando excelência na prestação dos serviços de detetive DF.
              </p>
              <p>
                Conhecido nacionalmente como detetive Bareta desde 1977 e posteriormente um empresário proprietário da <strong className="text-foreground">Agência Brasília de Investigações</strong>, a melhor agência de detetives DF, registrada no ano de 1999 sob N° 01.276.1999, nome fantasia <strong className="text-foreground">Bareta Investigações</strong> - reconhecida como uma empresa séria e focada em resultados positivos.
              </p>
              <p>
                No mercado há <strong className="text-foreground">47 anos</strong>, somos uma agência de investigação DF especializada em investigação particular sigilosa em Brasília. Detetive 24 horas para localização de pessoas, investigação conjugal e empresarial. Os casos são cuidadosamente analisados por nossos agentes, profissionais que atuam com absoluto sigilo, discrição e competência, garantindo resultados rápidos e seguros com preço justo.
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

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 space-y-3">
              <p className="text-foreground">
                <strong className="text-accent">CNPJ:</strong> 03.254.280/0001-52
              </p>
              <p className="text-foreground">
                <strong className="text-accent">Registro:</strong> N° 01.276.1999 (10/09/1999)
              </p>
              <p className="text-sm text-muted-foreground">
                Empresa regularmente constituída e apta a prestar serviços de investigação, atuando conforme a regulamentação da <strong className="text-foreground">Lei 13.432/2017</strong>. Detetive particular com registro legal e escritório físico em Brasília DF para garantir sua segurança e tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
