import React from 'react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <input
            type="number"
            value={value || ''}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              if (!isNaN(val)) {
                onChange(val);
              } else {
                onChange(0);
              }
            }}
            min={min}
            max={max}
            step={step}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {unit}
          </span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value || 0}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="flex-1 h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
        />
      </div>
    </div>
  );
};

export default InputField;