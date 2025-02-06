const SyllabusAnalysis = () => {
  const data = [
    {title: "HTML Tools", percentage: 80, color: "#36A2EB"},
    {title: "CSS Tools", percentage: 60, color: "#FF6384"},
    {title: "JavaScript", percentage: 45, color: "#FFCD56"},
    {title: "React", percentage: 75, color: "#4BC0C0"},
  ];

  return (
    <div className="border p-4 rounded-md mt-2">
      <h3 className="text-1xl mb-4 font-bold">Syllabus Wise Analysis</h3>

      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <p>
            {item.title}: {item.percentage}%
          </p>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-end">
              <span
                className="text-sm font-semibold"
                style={{color: item.color}}
              >
                {item.percentage}%
              </span>
            </div>
            <div className="flex mb-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
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
