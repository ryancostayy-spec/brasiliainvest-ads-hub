import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Building2, Heart, FileSearch, Camera, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Investigação Particular",
    description: "Investigações discretas de pessoas, localização de bens e averiguação de antecedentes.",
    link: "/investigacao-particular",
  },
  {
    icon: Heart,
    title: "Investigação Matrimonial",
    description: "Investigação de infidelidade conjugal e relacionamentos com total discrição e profissionalismo.",
    link: "/investigacao-matrimonial",
  },
  {
    icon: Building2,
    title: "Investigação Corporativa",
    description: "Due diligence, investigação de fraudes internas e segurança empresarial.",
    link: "/investigacao-corporativa",
  },
  {
    icon: FileSearch,
    title: "Investigação Trabalhista",
    description: "Coleta de provas para processos trabalhistas e verificação de atestados médicos.",
    link: "",
  },
  {
    icon: Camera,
    title: "Vigilância e Monitoramento",
    description: "Acompanhamento discreto 24h com equipamentos de última geração.",
    link: "",
  },
  {
    icon: ShieldCheck,
    title: "Consultoria em Segurança",
    description: "Análise de vulnerabilidades e implementação de medidas de segurança preventivas.",
    link: "",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Serviços de Detetive em Brasília DF
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Detetive particular profissional DF com soluções completas em investigação, tecnologia avançada e preço justo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] flex flex-col"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="text-base mb-4 flex-grow">
                  {service.description}
                </CardDescription>
                {service.link && (
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full group">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
