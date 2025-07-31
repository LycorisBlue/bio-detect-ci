import { Header } from "@/components/Header";
import { IdentificationModule } from "@/components/IdentificationModule";
import { Camera, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ivorianSpeciesExtended } from "@/data/species-extended";

const Index = () => {
  // Sélectionner 4 espèces populaires pour l'aperçu
  const popularSpecies = ivorianSpeciesExtended.slice(0, 4);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Commun': return 'bg-green-500';
      case 'Rare': return 'bg-orange-500';
      case 'En danger': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Section d'identification centrée */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Titre principal épuré */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Découvre la
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  {" "}biodiversité{" "}
                </span>
                ivoirienne
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Prends une photo et découvre instantanément les espèces de Côte d'Ivoire
              </p>
            </div>

            {/* Module d'identification prominent */}
            <div className="mb-16">
              <IdentificationModule />
            </div>
          </div>
        </section>

        {/* Aperçu minimal des espèces populaires */}
        <section className="container mx-auto px-4 py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Espèces populaires
              </h2>
              <p className="text-muted-foreground">
                Découvre quelques-unes des espèces emblématiques de Côte d'Ivoire
              </p>
            </div>

            {/* Grille des espèces populaires (4 cartes max) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {popularSpecies.map((species) => (
                <Card key={species.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf className="h-12 w-12 text-primary opacity-60" />
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className={`${getRarityColor(species.rarity)} text-white text-xs`}>
                        {species.rarity}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-1 mb-1">{species.name}</h3>
                    <p className="text-xs text-muted-foreground italic mb-2">{species.scientificName}</p>
                    <p className="text-xs text-foreground line-clamp-2">{species.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA vers le répertoire complet */}
            <div className="text-center">
              <Link to="/especes">
                <Button variant="outline" size="lg" className="gap-2">
                  <Leaf className="h-5 w-5" />
                  Voir toutes les espèces ({ivorianSpeciesExtended.length})
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section d'incitation à l'action */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <Camera className="h-16 w-16 mx-auto mb-4 text-accent-glow" />
              <h3 className="text-2xl font-bold mb-3">Prêt à identifier ?</h3>
              <p className="text-primary-foreground/90 mb-6">
                Chaque photo que tu prends contribue à la protection de notre biodiversité
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Camera className="h-5 w-5" />
                Commencer l'identification
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimaliste */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">BioGuard Junior</h3>
            <p className="text-primary-foreground/80 text-sm">
              Protégeons ensemble la biodiversité ivoirienne
            </p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-4">
            <p className="text-primary-foreground/60 text-xs">
              © 2024 BioGuard Junior - Projet BIOGUARD-CI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;