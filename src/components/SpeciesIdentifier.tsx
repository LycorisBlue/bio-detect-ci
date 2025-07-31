// src/components/SpeciesIdentifier.tsx
import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { GeminiSpeciesService, SpeciesIdentification } from '@/services/geminiService';

export const SpeciesIdentifier: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [identification, setIdentification] = useState<SpeciesIdentification | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isUsingCamera, setIsUsingCamera] = useState(false);
    const [stream, setStream] = useState<MediaStream | null>(null);

    // Gérer la sélection de fichier
    const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            await identifySpecies(file);
        }
    };

    // Démarrer la caméra
    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' } // Caméra arrière sur mobile
            });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
                setIsUsingCamera(true);
            }
        } catch (error) {
            setError('Impossible d\'accéder à la caméra');
        }
    };

    // Arrêter la caméra
    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
            setIsUsingCamera(false);
        }
    };

    // Prendre une photo
    const takePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const video = videoRef.current;
            const context = canvas.getContext('2d');

            if (context) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0);

                canvas.toBlob(async (blob) => {
                    if (blob) {
                        const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
                        await identifySpecies(file);
                        stopCamera();
                    }
                }, 'image/jpeg', 0.9);
            }
        }
    };

    // Identifier l'espèce avec Gemini
    const identifySpecies = async (file: File) => {
        setIsLoading(true);
        setError(null);
        setIdentification(null);

        // Afficher l'image sélectionnée
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);

        try {
            const result = await GeminiSpeciesService.identifySpecies(file);
            setIdentification(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
        } finally {
            setIsLoading(false);
        }
    };

    // Obtenir la couleur du badge selon le statut de conservation
    const getConservationColor = (status: string) => {
        switch (status) {
            case 'Commune': return 'bg-green-500';
            case 'Rare': return 'bg-yellow-500';
            case 'Menacée': return 'bg-orange-500';
            case 'En danger critique': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    // Obtenir la couleur selon le niveau de danger
    const getDangerColor = (level: string) => {
        switch (level) {
            case 'Inoffensive': return 'bg-green-500';
            case 'Attention': return 'bg-yellow-500';
            case 'Dangereuse': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            {/* Interface de capture */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Identifie une espèce ivoirienne
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {!isUsingCamera ? (
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={startCamera}
                                className="flex-1 gap-2"
                                size="lg"
                            >
                                <Camera className="h-5 w-5" />
                                Prendre une photo
                            </Button>

                            <Button
                                onClick={() => fileInputRef.current?.click()}
                                variant="outline"
                                className="flex-1 gap-2"
                                size="lg"
                            >
                                <Upload className="h-5 w-5" />
                                Choisir une image
                            </Button>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="hidden"
                            />
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                className="w-full max-w-md mx-auto rounded-lg"
                            />
                            <div className="flex gap-4 justify-center">
                                <Button onClick={takePhoto} size="lg" className="gap-2">
                                    <Camera className="h-5 w-5" />
                                    Capturer
                                </Button>
                                <Button onClick={stopCamera} variant="outline">
                                    Annuler
                                </Button>
                            </div>
                        </div>
                    )}

                    <canvas ref={canvasRef} className="hidden" />
                </CardContent>
            </Card>

            {/* Erreur */}
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {/* Chargement */}
            {isLoading && (
                <Card>
                    <CardContent className="flex items-center justify-center py-8">
                        <div className="text-center space-y-4">
                            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
                            <p className="text-muted-foreground">
                                L'IA analyse votre image...
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Image sélectionnée */}
            {selectedImage && (
                <Card>
                    <CardContent className="pt-6">
                        <img
                            src={selectedImage}
                            alt="Image à analyser"
                            className="w-full max-w-md mx-auto rounded-lg"
                        />
                    </CardContent>
                </Card>
            )}

            {/* Résultats de l'identification */}
            {identification && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>{identification.species}</span>
                            <Badge variant="secondary">
                                {identification.confidence}% de confiance
                            </Badge>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground italic">
                            {identification.scientificName} • {identification.family}
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Badges de statut */}
                        <div className="flex flex-wrap gap-2">
                            <Badge className={`text-white ${getConservationColor(identification.conservation)}`}>
                                {identification.conservation}
                            </Badge>
                            <Badge className={`text-white ${getDangerColor(identification.dangerLevel)}`}>
                                {identification.dangerLevel}
                            </Badge>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="font-semibold mb-2">Description</h3>
                            <p className="text-muted-foreground">{identification.description}</p>
                        </div>

                        {/* Rôle écologique */}
                        <div>
                            <h3 className="font-semibold mb-2">Rôle écologique</h3>
                            <p className="text-muted-foreground">{identification.ecologicalRole}</p>
                        </div>

                        {/* Habitat et distribution */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold mb-2">Habitat</h3>
                                <p className="text-muted-foreground">{identification.habitat}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Distribution en Côte d'Ivoire</h3>
                                <p className="text-muted-foreground">{identification.distribution}</p>
                            </div>
                        </div>

                        {/* Caractéristiques */}
                        <div>
                            <h3 className="font-semibold mb-2">Caractéristiques</h3>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {identification.characteristics.map((char, index) => (
                                    <li key={index}>{char}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Importance culturelle */}
                        {identification.culturalImportance && (
                            <div>
                                <h3 className="font-semibold mb-2">Importance culturelle</h3>
                                <p className="text-muted-foreground">{identification.culturalImportance}</p>
                            </div>
                        )}

                        {/* Action */}
                        <div className="pt-4 border-t">
                            <Button
                                onClick={() => {
                                    setIdentification(null);
                                    setSelectedImage(null);
                                    setError(null);
                                }}
                                className="w-full"
                            >
                                Identifier une nouvelle espèce
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};