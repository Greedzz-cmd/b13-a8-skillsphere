const LearningTips = () => {
  return (
    <div className="py-12 px-6 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">📌 Learning Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div
          className="bg-base-200 p-6 rounded-2xl shadow-md 
                        hover:shadow-xl hover:-translate-y-1 transition text-center"
        >
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">Study Techniques</h3>
          <p className="text-gray-400 text-sm">
            Use active recall, spaced repetition, and practice projects to learn
            faster.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-base-200 p-6 rounded-2xl shadow-md 
                        hover:shadow-xl hover:-translate-y-1 transition text-center"
        >
          <div className="text-4xl mb-4">⏱</div>
          <h3 className="text-xl font-semibold mb-2">Time Management</h3>
          <p className="text-gray-400 text-sm">
            Use the Pomodoro technique and break tasks into smaller chunks.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-base-200 p-6 rounded-2xl shadow-md 
                        hover:shadow-xl hover:-translate-y-1 transition text-center"
        >
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2">Goal Setting</h3>
          <p className="text-gray-400 text-sm">
            Set clear goals and track your daily progress to stay consistent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningTips;
