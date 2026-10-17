export type Language = 'fa' | 'en';

export interface RiceVariety {
  id: string;
  nameFa: string;
  nameEn: string;
  type: 'local_quality' | 'high_yield' | 'southern_warm';
  regionFa: string;
  regionEn: string;
  growthDays: number; // e.g. 120-135
  plantHeightCm: number; // e.g. 125
  rawLengthMm: number; // e.g. 7.4
  cookedLengthMm: number; // e.g. 14.2
  aromaScore: 1 | 2 | 3 | 4 | 5; // 5 = strongest
  paddyYieldKgPerHa: { min: number; max: number };
  blastResistance: 'low' | 'moderate' | 'high';
  stemBorerResistance: 'low' | 'moderate' | 'high';
  lodgingResistance: 'low' | 'moderate' | 'high'; // ورس / خوابیدگی
  featuresFa: string[];
  featuresEn: string[];
  optimalSoilFa: string;
  optimalSoilEn: string;
}

export interface DiseasePest {
  id: string;
  nameFa: string;
  nameEn: string;
  scientificName: string;
  category: 'fungal' | 'bacterial' | 'insect' | 'weed' | 'nematode';
  affectedParts: ('leaf' | 'stem' | 'neck' | 'sheath' | 'panicle' | 'root')[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  symptomsFa: string[];
  symptomsEn: string[];
  favorableConditionsFa: string;
  favorableConditionsEn: string;
  preventionFa: string[];
  preventionEn: string[];
  chemicalControlFa: string[];
  chemicalControlEn: string[];
  biologicalControlFa?: string[];
  biologicalControlEn?: string[];
}

export interface CropStage {
  id: string;
  stepNumber: number;
  titleFa: string;
  titleEn: string;
  jalaliMonthFa: string;
  jalaliMonthEn: string;
  durationDays: string;
  waterDepthCm: string;
  summaryFa: string;
  summaryEn: string;
  criticalTasksFa: string[];
  criticalTasksEn: string[];
  fertilizerTipsFa: string;
  fertilizerTipsEn: string;
  warningAlertFa: string;
  warningAlertEn: string;
}

export interface FarmRecord {
  id: string;
  date: string;
  fieldTitle: string;
  variety: string;
  areaHa: number;
  stage: string;
  notes: string;
  sprayHistory?: string;
  fertilizerUsed?: string;
}
