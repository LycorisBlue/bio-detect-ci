import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IdentificationModule } from "@/components/IdentificationModule";
import { SpeciesGrid } from "@/components/SpeciesGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IdentificationModule />
        <SpeciesGrid />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">BioGuard Junior</h3>
            <p className="text-primary-foreground/80">
              Protégeons ensemble la biodiversité ivoirienne pour les générations futures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Fonctionnalités</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>Identification par IA</li>
                <li>Fiches éducatives</li>
                <li>Quiz interactifs</li>
                <li>Système de badges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ressources</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>Guide utilisateur</li>
                <li>FAQ</li>
                <li>Contact support</li>
                <li>Signaler une erreur</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">À propos</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>Projet BIOGUARD-CI</li>
                <li>Notre mission</li>
                <li>Partenaires</li>
                <li>Mentions légales</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 BioGuard Junior - Protéger la biodiversité ivoirienne avec l'IA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
