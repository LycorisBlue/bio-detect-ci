export interface Species {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  role: string;
  rarity: 'Commun' | 'Rare' | 'En danger';
  danger: 'Inoffensif' | 'Attention' | 'Dangereux';
  habitat: string;
  funFact: string;
  description: string;
}

export const ivorianSpecies: Species[] = [
  {
    id: '1',
    name: 'Éléphant de forêt',
    scientificName: 'Loxodonta cyclotis',
    image: '/api/placeholder/400/300',
    role: 'Architecte de la forêt, il disperse les graines et maintient la biodiversité des forêts tropicales.',
    rarity: 'En danger',
    danger: 'Attention',
    habitat: 'Forêts denses du sud et ouest de la Côte d\'Ivoire',
    funFact: 'Un éléphant peut parcourir jusqu\'à 80km par jour et se souvenir d\'endroits visités il y a 30 ans !',
    description: 'Plus petit que son cousin de savane, l\'éléphant de forêt est essentiel à l\'écosystème forestier ivoirien.'
  },
  {
    id: '2',
    name: 'Mangue Africaine',
    scientificName: 'Irvingia gabonensis',
    image: '/api/placeholder/400/300',
    role: 'Arbre nourricier qui fournit des fruits riches en nutrients et du bois précieux.',
    rarity: 'Commun',
    danger: 'Inoffensif',
    habitat: 'Forêts tropicales humides de toute la Côte d\'Ivoire',
    funFact: 'Ses graines sont utilisées pour préparer la sauce "dika" très appréciée en Afrique de l\'Ouest !',
    description: 'Arbre emblématique des forêts ivoiriennes, il peut vivre plus de 100 ans.'
  },
  {
    id: '3',
    name: 'Cercopithèque Diane',
    scientificName: 'Cercopithecus diana',
    image: '/api/placeholder/400/300',
    role: 'Disperseur de graines, il aide à la régénération de la forêt en transportant les fruits.',
    rarity: 'Rare',
    danger: 'Inoffensif',
    habitat: 'Forêts primaires du sud-ouest ivoirien',
    funFact: 'Il possède un système de communication très élaboré avec plus de 30 cris différents !',
    description: 'Ce primate élégant est reconnaissable à sa barbe blanche caractéristique.'
  },
  {
    id: '4',
    name: 'Python de Seba',
    scientificName: 'Python sebae',
    image: '/api/placeholder/400/300',
    role: 'Prédateur régulateur qui contrôle les populations de rongeurs et maintient l\'équilibre.',
    rarity: 'Commun',
    danger: 'Attention',
    habitat: 'Savanes et forêts galeries du nord de la Côte d\'Ivoire',
    funFact: 'Il peut mesurer jusqu\'à 7 mètres et jeûner pendant 6 mois après un gros repas !',
    description: 'Le plus grand serpent d\'Afrique, non venimeux mais impressionnant par sa taille.'
  },
  {
    id: '5',
    name: 'Calao à casque',
    scientificName: 'Buceros rhinoceros',
    image: '/api/placeholder/400/300',
    role: 'Jardinier de la forêt, il disperse les graines de fruits sur de grandes distances.',
    rarity: 'Rare',
    danger: 'Inoffensif',
    habitat: 'Forêts denses du sud-ouest ivoirien',
    funFact: 'Son casque osseux peut représenter 10% de son poids total et résonne comme un tambour !',
    description: 'Oiseau spectaculaire reconnaissable à son énorme bec surmonté d\'un casque osseux.'
  },
  {
    id: '6',
    name: 'Palmier à huile',
    scientificName: 'Elaeis guineensis',
    image: '/api/placeholder/400/300',
    role: 'Espèce économique majeure, source d\'huile alimentaire et industrielle.',
    rarity: 'Commun',
    danger: 'Inoffensif',
    habitat: 'Plantations et forêts humides de toute la Côte d\'Ivoire',
    funFact: 'Un palmier peut produire jusqu\'à 40kg d\'huile par an pendant 80 ans !',
    description: 'Palmier emblématique de l\'économie ivoirienne, essentiel pour de nombreuses communautés.'
  },
  {
    id: '7',
    name: 'Hippopotame',
    scientificName: 'Hippopotamus amphibius',
    image: '/api/placeholder/400/300',
    role: 'Ingénieur aquatique qui maintient la qualité de l\'eau et fertilise les berges.',
    rarity: 'Rare',
    danger: 'Dangereux',
    habitat: 'Rivières et lacs du nord et de l\'ouest ivoirien',
    funFact: 'Malgré son apparence, il peut courir à 48 km/h sur terre et rester 5 minutes sous l\'eau !',
    description: 'L\'un des mammifères les plus dangereux d\'Afrique, mais essentiel aux écosystèmes aquatiques.'
  },
  {
    id: '8',
    name: 'Fromager',
    scientificName: 'Ceiba pentandra',
    image: '/api/placeholder/400/300',
    role: 'Arbre géant qui abrite de nombreuses espèces et enrichit le sol de ses feuilles.',
    rarity: 'Commun',
    danger: 'Inoffensif',
    habitat: 'Forêts et savanes de toute la Côte d\'Ivoire',
    funFact: 'Il peut atteindre 70 mètres de haut et son tronc peut faire 10 mètres de circonférence !',
    description: 'Arbre sacré dans de nombreuses cultures ivoiriennes, symbole de force et de longévité.'
  },
  {
    id: '9',
    name: 'Céphalophe de Maxwell',
    scientificName: 'Philantomba maxwellii',
    image: '/api/placeholder/400/300',
    role: 'Herbivore qui maintient la végétation basse et disperse les graines des fruits tombés.',
    rarity: 'Rare',
    danger: 'Inoffensif',
    habitat: 'Forêts denses et lisières forestières du sud ivoirien',
    funFact: 'Cette petite antilope ne pèse que 9kg mais peut bondir à 2 mètres de haut !',
    description: 'La plus petite antilope d\'Afrique de l\'Ouest, très discrète et agile.'
  },
  {
    id: '10',
    name: 'Plantain',
    scientificName: 'Musa paradisiaca',
    image: '/api/placeholder/400/300',
    role: 'Culture vivrière essentielle qui nourrit les populations et enrichit les sols.',
    rarity: 'Commun',
    danger: 'Inoffensif',
    habitat: 'Zones cultivées et forêts secondaires de toute la Côte d\'Ivoire',
    funFact: 'Une seule plante peut produire jusqu\'à 300 bananes et se régénère toute seule !',
    description: 'Aliment de base de la cuisine ivoirienne, cultivé dans tout le pays.'
  }
];

export const getSpeciesById = (id: string): Species | undefined => {
  return ivorianSpecies.find(species => species.id === id);
};

export const getRandomSpecies = (): Species => {
  const randomIndex = Math.floor(Math.random() * ivorianSpecies.length);
  return ivorianSpecies[randomIndex];
};