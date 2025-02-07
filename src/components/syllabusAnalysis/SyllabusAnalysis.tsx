import clsx from 'clsx';

const syllabusAnalysisData = [
  { title: 'HTML Tools, Forms, History', percentage: 80, color: 'text-blue-500 bg-blue-500' },
  { title: 'Tags and references in HTML', percentage: 60, color: 'text-red-500 bg-red-500' },
  {
    title: 'Tables and references in HTML',
    percentage: 24,
    color: 'text-yellow-400 bg-yellow-400',
  },
  { title: 'Tables and CSS basics', percentage: 96, color: 'text-teal-400 bg-teal-400' },
];

const SyllabusAnalysis = () => {
  return (
    <div className="border p-4 rounded-md mt-2">
      <h3 className="text-xl mb-4 font-bold">Syllabus Wise Analysis</h3>

      {syllabusAnalysisData.map((item) => (
        <div key={item.title} className="mb-6">
          <p>
            {item.title}: {item.percentage}%
          </p>

          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-end">
              <span className={clsx('text-sm font-semibold', item.color.split(' ')[0])}>
                {item.percentage}%
              </span>
            </div>

            <div className="flex mb-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={clsx('h-2 rounded-full', item.color.split(' ')[1])}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
