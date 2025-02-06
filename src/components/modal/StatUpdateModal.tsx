"use client";
import {useState} from "react";
import {ArrowRight} from "lucide-react";

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

const Modal: React.FC<ModalProps> = ({statistics, onUpdate, onClose}) => {
  const [updatedStats, setUpdatedStats] = useState(statistics);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const data = [
    {
      id: 1,
      name: "rank",
      label: "Rank",
      errorMsg: "Required | Should be a number",
    },
    {
      id: 2,
      name: "percentile",
      label: "Percentile",
      errorMsg: "Required | Percentile 0-100",
    },
    {
      id: 3,
      name: "correctAnswers",
      label: "Correct Score (out of 15)",
      errorMsg: "Required | Should be a number",
    },
  ];

  const validateField = (name: string, value: number) => {
    let errorMessage = "";

    if (value === null || value === undefined || value === 0) {
      errorMessage =
        data.find((field) => field.name === name)?.errorMsg || "Required";
    } else if (name === "percentile" && (value < 0 || value > 100)) {
      errorMessage = "Percentile must be between 0 and 100";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const numericValue = Number(value);

    setUpdatedStats({
      ...updatedStats,
      [name]: numericValue,
    });

    // Validate in real-time as the user types
    validateField(name, numericValue);
  };

  const handleSubmit = () => {
    let hasError = false;
    const newErrors: {[key: string]: string} = {};

    data.forEach((field) => {
      const value = updatedStats[field.name as keyof Statistics];
      if (
        !value ||
        (field.name === "percentile" && (value < 0 || value > 100))
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-2/5">
        <h3 className="text-xl mb-4 font-semibold">Update Scores</h3>

        {data.map((field) => (
          <div className="mb-4" key={field.id}>
            <div className="flex gap-2 space-y-8">
              <div className="bg-blue-900 w-8 h-8 p-4 flex mt-7 items-center justify-center rounded-full">
                <p className="text-white font-bold">{field.id}</p>
              </div>

              <label className="block mb-2 w-4/5 text-xl">
                Update your <strong>{field.label}</strong>
              </label>
              <input
                type="number"
                name={field.name}
                value={updatedStats[field.name as keyof Statistics]}
                onChange={handleChange}
                className={`border p-3 w-2/5 rounded-md border-blue-400 ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>

            {errors[field.name] && (
              <p className="text-red-500 text-sm flex justify-end">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        <div className="flex justify-end gap-8">
          {" "}
          <button
            onClick={onClose}
            className="border rounded-md border-blue-900 text-blue-900 py-2 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex bg-blue-900 border border-black-600 text-white py-2 px-6 rounded-md mr-2"
          >
            Save
            <ArrowRight className="w-4 h-4 ml-2 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
