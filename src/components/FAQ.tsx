import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Quanto custa um detetive particular DF?",
    answer: "O valor para contratar detetive particular em Brasília DF varia conforme a complexidade do caso, tempo de investigação e recursos necessários. Oferecemos consulta gratuita para avaliar seu caso e fornecer um orçamento personalizado. Entre em contato via WhatsApp (61) 99971-1190 para obter seu orçamento sem compromisso."
  },
  {
    question: "Como contratar detetive particular em Brasília DF?",
    answer: "Para contratar nossos serviços sigilosos de investigação em Brasília DF, basta entrar em contato via WhatsApp (61) 99971-1190 ou visitar nosso escritório. Fazemos uma consulta gratuita para entender seu caso, garantindo total sigilo. Somos uma agência de detetives profissionais em Brasília com registro na Lei 13.432/2017."
  },
  {
    question: "Vocês são o melhor detetive particular em Brasília DF?",
    answer: "Com mais de 47 anos de experiência desde 1977, somos reconhecidos como uma das melhores agências de investigação profissional em Brasília DF. Temos registro legal (Lei 13.432/2017), escritório físico em Brasília, equipamentos de última geração e uma equipe altamente qualificada. Nosso diferencial é o sigilo absoluto e resultados comprovados."
  },
  {
    question: "A investigação é realmente sigilosa?",
    answer: "Sim! Oferecemos serviços sigilosos de investigação em Brasília DF com total discrição. Todos os nossos profissionais seguem rígidos protocolos de confidencialidade. A investigação conjugal sigilosa no DF e demais serviços são conduzidos com equipamentos discretos e métodos que garantem que ninguém saiba que está sendo investigado."
  },
  {
    question: "As provas coletadas são válidas judicialmente?",
    answer: "Sim! Somos detetive para provas judiciais DF. Todas as evidências são coletadas de forma legal e documentadas profissionalmente para uso em processos judiciais. Nossos relatórios são detalhados, com fotos, vídeos e documentação que atendem aos requisitos legais brasileiros, conforme a Lei 13.432/2017."
  },
  {
    question: "Vocês têm escritório físico em Brasília?",
    answer: "Sim! Somos detetive particular com escritório em Brasília, localizado no Setor Sha Conjunto 6 Chácara 11, Lote 25 e 26 - Brasília DF. Diferente de empresas que operam apenas online, temos estrutura física completa, o que garante maior segurança e confiabilidade aos nossos clientes."
  },
  {
    question: "Que tipos de investigação vocês realizam?",
    answer: "Realizamos investigação particular, investigação conjugal sigilosa no DF, investigação empresarial, localização de pessoas, verificação de antecedentes, vigilância 24h, coleta de provas para processos trabalhistas e judiciais. Todos os serviços com total sigilo e profissionalismo."
  },
  {
    question: "Vocês atendem 24 horas?",
    answer: "Sim! Somos uma agência de investigação profissional em Brasília DF com atendimento 24 horas por dia, 7 dias por semana. Entendemos que situações que exigem investigação podem surgir a qualquer momento, por isso mantemos plantão permanente para atender emergências."
  },
  {
    question: "A investigação é legalizada?",
    answer: "Sim! Somos detetive particular com registro na Lei 13.432/2017 DF, que regulamenta a profissão de detetive particular no Brasil. Nossa empresa está regularmente constituída (CNPJ: 03.254.280/0001-52) e todas as investigações são realizadas dentro dos limites legais, respeitando a privacidade e os direitos individuais."
  },
  {
    question: "Como funciona a consulta gratuita?",
    answer: "A consulta é simples e rápida! Entre em contato via WhatsApp (61) 99971-1190 e converse com um de nossos especialistas. Você pode relatar seu caso de forma sigilosa e receberá orientações sobre como podemos ajudar, qual o processo de investigação e um orçamento personalizado, tudo sem compromisso."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Perguntas Frequentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Dúvidas Sobre Contratar Detetive Particular DF
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respondemos as principais dúvidas sobre como contratar serviços de investigação em Brasília
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a 
            href="https://wa.me/5561999711190" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg"
          >
            WhatsApp: (61) 99971-1190
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
