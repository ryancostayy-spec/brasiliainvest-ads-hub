import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoDetetive from "@/assets/logo-detetive.jfif";
import { NavLink } from "./NavLink";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561999711190", "_blank");
  };

  const navigationLinks = [
    { to: "/", label: "Início" },
    { to: "/servicos", label: "Serviços" },
    { to: "/escritorio", label: "Escritório" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoDetetive} alt="Logo Detetive Bareta" className="w-12 h-12 object-contain" />
            <div className="hidden md:block">
              <h3 className="font-bold text-lg text-foreground">Agência Brasília de Investigações</h3>
              <p className="text-xs text-muted-foreground">Desde 1977</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              onClick={handleWhatsAppClick}
              variant="cta"
              size="lg"
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigationLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      activeClassName="text-primary font-semibold"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
