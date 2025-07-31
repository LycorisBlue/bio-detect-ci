import { Leaf, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isSpeciesPage = location.pathname === '/especes';

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative">
              <Leaf className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              <div className="absolute -top-1 -right-1 h-2 w-2 md:h-3 md:w-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                BioGuard Junior
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Protège la biodiversité ivoirienne</p>
            </div>
          </Link>

          {/* Navigation avec icône */}
          <nav className="flex items-center">
            <Link to="/especes">
              <Button
                variant={isSpeciesPage ? "default" : "ghost"}
                size="sm"
                className="gap-2 font-medium"
              >
                <TreePine className="h-4 w-4" />
                <span className="hidden sm:inline">Espèces de Côte d'Ivoire</span>
                <span className="sm:hidden">Espèces</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};