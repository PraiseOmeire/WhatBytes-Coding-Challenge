import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ComparisonGraphProps {
  percentile: number;
}
const ComparisonGraph: React.FC<ComparisonGraphProps> = ({ percentile }) => {
  const averagePercentile = '72%';
  const data = {
    labels: ['0%', '25%', '50%', '75%', '100%'],
    datasets: [
      {
        label: 'Your Percentile',
        data: [0, percentile, percentile, percentile, 100],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="border p-4 rounded-md">
      <h3 className="text-1xl mb-4 font-bold">Comparison Graph</h3>
      <div className="flex">
        <p className="mt-2 md:w-full w-[90%]">
          <strong> You scored {percentile} percentile </strong> which is lower then the average
          percentile {averagePercentile} of all the engineers who took this assessment.
        </p>
        <div className="p-4 bg-gray-200 rounded-full ml-4">
          <Image
            src="/graph-line.svg"
            width={30}
            height={30}
            alt="trophy"
            className=" md:w-10 md:h-10 fill-current text-green-600 "
          />
        </div>
      </div>

      <Line data={data} />
    </div>
  );
};

export default ComparisonGraph;
