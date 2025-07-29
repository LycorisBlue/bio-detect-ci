import { useState, useRef } from "react";
import { Camera, Upload, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRandomSpecies, type Species } from "@/data/species";

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
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Generate random result
    const species = getRandomSpecies();
    const confidence = Math.floor(Math.random() * 25) + 75; // 75-99%
    
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
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Module d'identification IA
          </h2>
          <p className="text-lg text-muted-foreground">
            Photographie une espèce et découvre son identité grâce à l'intelligence artificielle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="shadow-soft border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                Choisir une image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div 
                className="relative aspect-square bg-muted rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer group overflow-hidden"
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <img 
                    src={selectedImage} 
                    alt="Selected specimen" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                    <Upload className="h-12 w-12 mb-2" />
                    <p className="text-sm font-medium">Cliquer pour ajouter une photo</p>
                    <p className="text-xs">ou glisser-déposer ici</p>
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
              
              <Button 
                variant="nature" 
                size="lg" 
                className="w-full"
                onClick={simulateAIAnalysis}
                disabled={!selectedImage || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Analyse en cours...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Analyser avec l'IA
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                Résultat de l'identification
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!result && !isAnalyzing && (
                <div className="text-center text-muted-foreground py-12">
                  <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Sélectionne une image pour commencer l'identification</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-12">
                  <Loader2 className="h-16 w-16 mx-auto mb-4 animate-spin text-primary" />
                  <p className="text-lg font-medium">Analyse en cours...</p>
                  <p className="text-sm text-muted-foreground">L'IA examine votre image</p>
                </div>
              )}

              {result && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      <Sparkles className="h-4 w-4" />
                      Confiance: {result.confidence}%
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{result.species.name}</h3>
                    <p className="text-muted-foreground italic">{result.species.scientificName}</p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <Badge className={`${getRarityColor(result.species.rarity)} text-white`}>
                      {result.species.rarity}
                    </Badge>
                    <Badge className={`${getDangerColor(result.species.danger)} text-white`}>
                      {result.species.danger}
                    </Badge>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-foreground">{result.species.description}</p>
                  </div>

                  <Button variant="accent" size="lg" className="w-full">
                    Voir la fiche complète
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};