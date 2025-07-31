// src/pages/Index.tsx - Version mise à jour
import { Camera, Leaf, Sparkles, TreePine, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SpeciesIdentifier } from "@/components/SpeciesIdentifier";
import { ivorianSpeciesExtended } from "@/data/species-extended";
// import { ivorianSpeciesExtended } from "@/data/species";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section avec identification IA */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Leaf className="h-12 w-12 text-primary" />
              <Sparkles className="h-6 w-6 text-accent absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              BioGuard Junior
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto">
            Découvre et protège la biodiversité ivoirienne avec l'intelligence artificielle
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Propulsé par Gemini 2.5 Flash</span>
          </div>
        </div>

        {/* Composant d'identification principal */}
        <SpeciesIdentifier />
      </section>

      {/* Section éducative */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Pourquoi protéger notre biodiversité ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La Côte d'Ivoire abrite une richesse naturelle extraordinaire. Chaque espèce joue un rôle crucial dans l'équilibre de nos écosystèmes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100">
              <TreePine className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Forêts préservées</h3>
              <p className="text-muted-foreground">
                Nos forêts sont les poumons de la planète et abritent 80% de la biodiversité terrestre
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100">
              <Leaf className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Espèces protégées</h3>
              <p className="text-muted-foreground">
                Chaque espèce est unique et irremplaçable dans la chaîne alimentaire
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100">
              <Sparkles className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Avenir durable</h3>
              <p className="text-muted-foreground">
                Préserver aujourd'hui pour les générations futures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground text-center">
            <h2 className="text-3xl font-bold mb-6">Notre base de données</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-accent-glow">{ivorianSpeciesExtended.length}</div>
                <div className="text-primary-foreground/80">Espèces</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-glow">3</div>
                <div className="text-primary-foreground/80">Parcs nationaux</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-glow">+95%</div>
                <div className="text-primary-foreground/80">Précision IA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-glow">∞</div>
                <div className="text-primary-foreground/80">Apprentissage</div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/especes">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Leaf className="h-5 w-5" />
                  Explorer toutes les espèces
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">BioGuard Junior</h3>
            <p className="text-primary-foreground/80 text-sm">
              Protégeons ensemble la biodiversité ivoirienne avec l'IA
            </p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-4">
            <p className="text-primary-foreground/60 text-xs">
              © 2024 BioGuard Junior - Projet BIOGUARD-CI • Propulsé par Gemini 2.5 Flash
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;