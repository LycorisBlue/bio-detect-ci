import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ArrowLeft, MapPin, Info, Leaf, Camera, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSpeciesById, ivorianSpeciesExtended } from "@/data/species-extended";

const SpeciesDetail = () => {
    const { id } = useParams<{ id: string }>();
    const species = getSpeciesById(id || '');

    if (!species) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <div className="text-center py-16">
                        <Leaf className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <h1 className="text-2xl font-bold mb-2">Espèce non trouvée</h1>
                        <p className="text-muted-foreground mb-4">L'espèce demandée n'existe pas dans notre base de données.</p>
                        <Link to="/especes">
                            <Button variant="outline">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Retour au répertoire
                            </Button>
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

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

    // Suggérer 3 espèces similaires (même catégorie)
    const similarSpecies = ivorianSpeciesExtended
        .filter(s => s.category === species.category && s.id !== species.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {/* Navigation */}
                <div className="mb-6">
                    <Link to="/especes">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Retour au répertoire
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contenu principal */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* En-tête avec photo */}
                        <Card className="overflow-hidden">
                            <div className="aspect-[16/9] bg-muted relative">
                                <div className="absolute inset-0 bg-gradient-primary opacity-30" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Leaf className="h-24 w-24 text-primary opacity-60" />
                                </div>
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <Badge className={`${getRarityColor(species.rarity)} text-white`}>
                                        {species.rarity}
                                    </Badge>
                                    <Badge className={`${getDangerColor(species.danger)} text-white`}>
                                        {species.danger}
                                    </Badge>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary">
                                        {species.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <div className="text-center mb-6">
                                    <h1 className="text-3xl font-bold text-foreground mb-2">{species.name}</h1>
                                    <p className="text-xl text-muted-foreground italic">{species.scientificName}</p>
                                </div>

                                <p className="text-lg text-foreground leading-relaxed">{species.description}</p>
                            </CardContent>
                        </Card>

                        {/* Rôle écologique */}
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Leaf className="h-5 w-5 text-accent" />
                                    Rôle écologique
                                </h2>
                                <p className="text-foreground leading-relaxed">{species.role}</p>
                            </CardContent>
                        </Card>

                        {/* Habitat */}
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    Habitat en Côte d'Ivoire
                                </h2>
                                <p className="text-foreground leading-relaxed">{species.habitat}</p>
                            </CardContent>
                        </Card>

                        {/* Le savais-tu ? */}
                        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Info className="h-5 w-5 text-accent" />
                                    Le savais-tu ?
                                </h2>
                                <p className="text-foreground leading-relaxed font-medium">{species.funFact}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Actions */}
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-semibold text-foreground">Actions</h3>
                                <div className="space-y-3">
                                    <Button className="w-full gap-2">
                                        <Camera className="h-4 w-4" />
                                        Identifier cette espèce
                                    </Button>
                                    <Button variant="outline" className="w-full gap-2">
                                        <Share2 className="h-4 w-4" />
                                        Partager
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Informations rapides */}
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-semibold text-foreground">Informations</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Catégorie</p>
                                        <p className="font-medium">{species.category}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Rareté</p>
                                        <Badge className={`${getRarityColor(species.rarity)} text-white mt-1`}>
                                            {species.rarity}
                                        </Badge>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Dangerosité</p>
                                        <Badge className={`${getDangerColor(species.danger)} text-white mt-1`}>
                                            {species.danger}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Espèces similaires */}
                        {similarSpecies.length > 0 && (
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-4">Espèces similaires</h3>
                                    <div className="space-y-3">
                                        {similarSpecies.map((similar) => (
                                            <Link key={similar.id} to={`/especes/${similar.id}`}>
                                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Leaf className="h-5 w-5 text-primary-foreground" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-medium text-sm line-clamp-1">{similar.name}</p>
                                                        <p className="text-xs text-muted-foreground italic line-clamp-1">{similar.scientificName}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SpeciesDetail;