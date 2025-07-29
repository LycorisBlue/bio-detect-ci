import { Camera, Sparkles, Leaf, Users, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Leaf className="h-8 w-8 text-accent-glow/60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-2000">
          <Sparkles className="h-6 w-6 text-primary-glow/60" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-3000">
          <Users className="h-7 w-7 text-accent/60" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Découvre la 
            <span className="bg-gradient-to-r from-accent-glow to-accent bg-clip-text text-transparent">
              {" "}biodiversité{" "}
            </span>
            ivoirienne
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Utilise l'intelligence artificielle pour identifier les espèces de Côte d'Ivoire 
            et apprends à protéger notre patrimoine naturel
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="gap-3 min-w-[200px] group"
            >
              <Camera className="h-5 w-5 group-hover:animate-pulse" />
              Identifier une espèce
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="gap-3 min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Leaf className="h-5 w-5" />
              Explorer les espèces
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Camera className="h-8 w-8 text-accent-glow mb-3 mx-auto" />
              <h3 className="font-semibold text-primary-foreground mb-2">Identification IA</h3>
              <p className="text-primary-foreground/80 text-sm">
                Prends une photo et découvre instantanément l'espèce
              </p>
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <BookOpen className="h-8 w-8 text-accent-glow mb-3 mx-auto" />
              <h3 className="font-semibold text-primary-foreground mb-2">Fiches éducatives</h3>
              <p className="text-primary-foreground/80 text-sm">
                Apprends le rôle écologique de chaque espèce
              </p>
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Trophy className="h-8 w-8 text-accent-glow mb-3 mx-auto" />
              <h3 className="font-semibold text-primary-foreground mb-2">Quiz & Badges</h3>
              <p className="text-primary-foreground/80 text-sm">
                Deviens un protecteur de la nature certifié
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};