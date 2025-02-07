'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export interface Statistics {
  rank: number;
  percentile: number;
  correctAnswers: number;
}

interface ModalProps {
  statistics: Statistics;
  onUpdate: (updatedStats: Statistics) => void;
  onClose: () => void;
}

const data = [
  {
    id: 1,
    name: 'rank',
    label: 'Rank',
    errorMsg: 'Required | Should be a number',
  },
  {
    id: 2,
    name: 'percentile',
    label: 'Percentile',
    errorMsg: 'Required | Percentile 0-100',
  },
  {
    id: 3,
    name: 'correctAnswers',
    label: 'Correct Score (out of 15)',
    errorMsg: 'Required | Should be a number',
  },
];

const Modal: React.FC<ModalProps> = ({ statistics, onUpdate, onClose }) => {
  const [updatedStats, setUpdatedStats] = useState(statistics);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: number | '') => {
    let errorMessage = '';
    if (value === null || value === undefined || value === '') {
      errorMessage = data.find((field) => field.name === name)?.errorMsg || 'Required';
    } else if (name === 'percentile' && (value < 0 || value > 100)) {
      errorMessage = 'Percentile must be between 0 and 100';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = value === '' ? '' : Number(value);

    setUpdatedStats({
      ...updatedStats,
      [name]: numericValue,
    });

    validateField(name, numericValue as number);
  };

  const handleSubmit = () => {
    let hasError = false;
    const newErrors: { [key: string]: string } = {};

    data.forEach((field) => {
      const value = updatedStats[field.name as keyof Statistics];
      if (
        value === null ||
        value === undefined ||
        (field.name === 'percentile' && (value < 0 || value > 100))
      ) {
        hasError = true;
        newErrors[field.name] = field.errorMsg;
      }
    });

    setErrors(newErrors);

    if (!hasError) {
      onUpdate(updatedStats);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-md md:w-2/5 w-full ">
        <div className="flex justify-between">
          <h3 className="text-2xl mb-4 font-semibold text-center">Update Scores</h3>
          <Image src="/html-image.png" alt="HTML" width={40} height={10} className="my-2 h-10" />
        </div>

        {data.map((field) => (
          <div className="mb-4 " key={field.id}>
            <div className="flex flex-col md:flex-row md:space-y-4 items-center gap-3">
              <div className="bg-blue-900 w-10 h-10 flex items-center justify-center rounded-full md:mt-6">
                <p className="text-white font-bold">{field.id}</p>
              </div>

              <label className="block w-full md:w-3/5 text-center md:text-left text-lg">
                Update your <strong>{field.label}</strong>
              </label>
              <input
                type="number"
                name={field.name}
                value={updatedStats[field.name as keyof Statistics]}
                onChange={handleChange}
                className={`border p-3 md:w-2/5 rounded-md ${
                  errors[field.name] ? 'border-red-500' : 'border-blue-400'
                }`}
              />
            </div>

            {errors[field.name] && (
              <p className="text-red-500 text-sm text-right mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="border rounded-md border-blue-900 text-blue-900 py-2 px-4"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center bg-blue-900 text-white py-2 px-6 rounded-md"
          >
            Save <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
