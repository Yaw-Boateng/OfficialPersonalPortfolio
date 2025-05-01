import React from 'react';
import { BMICategory } from '../types';
import { getCategoryColor, getCategoryDescription } from '../utils/bmiCalculations';
import BMIScale from './BMIScale';

interface ResultDisplayProps {
  bmi: number;
  category: BMICategory;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ bmi, category }) => {
  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Results</h2>
      
      <BMIScale bmi={bmi} />
      
      {bmi > 0 ? (
        <>
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold mr-2">BMI:</span>
            <span className={`text-3xl font-bold ${getCategoryColor(category)}`}>
              {bmi.toFixed(1)}
            </span>
          </div>
          
          <div className="mb-4">
            <span className="text-gray-700 font-medium">Category: </span>
            <span className={`font-semibold ${getCategoryColor(category)} capitalize`}>
              {category}
            </span>
          </div>
          
          <p className="text-gray-700 mt-4">
            {getCategoryDescription(category)}
          </p>
        </>
      ) : (
        <p className="text-gray-500 italic">
          Enter your height and weight to see your BMI result.
        </p>
      )}
    </div>
  );
};

export default ResultDisplay;