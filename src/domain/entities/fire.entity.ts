export interface Fire {
  id: string;
  latitude: number;
  longitude: number;
  confidence: number;
  brightness: number;
  detectedAt: Date;
  isActive: boolean;
}
