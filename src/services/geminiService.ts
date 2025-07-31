// src/services/geminiService.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

// Configuration de l'API Gemini
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Modèle Gemini 2.5 Flash
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

export interface SpeciesIdentification {
  species: string;
  scientificName: string;
  family: string;
  confidence: number;
  description: string;
  ecologicalRole: string;
  conservation: 'Commune' | 'Rare' | 'Menacée' | 'En danger critique';
  dangerLevel: 'Inoffensive' | 'Attention' | 'Dangereuse';
  habitat: string;
  distribution: string;
  characteristics: string[];
  culturalImportance?: string;
}

export class GeminiSpeciesService {
  /**
   * Identifie une espèce à partir d'une image
   */
  static async identifySpecies(imageFile: File): Promise<SpeciesIdentification> {
    try {
      // Convertir l'image en base64
      const imageData = await this.fileToGenerativePart(imageFile);
      
      // Prompt spécialisé pour la biodiversité ivoirienne
      const prompt = `
Tu es un expert en biodiversité de Côte d'Ivoire. Analyse cette image et identifie l'espèce présente.

CONTEXTE : Cette photo a été prise en Côte d'Ivoire dans le cadre du projet BioGuard-CI pour sensibiliser les jeunes à la protection de la biodiversité locale.

INSTRUCTIONS :
1. Identifie l'espèce (faune ou flore) avec le maximum de précision
2. Concentre-toi sur les espèces présentes en Côte d'Ivoire
3. Si l'espèce n'est pas ivoirienne, mentionne-le mais fournis quand même les informations
4. Sois éducatif et engageant pour un public jeune

RÉPONDRE STRICTEMENT EN JSON avec cette structure :
{
  "species": "Nom commun en français",
  "scientificName": "Nom scientifique",
  "family": "Famille taxonomique",
  "confidence": 85,
  "description": "Description détaillée et engageante pour des jeunes",
  "ecologicalRole": "Rôle dans l'écosystème ivoirien",
  "conservation": "Commune|Rare|Menacée|En danger critique",
  "dangerLevel": "Inoffensive|Attention|Dangereuse",
  "habitat": "Habitat préféré en Côte d'Ivoire",
  "distribution": "Où on peut la trouver en Côte d'Ivoire",
  "characteristics": ["Caractéristique 1", "Caractéristique 2", "Caractéristique 3"],
  "culturalImportance": "Importance culturelle en Côte d'Ivoire (optionnel)"
}

Si l'image n'est pas claire ou ne contient pas d'espèce identifiable, utilise confidence: 0 et explique pourquoi dans description.
`;

      const result = await model.generateContent([prompt, imageData]);
      const response = await result.response;
      const text = response.text();
      
      // Parser la réponse JSON
      const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
      const identification = JSON.parse(cleanedText) as SpeciesIdentification;
      
      return identification;
      
    } catch (error) {
      console.error('Erreur lors de l\'identification:', error);
      throw new Error('Impossible d\'identifier l\'espèce. Veuillez réessayer.');
    }
  }

  /**
   * Convertit un fichier image en format compatible avec Gemini
   */
  private static async fileToGenerativePart(file: File) {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]);
      };
      reader.readAsDataURL(file);
    });

    return {
      inlineData: {
        data: await base64EncodedDataPromise,
        mimeType: file.type,
      },
    };
  }

  /**
   * Génère des questions de quiz à partir d'une identification
   */
  static async generateQuizQuestions(species: SpeciesIdentification): Promise<Array<{
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>> {
    try {
      const prompt = `
Génère 3 questions de quiz éducatives sur cette espèce de Côte d'Ivoire :
Espèce: ${species.species} (${species.scientificName})

Questions pour des jeunes ivoiriens, format JSON strict :
{
  "questions": [
    {
      "question": "Question claire et engageante",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Explication pédagogique de la bonne réponse"
    }
  ]
}
`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
      const quizData = JSON.parse(cleanedText);
      
      return quizData.questions;
      
    } catch (error) {
      console.error('Erreur génération quiz:', error);
      return [];
    }
  }
}