export interface Species {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  role: string;
  rarity: "Commun" | "Rare" | "En danger";
  danger: "Inoffensif" | "Attention" | "Dangereux";
  habitat: string;
  funFact: string;
  description: string;
  category: "Faune" | "Flore";
}

export const ivorianSpeciesExtended: Species[] = [
  // FAUNE - MAMMIFÈRES
  {
    id: "1",
    name: "Éléphant de forêt",
    scientificName: "Loxodonta cyclotis",
    image: "/api/placeholder/400/300",
    role: "Architecte de la forêt, il disperse les graines et maintient la biodiversité des forêts tropicales.",
    rarity: "En danger",
    danger: "Attention",
    habitat: "Forêts denses du sud et ouest de la Côte d'Ivoire",
    funFact:
      "Un éléphant peut parcourir jusqu'à 80km par jour et se souvenir d'endroits visités il y a 30 ans !",
    description:
      "Plus petit que son cousin de savane, l'éléphant de forêt est essentiel à l'écosystème forestier ivoirien.",
    category: "Faune",
  },
  {
    id: "2",
    name: "Chimpanzé",
    scientificName: "Pan troglodytes",
    image: "/api/placeholder/400/300",
    role: "Disperseur de graines et créateur d'outils, il influence la structure de la forêt.",
    rarity: "En danger",
    danger: "Attention",
    habitat: "Forêts primaires du sud-ouest de la Côte d'Ivoire",
    funFact:
      "Les chimpanzés de Taï utilisent des marteaux en pierre pour casser les noix depuis des millénaires !",
    description:
      "Notre plus proche parent dans le règne animal, menacé par la déforestation.",
    category: "Faune",
  },
  {
    id: "3",
    name: "Cercopithèque Diane",
    scientificName: "Cercopithecus diana",
    image: "/api/placeholder/400/300",
    role: "Disperseur de graines, il aide à la régénération de la forêt en transportant les fruits.",
    rarity: "Rare",
    danger: "Inoffensif",
    habitat: "Forêts primaires du sud-ouest ivoirien",
    funFact:
      "Il possède un système de communication très élaboré avec plus de 30 cris différents !",
    description:
      "Ce primate élégant est reconnaissable à sa barbe blanche caractéristique.",
    category: "Faune",
  },
  {
    id: "4",
    name: "Hippopotame",
    scientificName: "Hippopotamus amphibius",
    image: "/api/placeholder/400/300",
    role: "Ingénieur aquatique qui maintient la qualité de l'eau et fertilise les berges.",
    rarity: "Rare",
    danger: "Dangereux",
    habitat: "Rivières et lacs du nord et de l'ouest ivoirien",
    funFact:
      "Malgré son apparence, il peut courir à 48 km/h sur terre et rester 5 minutes sous l'eau !",
    description:
      "L'un des mammifères les plus dangereux d'Afrique, mais essentiel aux écosystèmes aquatiques.",
    category: "Faune",
  },
  {
    id: "5",
    name: "Céphalophe de Maxwell",
    scientificName: "Philantomba maxwellii",
    image: "/api/placeholder/400/300",
    role: "Herbivore qui maintient la végétation basse et disperse les graines des fruits tombés.",
    rarity: "Rare",
    danger: "Inoffensif",
    habitat: "Forêts denses et lisières forestières du sud ivoirien",
    funFact:
      "Cette petite antilope ne pèse que 9kg mais peut bondir à 2 mètres de haut !",
    description:
      "La plus petite antilope d'Afrique de l'Ouest, très discrète et agile.",
    category: "Faune",
  },
  {
    id: "6",
    name: "Pangolin géant",
    scientificName: "Smutsia gigantea",
    image: "/api/placeholder/400/300",
    role: "Contrôleur de termites et fourmis, il régule les populations d'insectes nuisibles.",
    rarity: "En danger",
    danger: "Inoffensif",
    habitat: "Forêts et savanes boisées de toute la Côte d'Ivoire",
    funFact:
      "Il peut manger jusqu'à 70 millions d'insectes par an grâce à sa langue de 70cm !",
    description:
      "Mammifère unique recouvert d'écailles, très menacé par le braconnage.",
    category: "Faune",
  },
  {
    id: "7",
    name: "Buffle de forêt",
    scientificName: "Syncerus caffer nanus",
    image: "/api/placeholder/400/300",
    role: "Herbivore qui maintient les clairières ouvertes et crée des chemins dans la forêt.",
    rarity: "Rare",
    danger: "Dangereux",
    habitat: "Forêts denses et clairières du sud ivoirien",
    funFact:
      "Plus petit que le buffle de savane, il peut néanmoins peser jusqu'à 320kg !",
    description:
      "Version forestière du buffle africain, plus compact mais tout aussi puissant.",
    category: "Faune",
  },

  // FAUNE - REPTILES
  {
    id: "8",
    name: "Python de Seba",
    scientificName: "Python sebae",
    image: "/api/placeholder/400/300",
    role: "Prédateur régulateur qui contrôle les populations de rongeurs et maintient l'équilibre.",
    rarity: "Commun",
    danger: "Attention",
    habitat: "Savanes et forêts galeries du nord de la Côte d'Ivoire",
    funFact:
      "Il peut mesurer jusqu'à 7 mètres et jeûner pendant 6 mois après un gros repas !",
    description:
      "Le plus grand serpent d'Afrique, non venimeux mais impressionnant par sa taille.",
    category: "Faune",
  },
  {
    id: "9",
    name: "Crocodile du Nil",
    scientificName: "Crocodylus niloticus",
    image: "/api/placeholder/400/300",
    role: "Prédateur apex aquatique qui régule les populations de poissons et maintient l'équilibre des cours d'eau.",
    rarity: "Rare",
    danger: "Dangereux",
    habitat: "Rivières, lacs et marécages du nord et centre ivoirien",
    funFact:
      "Il peut rester immobile sous l'eau pendant 1 heure et vivre plus de 70 ans !",
    description:
      "Survivant des dinosaures, ce prédateur redoutable est essentiel aux écosystèmes aquatiques.",
    category: "Faune",
  },
  {
    id: "10",
    name: "Varan du Nil",
    scientificName: "Varanus niloticus",
    image: "/api/placeholder/400/300",
    role: "Nettoyeur naturel qui consomme les charognes et contrôle les populations de petits animaux.",
    rarity: "Commun",
    danger: "Attention",
    habitat: "Zones humides et savanes de toute la Côte d'Ivoire",
    funFact:
      "Excellent nageur, il peut retenir sa respiration sous l'eau pendant 30 minutes !",
    description:
      "Grand lézard semi-aquatique, redoutable chasseur et excellent nageur.",
    category: "Faune",
  },

  // FAUNE - OISEAUX
  {
    id: "11",
    name: "Calao à casque",
    scientificName: "Buceros rhinoceros",
    image: "/api/placeholder/400/300",
    role: "Jardinier de la forêt, il disperse les graines de fruits sur de grandes distances.",
    rarity: "Rare",
    danger: "Inoffensif",
    habitat: "Forêts denses du sud-ouest ivoirien",
    funFact:
      "Son casque osseux peut représenter 10% de son poids total et résonne comme un tambour !",
    description:
      "Oiseau spectaculaire reconnaissable à son énorme bec surmonté d'un casque osseux.",
    category: "Faune",
  },
  {
    id: "12",
    name: "Touraco géant",
    scientificName: "Tauraco macrorhynchus",
    image: "/api/placeholder/400/300",
    role: "Disperseur de graines et indicateur de la santé des forêts tropicales.",
    rarity: "Rare",
    danger: "Inoffensif",
    habitat: "Canopée des forêts humides du sud ivoirien",
    funFact:
      "Ses plumes contiennent de la turacine, un pigment vert cuivré unique au monde !",
    description:
      "Magnifique oiseau aux couleurs vives, symbole de la richesse aviaire ivoirienne.",
    category: "Faune",
  },
  {
    id: "13",
    name: "Aigle couronné",
    scientificName: "Stephanoaetus coronatus",
    image: "/api/placeholder/400/300",
    role: "Prédateur de la canopée qui régule les populations de primates et d'oiseaux.",
    rarity: "Rare",
    danger: "Attention",
    habitat: "Forêts denses et galeries forestières du sud ivoirien",
    funFact:
      "Il peut soulever des proies pesant jusqu'à 35kg, soit plus que son propre poids !",
    description:
      "Rapace puissant et discret, l'un des prédateurs les plus redoutables de la canopée.",
    category: "Faune",
  },
  {
    id: "14",
    name: "Ombrette africaine",
    scientificName: "Scopus umbretta",
    image: "/api/placeholder/400/300",
    role: "Indicateur de la qualité des zones humides et contrôleur de populations aquatiques.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Marécages, rivières et lacs de toute la Côte d'Ivoire",
    funFact:
      "Elle construit des nids géants pouvant peser plus de 50kg et servir à plusieurs générations !",
    description: "Oiseau emblématique des zones humides, architecte hors pair.",
    category: "Faune",
  },

  // FLORE - ARBRES GÉANTS
  {
    id: "15",
    name: "Fromager",
    scientificName: "Ceiba pentandra",
    image: "/api/placeholder/400/300",
    role: "Arbre géant qui abrite de nombreuses espèces et enrichit le sol de ses feuilles.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Forêts et savanes de toute la Côte d'Ivoire",
    funFact:
      "Il peut atteindre 70 mètres de haut et son tronc peut faire 10 mètres de circonférence !",
    description:
      "Arbre sacré dans de nombreuses cultures ivoiriennes, symbole de force et de longévité.",
    category: "Flore",
  },
  {
    id: "16",
    name: "Acajou",
    scientificName: "Khaya ivorensis",
    image: "/api/placeholder/400/300",
    role: "Arbre majestueux qui structure la canopée et fournit un bois précieux de qualité.",
    rarity: "Rare",
    danger: "Inoffensif",
    habitat: "Forêts denses humides du sud de la Côte d'Ivoire",
    funFact:
      "Son bois rouge-brun est si prisé qu'il a donné son nom à la République de Côte d'Ivoire !",
    description:
      "Essence forestière emblématique, symbole de la richesse forestière ivoirienne.",
    category: "Flore",
  },
  {
    id: "17",
    name: "Samba",
    scientificName: "Triplochiton scleroxylon",
    image: "/api/placeholder/400/300",
    role: "Arbre pionnier qui colonise les trouées forestières et facilite la régénération.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Forêts secondaires et lisières forestières du sud ivoirien",
    funFact:
      "Il peut pousser de 3 mètres par an et atteindre 60 mètres de hauteur !",
    description:
      "Essence à croissance rapide, pilier de l'industrie du bois ivoirienne.",
    category: "Flore",
  },
  {
    id: "18",
    name: "Iroko",
    scientificName: "Milicia excelsa",
    image: "/api/placeholder/400/300",
    role: "Arbre géant qui domine la canopée et abrite une faune exceptionnelle.",
    rarity: "Rare",
    danger: "Inoffensif",
    habitat: "Forêts denses et savanes boisées du centre et sud ivoirien",
    funFact:
      "Cet arbre peut vivre plus de 500 ans et ses racines s'étendent sur 100 mètres !",
    description:
      "Géant de la forêt tropicale, vénéré comme arbre à palabres dans les villages.",
    category: "Flore",
  },

  // FLORE - ARBRES FRUITIERS
  {
    id: "19",
    name: "Mangue Africaine",
    scientificName: "Irvingia gabonensis",
    image: "/api/placeholder/400/300",
    role: "Arbre nourricier qui fournit des fruits riches en nutrients et du bois précieux.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Forêts tropicales humides de toute la Côte d'Ivoire",
    funFact:
      'Ses graines sont utilisées pour préparer la sauce "dika" très appréciée en Afrique de l\'Ouest !',
    description:
      "Arbre emblématique des forêts ivoiriennes, il peut vivre plus de 100 ans.",
    category: "Flore",
  },
  {
    id: "20",
    name: "Karité",
    scientificName: "Vitellaria paradoxa",
    image: "/api/placeholder/400/300",
    role: "Arbre providence qui fournit beurre, nourriture et protection contre l'érosion.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Savanes du nord de la Côte d'Ivoire",
    funFact:
      "Il faut attendre 20 ans avant qu'un karité produise ses premiers fruits !",
    description:
      "Or vert de l'Afrique de l'Ouest, source de revenus pour des millions de femmes.",
    category: "Flore",
  },
  {
    id: "21",
    name: "Colatier",
    scientificName: "Cola nitida",
    image: "/api/placeholder/400/300",
    role: "Arbre culturel qui produit la noix de cola, stimulant naturel et symbole d'hospitalité.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Forêts humides et plantations du sud ivoirien",
    funFact:
      "La noix de cola était l'ingrédient secret original du célèbre soda Coca-Cola !",
    description:
      "Arbre au cœur de la culture ivoirienne, symbole de paix et de fraternité.",
    category: "Flore",
  },

  // FLORE - PALMIERS ET CULTURES
  {
    id: "22",
    name: "Palmier à huile",
    scientificName: "Elaeis guineensis",
    image: "/api/placeholder/400/300",
    role: "Espèce économique majeure, source d'huile alimentaire et industrielle.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Plantations et forêts humides de toute la Côte d'Ivoire",
    funFact:
      "Un palmier peut produire jusqu'à 40kg d'huile par an pendant 80 ans !",
    description:
      "Palmier emblématique de l'économie ivoirienne, essentiel pour de nombreuses communautés.",
    category: "Flore",
  },
  {
    id: "23",
    name: "Cocotier",
    scientificName: "Cocos nucifera",
    image: "/api/placeholder/400/300",
    role: "Palmier polyvalent qui fournit eau, nourriture, matériaux et protection côtière.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Zones côtières et plantations du sud de la Côte d'Ivoire",
    funFact:
      "Un cocotier peut produire jusqu'à 150 noix de coco par an pendant 80 ans !",
    description:
      "Arbre de vie des régions tropicales, chaque partie est utile à l'homme.",
    category: "Flore",
  },
  {
    id: "24",
    name: "Plantain",
    scientificName: "Musa paradisiaca",
    image: "/api/placeholder/400/300",
    role: "Culture vivrière essentielle qui nourrit les populations et enrichit les sols.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Zones cultivées et forêts secondaires de toute la Côte d'Ivoire",
    funFact:
      "Une seule plante peut produire jusqu'à 300 bananes et se régénère toute seule !",
    description:
      "Aliment de base de la cuisine ivoirienne, cultivé dans tout le pays.",
    category: "Flore",
  },

  // FLORE - PLANTES MÉDICINALES
  {
    id: "25",
    name: "Neem",
    scientificName: "Azadirachta indica",
    image: "/api/placeholder/400/300",
    role: "Arbre pharmacie naturelle aux propriétés insecticides et médicinales exceptionnelles.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Savanes et zones urbaines du nord ivoirien",
    funFact:
      "Toutes ses parties sont utilisées en médecine traditionnelle contre plus de 40 maladies !",
    description:
      "Miracle de la nature, cet arbre indien s'est parfaitement adapté au climat ivoirien.",
    category: "Flore",
  },
  {
    id: "26",
    name: "Moringa",
    scientificName: "Moringa oleifera",
    image: "/api/placeholder/400/300",
    role: "Super-aliment naturel exceptionnellement riche en vitamines, minéraux et protéines.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Savanes sèches et zones cultivées du nord ivoirien",
    funFact:
      "Ses feuilles contiennent 7 fois plus de vitamine C que les oranges !",
    description:
      "Arbre miracle contre la malnutrition, toutes ses parties sont comestibles.",
    category: "Flore",
  },

  // FAUNE - INSECTES ET ARTHROPODES
  {
    id: "27",
    name: "Abeille africaine",
    scientificName: "Apis mellifera adansonii",
    image: "/api/placeholder/400/300",
    role: "Pollinisateur essentiel qui assure la reproduction de 80% des plantes à fleurs.",
    rarity: "Commun",
    danger: "Attention",
    habitat: "Forêts, savanes et zones cultivées de toute la Côte d'Ivoire",
    funFact: "Une colonie peut visiter jusqu'à 2 millions de fleurs par jour !",
    description:
      "Architecte de la biodiversité, indispensable à l'équilibre des écosystèmes.",
    category: "Faune",
  },
  {
    id: "28",
    name: "Termite champignonniste",
    scientificName: "Macrotermes bellicosus",
    image: "/api/placeholder/400/300",
    role: "Ingénieur du sol qui aère la terre et recycle la matière organique.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Savanes et forêts galeries de toute la Côte d'Ivoire",
    funFact:
      "Leurs termitières peuvent mesurer 9 mètres de haut et abriter 2 millions d'individus !",
    description:
      "Architecte microscopique aux constructions gigantesques, recycleur de la nature.",
    category: "Faune",
  },
  {
    id: "29",
    name: "Papillon Charaxes",
    scientificName: "Charaxes brutus",
    image: "/api/placeholder/400/300",
    role: "Pollinisateur et indicateur de la santé des écosystèmes forestiers.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Forêts et lisières forestières du sud ivoirien",
    funFact:
      "Ses ailes orange et noires imitent les couleurs des feuilles mortes pour échapper aux prédateurs !",
    description:
      "Joyau volant des forêts ivoiriennes, ambassadeur de la beauté naturelle.",
    category: "Faune",
  },

  // FAUNE - POISSONS D'EAU DOUCE
  {
    id: "30",
    name: "Tilapia du Nil",
    scientificName: "Oreochromis niloticus",
    image: "/api/placeholder/400/300",
    role: "Poisson régulateur qui maintient l'équilibre des écosystèmes aquatiques d'eau douce.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Rivières, lacs et étangs de toute la Côte d'Ivoire",
    funFact:
      "Le mâle construit un nid circulaire dans le sable et protège ses petits dans sa bouche !",
    description:
      "Poisson emblématique de la pisciculture ivoirienne, riche en protéines.",
    category: "Faune",
  },

  // FLORE - PLANTES AQUATIQUES
  {
    id: "31",
    name: "Nénuphar tropical",
    scientificName: "Nymphaea lotus",
    image: "/api/placeholder/400/300",
    role: "Plante aquatique qui oxygène l'eau et abrite de nombreuses espèces aquatiques.",
    rarity: "Commun",
    danger: "Inoffensif",
    habitat: "Lacs, étangs et marécages de toute la Côte d'Ivoire",
    funFact:
      "Ses fleurs s'ouvrent la nuit et se ferment le matin, suivant un cycle lunaire !",
    description:
      "Fleur sacrée des anciens Égyptiens, symbole de pureté et de renaissance.",
    category: "Flore",
  },

  // FAUNE - AMPHIBIENS
  {
    id: "32",
    name: "Grenouille goliath",
    scientificName: "Conraua goliath",
    image: "/api/placeholder/400/300",
    role: "Indicateur de la qualité de l'eau et régulateur d'insectes aquatiques.",
    rarity: "Rare",
    danger: "Inoffensif",
    habitat: "Rivières et cascades des forêts du sud-ouest ivoirien",
    funFact:
      "C'est la plus grande grenouille du monde, elle peut mesurer 32cm et peser 3,3kg !",
    description:
      "Géant des amphibiens, témoin de la pureté des cours d'eau forestiers.",
    category: "Faune",
  },
];

// Fonctions utilitaires
export const getSpeciesById = (id: string): Species | undefined => {
  return ivorianSpeciesExtended.find((species) => species.id === id);
};

export const getRandomSpecies = (): Species => {
  const randomIndex = Math.floor(Math.random() * ivorianSpeciesExtended.length);
  return ivorianSpeciesExtended[randomIndex];
};

export const getSpeciesByCategory = (
  category: "Faune" | "Flore"
): Species[] => {
  return ivorianSpeciesExtended.filter(
    (species) => species.category === category
  );
};

export const getSpeciesByRarity = (
  rarity: "Commun" | "Rare" | "En danger"
): Species[] => {
  return ivorianSpeciesExtended.filter((species) => species.rarity === rarity);
};

export const getSpeciesByDanger = (
  danger: "Inoffensif" | "Attention" | "Dangereux"
): Species[] => {
  return ivorianSpeciesExtended.filter((species) => species.danger === danger);
};

// Statistiques
export const getSpeciesStats = () => {
  const total = ivorianSpeciesExtended.length;
  const faune = getSpeciesByCategory("Faune").length;
  const flore = getSpeciesByCategory("Flore").length;
  const commun = getSpeciesByRarity("Commun").length;
  const rare = getSpeciesByRarity("Rare").length;
  const enDanger = getSpeciesByRarity("En danger").length;

  return {
    total,
    faune,
    flore,
    rarity: { commun, rare, enDanger },
  };
};
