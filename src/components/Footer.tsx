import logoDetetive from "@/assets/logo-detetive.jfif";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoDetetive} alt="Logo Detetive Bareta" className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-bold text-lg">Agência Brasília de Investigações</h3>
              <p className="text-sm text-primary-foreground/80">Confiança e discrição desde 1999</p>
            </div>
          </div>
          
          <div className="text-center md:text-right space-y-1">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Agência Brasília de Investigações Ltda
            </p>
            <p className="text-xs text-primary-foreground/60">
              CNPJ: 03.254.280/0001-52 | Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
