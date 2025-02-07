import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

interface QuestionAnalysisProps {
  correctAnswers: number;
}

const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({ correctAnswers }) => {
  const totalQuestions = 15;
  const incorrectAnswers = totalQuestions - correctAnswers;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className="border p-4 rounded-md">
      <div className="flex justify-between">
        <h3 className="text-1xl mb-4 font-bold">Question Analysis</h3>
        <p className="font-bold">
          {correctAnswers}/{totalQuestions}
        </p>
      </div>
      <p className="mt-2 w-[90%] mb-2">
        You scored
        <strong>
          {correctAnswers} questions correct out of {totalQuestions}
        </strong>
        . However, it still needs some improvement
      </p>

      <div className=" flex justify-center items-center w-60 h-60 mx-auto my-8">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
