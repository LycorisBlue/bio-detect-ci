import { Leaf, MapPin, AlertTriangle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ivorianSpecies, type Species } from "@/data/species";

interface SpeciesCardProps {
  species: Species;
}

const SpeciesCard = ({ species }: SpeciesCardProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Commun': return 'bg-green-500';
      case 'Rare': return 'bg-orange-500';
      case 'En danger': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDangerColor = (danger: string) => {
    switch (danger) {
      case 'Inoffensif': return 'bg-green-500';
      case 'Attention': return 'bg-orange-500';
      case 'Dangereux': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="h-16 w-16 text-primary opacity-60" />
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className={`${getRarityColor(species.rarity)} text-white text-xs`}>
            {species.rarity}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge className={`${getDangerColor(species.danger)} text-white text-xs`}>
            {species.danger}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg line-clamp-2">{species.name}</CardTitle>
        <p className="text-sm text-muted-foreground italic">{species.scientificName}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground line-clamp-2">{species.habitat}</p>
        </div>
        
        <p className="text-sm text-foreground line-clamp-3">{species.description}</p>
        
        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Eye className="h-4 w-4 mr-2" />
          Voir la fiche
        </Button>
      </CardContent>
    </Card>
  );
};

export const SpeciesGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Espèces de Côte d'Ivoire
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvre la richesse de la faune et flore ivoirienne. Chaque espèce joue un rôle essentiel 
          dans l'équilibre de nos écosystèmes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {ivorianSpecies.slice(0, 6).map((species) => (
          <SpeciesCard key={species.id} species={species} />
        ))}
      </div>

      <div className="text-center">
        <Button variant="nature" size="lg" className="gap-2">
          <Leaf className="h-5 w-5" />
          Voir toutes les espèces ({ivorianSpecies.length})
        </Button>
      </div>
    </section>
  );
};