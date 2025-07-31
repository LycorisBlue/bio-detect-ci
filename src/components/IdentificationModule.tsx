import { useState, useRef } from "react";
import { Camera, Upload, Sparkles, Loader2, MapPin, Info, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRandomSpecies, type Species } from "@/data/species-extended";

export const IdentificationModule = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ species: Species; confidence: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAIAnalysis = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);

    // Simulate AI processing delay (2-3 seconds)
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Generate random result with higher confidence for more credibility
    const species = getRandomSpecies();
    const confidence = Math.floor(Math.random() * 20) + 80; // 80-99%

    setResult({ species, confidence });
    setIsAnalyzing(false);
  };

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
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section - Interface plus prominente */}
        <Card className="shadow-glow border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <Camera className="h-6 w-6 text-primary" />
              Prendre une photo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              className="relative aspect-square bg-muted rounded-xl border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer group overflow-hidden"
              onClick={() => fileInputRef.current?.click()}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Espèce à identifier"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <Camera className="h-16 w-16 mb-4 opacity-60" />
                  <p className="text-lg font-medium mb-1">Photographier une espèce</p>
                  <p className="text-sm opacity-75">ou choisir depuis la galerie</p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={() => fileInputRef.current?.click()}
                className="gap-2"
              >
                <Upload className="h-4 w-4" />
                Galerie
              </Button>
              <Button
                variant="default"
                size="lg"
                onClick={simulateAIAnalysis}
                disabled={!selectedImage || isAnalyzing}
                className="gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Analyse...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Analyser
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section - Affichage des 7 champs structurés */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Résultat de l'identification
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!result && !isAnalyzing && (
              <div className="text-center text-muted-foreground py-16">
                <Leaf className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">Prêt à identifier ?</p>
                <p className="text-sm">Sélectionne une image pour découvrir l'espèce</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-16">
                <div className="relative">
                  <Loader2 className="h-16 w-16 mx-auto mb-4 animate-spin text-primary" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-accent animate-pulse" />
                  </div>
                </div>
                <p className="text-lg font-medium mb-1">Analyse en cours...</p>
                <p className="text-sm text-muted-foreground">L'IA examine les caractéristiques de votre image</p>
              </div>
            )}

            {result && (
              <div className="space-y-6">
                {/* 1. Nom commun et scientifique + Photo */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Sparkles className="h-4 w-4" />
                    Confiance: {result.confidence}%
                  </div>

                  {/* Photo haute qualité (simulée) */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Leaf className="h-10 w-10 text-primary-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{result.species.name}</h3>
                  <p className="text-muted-foreground italic text-lg">{result.species.scientificName}</p>
                </div>

                {/* 2. Niveau de rareté et dangerosité */}
                <div className="flex justify-center gap-3">
                  <Badge className={`${getRarityColor(result.species.rarity)} text-white text-sm px-3 py-1`}>
                    {result.species.rarity}
                  </Badge>
                  <Badge className={`${getDangerColor(result.species.danger)} text-white text-sm px-3 py-1`}>
                    {result.species.danger}
                  </Badge>
                </div>

                {/* 3. Rôle écologique */}
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-accent" />
                    Rôle écologique
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">{result.species.role}</p>
                </div>

                {/* 4. Habitat principal en Côte d'Ivoire */}
                <div className="bg-muted/60 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Habitat en Côte d'Ivoire
                  </h4>
                  <p className="text-sm text-foreground">{result.species.habitat}</p>
                </div>

                {/* 5. "Le savais-tu ?" */}
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-accent" />
                    Le savais-tu ?
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed font-medium">{result.species.funFact}</p>
                </div>

                {/* Bouton d'action */}
                <div className="pt-4">
                  <Button variant="default" size="lg" className="w-full gap-2">
                    <Leaf className="h-4 w-4" />
                    Voir la fiche complète
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};