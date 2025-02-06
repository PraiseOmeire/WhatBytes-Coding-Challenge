"use client";
import {useState} from "react";
import Modal from "../modal/StatUpdateModal";
import QuickStatistics from "../quickStat/QuickStat";
import ComparisonGraph from "../comparisonGraph/ComparisonGraph";
import SyllabusAnalysis from "../syllabusAnalysis/SyllabusAnalysis";
import QuestionAnalysis from "../questionAnalysis/QuestionAnalysis";
import Image from "next/image";

interface Statistics {
  rank: number;
  percentile: number;
  correctAnswers: number;
}

const SkillTest: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [statistics, setStatistics] = useState({
    rank: 4,
    percentile: 90,
    correctAnswers: 10,
  });

  const handleUpdate = (updatedData: Statistics) => {
    setStatistics((prev) => ({
      ...prev,
      rank: updatedData.rank,
      percentile: updatedData.percentile,
      correctAnswers: Math.min(updatedData.correctAnswers, 15),
    }));

    setModalVisible(false);
  };

  return (
    <div className=" w-full max-w-full">
      <div className="md:flex justify-center md:px-8">
        <div className="flex flex-col p-2 space-y-8 md:w-4/5 w-full">
          <div className="border border-gray-300 md:shadow-lg p-4 md:px-2 rounded-md overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Image
                src="/html-image.png"
                alt="HTML"
                width={70}
                height={79}
                className="my-2 h-16"
              />
              <div className="flex flex-col text-center w-full  md:text-left">
                <h3 className="text-lg md:text-xl font-semibold leading-8">
                  Hyper Text Markup Language
                </h3>
                <p className="text-sm md:text-base">
                  Questions: 08 | Duration: 15mins | Submitted on 5th of June
                  2021
                </p>
              </div>
              <div className="mt-3 w-auto">
                <button
                  onClick={() => setModalVisible(true)}
                  className="bg-blue-900 text-white py-2 px-2 md:px-6 rounded-md font-semibold border border-black-800 w-full md:w-auto"
                >
                  Update
                </button>
              </div>
            </div>
          </div>

          <QuickStatistics statistics={statistics} />

          <ComparisonGraph percentile={statistics.percentile} />
        </div>

        <div className="md:ml-8 md:w-3/5 w-full space-y-8">
          <SyllabusAnalysis />

          <QuestionAnalysis correctAnswers={statistics.correctAnswers} />
        </div>
      </div>
      {modalVisible && (
        <Modal
          statistics={statistics}
          onUpdate={handleUpdate}
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default SkillTest;
