import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoDetetive from "@/assets/logo-detetive.jfif";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561999711190", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoDetetive} alt="Logo Detetive Bareta" className="w-12 h-12 object-contain" />
            <div className="hidden md:block">
              <h3 className="font-bold text-lg text-foreground">Agência Brasília de Investigações</h3>
              <p className="text-xs text-muted-foreground">Desde 1999</p>
            </div>
          </Link>
          
          <Button 
            onClick={handleWhatsAppClick}
            variant="cta"
            size="lg"
            className="gap-2"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
