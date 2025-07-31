import { useState } from "react";
import { Header } from "@/components/Header";
import { Search, Filter, Leaf, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ivorianSpeciesExtended, getSpeciesByCategory, getSpeciesByRarity } from "@/data/species-extended";

const SpeciesDirectory = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<'Tous' | 'Faune' | 'Flore'>('Tous');
    const [selectedRarity, setSelectedRarity] = useState<'Tous' | 'Commun' | 'Rare' | 'En danger'>('Tous');

    const filteredSpecies = ivorianSpeciesExtended.filter(species => {
        const matchesSearch = species.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            species.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || species.category === selectedCategory;
        const matchesRarity = selectedRarity === 'Tous' || species.rarity === selectedRarity;

        return matchesSearch && matchesCategory && matchesRarity;
    });

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
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {/* En-tête */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Espèces de Côte d'Ivoire
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Découvre la richesse de la biodiversité ivoirienne : {ivorianSpeciesExtended.length} espèces répertoriées
                    </p>
                </div>

                {/* Filtres et recherche */}
                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Recherche */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Rechercher une espèce..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        {/* Filtre par catégorie */}
                        <div className="flex gap-2">
                            {['Tous', 'Faune', 'Flore'].map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    size="sm"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    onClick={() => setSelectedCategory(category as any)}
                                    className="flex-1"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>

                        {/* Filtre par rareté */}
                        <div className="flex gap-2">
                            {['Tous', 'Commun', 'Rare', 'En danger'].map((rarity) => (
                                <Button
                                    key={rarity}
                                    variant={selectedRarity === rarity ? "default" : "outline"}
                                    size="sm"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    onClick={() => setSelectedRarity(rarity as any)}
                                    className="flex-1 text-xs"
                                >
                                    {rarity}
                                </Button>
                            ))}
                        </div>

                        {/* Statistiques */}
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">{filteredSpecies.length}</span> espèces trouvées
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grille des espèces */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSpecies.map((species) => (
                        <Card key={species.id} className="group hover:shadow-glow transition-all duration-300 hover:scale-105 overflow-hidden">
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
                                <div className="absolute top-3 left-3">
                                    <Badge variant="secondary" className="text-xs">
                                        {species.category}
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

                                <Link to={`/especes/${species.id}`}>
                                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Eye className="h-4 w-4 mr-2" />
                                        Voir la fiche
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Message si aucun résultat */}
                {filteredSpecies.length === 0 && (
                    <div className="text-center py-16">
                        <Leaf className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-semibold mb-2">Aucune espèce trouvée</h3>
                        <p className="text-muted-foreground">
                            Essayez de modifier vos critères de recherche
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default SpeciesDirectory;