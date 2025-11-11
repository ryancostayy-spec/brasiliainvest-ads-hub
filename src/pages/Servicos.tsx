import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, Building2, Heart, Shield, FileCheck, Clock, Award, CheckCircle2 } from "lucide-react";

const Servicos = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561999711190", "_blank");
  };

  const servicos = [
    {
      icon: Search,
      title: "Investigação Particular",
      description: "Localização de pessoas desaparecidas, investigação de antecedentes, rastreamento de bens e patrimônio.",
      detalhes: [
        "Localização de pessoas",
        "Verificação de antecedentes",
        "Investigação de fraudes",
        "Rastreamento patrimonial"
      ]
    },
    {
      icon: Heart,
      title: "Investigação Matrimonial",
      description: "Investigação de infidelidade conjugal com provas discretas e legalmente válidas.",
      detalhes: [
        "Investigação de infidelidade",
        "Monitoramento discreto",
        "Relatórios fotográficos",
        "Provas judiciais"
      ]
    },
    {
      icon: Building2,
      title: "Investigação Corporativa",
      description: "Due diligence, investigação de fraudes internas, compliance e inteligência competitiva.",
      detalhes: [
        "Due diligence empresarial",
        "Investigação de fraudes internas",
        "Verificação de funcionários",
        "Compliance corporativo"
      ]
    },
    {
      icon: Shield,
      title: "Segurança Pessoal",
      description: "Análise de vulnerabilidades, consultoria em segurança e proteção pessoal.",
      detalhes: [
        "Análise de riscos",
        "Consultoria de segurança",
        "Varredura eletrônica",
        "Proteção executiva"
      ]
    },
    {
      icon: FileCheck,
      title: "Perícias e Laudos",
      description: "Perícia técnica, análise de documentos e elaboração de laudos especializados.",
      detalhes: [
        "Perícia grafotécnica",
        "Análise documental",
        "Laudos técnicos",
        "Consultoria pericial"
      ]
    },
    {
      icon: Users,
      title: "Background Check",
      description: "Verificação completa de histórico pessoal e profissional para contratações seguras.",
      detalhes: [
        "Verificação de currículo",
        "Checagem de referências",
        "Histórico criminal",
        "Análise de perfil"
      ]
    }
  ];

  const diferenciais = [
    {
      icon: Award,
      title: "Desde 1977",
      description: "Mais de 45 anos de experiência no mercado brasileiro"
    },
    {
      icon: Shield,
      title: "100% Confidencial",
      description: "Sigilo absoluto garantido por contrato"
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Disponível para emergências a qualquer momento"
    },
    {
      icon: CheckCircle2,
      title: "Provas Legais",
      description: "Todas as evidências são válidas judicialmente"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossos Serviços de Investigação
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Soluções profissionais e discretas para pessoas físicas e jurídicas, 
              com mais de 45 anos de experiência no mercado
            </p>
            <Button onClick={handleWhatsAppClick} variant="cta" size="lg">
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <servico.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{servico.title}</CardTitle>
                  <CardDescription>{servico.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {servico.detalhes.map((detalhe, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Por Que Escolher a Agência Brasília?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tradição, expertise e compromisso com resultados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <diferencial.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{diferencial.title}</CardTitle>
                  <CardDescription>{diferencial.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Pronto para Contratar um Investigador Profissional?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato agora para uma consulta gratuita e confidencial
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            variant="secondary"
            size="lg"
            className="text-lg px-8"
          >
            Falar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Servicos;
