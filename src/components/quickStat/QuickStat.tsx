import Image from "next/image";
import {Statistics} from "../modal/StatUpdateModal";

interface QuickStatisticsProps {
  statistics: Statistics;
}

const QuickStatistics: React.FC<QuickStatisticsProps> = ({statistics}) => {
  const totalScore = 15;

  const statData = [
    {
      id: 1,
      image: "/trophy-image.svg",
      stat: statistics.rank,
      text: "Your Rank",
    },
    {
      id: 2,
      image: "/percentile-image.svg",
      stat: statistics.percentile,
      text: "Your Percentile",
    },
    {
      id: 3,
      image: "/check-image.svg",
      stat: `${statistics.correctAnswers} / ${totalScore}`,
      text: "Correct Answers",
    },
  ];

  return (
    <div className="border md:p-6 p-2 rounded-md">
      <h3 className="text-1xl mb-4 font-bold">Quick Statistics</h3>
      <div className="flex ">
        {statData.map((field, index) => (
          <div
            className={`flex justify-between gap-2 ${
              index !== statData.length - 1 ? "border-r" : ""
            }`}
            key={field.id}
          >
            <div className="md:p-4 p-2 bg-gray-200 rounded-full md:ml-4 ml-1">
              <Image
                src={field.image}
                width={10}
                height={10}
                alt="trophy"
                className=" md:w-[20px] md:h-[20px] fill-current text-green-600 "
              />
            </div>

            <div className="md:mr-2 mr-1">
              <p className="md:text-1xl text-xs font-bold">{field.stat}</p>
              <p className="uppercase md:text-sm text-[8px]">{field.text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStatistics;
