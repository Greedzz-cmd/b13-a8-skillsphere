const tips = [
  {
    id: 1,
    title: "Study Techniques",
    description:
      "Use active recall, spaced repetition, and practice projects to learn faster.",
  },
  {
    id: 2,
    title: "Time Management",
    description:
      "Use the Pomodoro technique and break tasks into smaller chunks.",
  },
  {
    id: 3,
    title: "Goal Setting",
    description:
      "Set clear goals and track your daily progress to stay consistent.",
  },
];

const LearningTips = () => {
  return (
    <div className="py-12 px-6 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">Learning Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tips.map(({ id, title, description }) => (
          <div
            key={id}
            className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningTips;
