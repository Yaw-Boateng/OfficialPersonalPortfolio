import { BMICategory, BMIResult } from '../types';

export const calculateBMI = (
  height: number,
  weight: number,
  unit: 'metric' | 'imperial'
): BMIResult => {
  let bmi = 0;
  
  if (height <= 0 || weight <= 0) {
    return { bmi: 0, category: null };
  }

  if (unit === 'metric') {
    // BMI = weight(kg) / height(m)²
    bmi = weight / Math.pow(height / 100, 2);
  } else {
    // BMI = 703 × weight(lb) / height(in)²
    bmi = (703 * weight) / Math.pow(height, 2);
  }

  return {
    bmi: parseFloat(bmi.toFixed(1)),
    category: getBMICategory(bmi),
  };
};

export const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  if (bmi >= 30) return 'obese';
  return null;
};

export const getCategoryDescription = (category: BMICategory): string => {
  switch (category) {
    case 'underweight':
      return 'You are underweight. Consider consulting a healthcare provider about healthy weight gain strategies.';
    case 'normal':
      return 'Your BMI is within the healthy range. Maintain a balanced diet and regular physical activity.';
    case 'overweight':
      return 'You are overweight. Consider adopting a healthier lifestyle with improved diet and increased physical activity.';
    case 'obese':
      return 'You are in the obese category. It is recommended to consult a healthcare provider for guidance on weight management.';
    default:
      return 'Enter your height and weight to calculate your BMI.';
  }
};

export const getCategoryColor = (category: BMICategory): string => {
  switch (category) {
    case 'underweight':
      return 'text-amber-500';
    case 'normal':
      return 'text-emerald-500';
    case 'overweight':
      return 'text-amber-600';
    case 'obese':
      return 'text-rose-500';
    default:
      return 'text-gray-700';
  }
};

export const getScalePositionPercentage = (bmi: number): number => {
  if (bmi <= 0) return 0;
  
  // Scale from 10 to 40 BMI
  const minBMI = 10;
  const maxBMI = 40;
  const clampedBMI = Math.max(minBMI, Math.min(maxBMI, bmi));
  
  return ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 100;
};