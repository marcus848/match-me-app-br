
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-purple-700 flex items-center justify-center text-white font-bold text-xl">
            T
          </div>
          <span className="font-bold text-lg text-purple-800">TechSolutions</span>
        </Link>

        {/* Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/#servicos">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Serviços
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#portfolio">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfólio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#sobre">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Sobre
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#depoimentos">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Depoimentos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <Button 
          variant="default" 
          className="hidden md:inline-flex"
          onClick={() => window.location.href = "#contato"}
        >
          Contate-me
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="outline" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
