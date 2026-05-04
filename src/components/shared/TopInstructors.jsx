const TopInstructors = () => {
  return (
    <div className="py-12 px-6 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        🏆 Top Instructors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Instructor 1 */}
        <div
          className="bg-base-200 p-6 rounded-2xl shadow-md text-center 
                        hover:shadow-xl hover:-translate-y-1 transition"
        >
          <img
            src="https://i.pravatar.cc/150?img=11"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary"
          />
          <h3 className="font-bold text-lg">John Doe</h3>
          <p className="text-sm text-gray-400">Web Development</p>
        </div>

        {/* Instructor 2 */}
        <div
          className="bg-base-200 p-6 rounded-2xl shadow-md text-center 
                        hover:shadow-xl hover:-translate-y-1 transition"
        >
          <img
            src="https://i.pravatar.cc/150?img=32"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary"
          />
          <h3 className="font-bold text-lg">Jane Smith</h3>
          <p className="text-sm text-gray-400">UI/UX Design</p>
        </div>

        {/* Instructor 3 */}
        <div
          className="bg-base-200 p-6 rounded-2xl shadow-md text-center 
                        hover:shadow-xl hover:-translate-y-1 transition"
        >
          <img
            src="https://i.pravatar.cc/150?img=45"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary"
          />
          <h3 className="font-bold text-lg">Michael Lee</h3>
          <p className="text-sm text-gray-400">Digital Marketing</p>
        </div>

        {/* Instructor 4 */}
        <div
          className="bg-base-200 p-6 rounded-2xl shadow-md text-center 
                        hover:shadow-xl hover:-translate-y-1 transition"
        >
          <img
            src="https://i.pravatar.cc/150?img=28"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary"
          />
          <h3 className="font-bold text-lg">Sarah Johnson</h3>
          <p className="text-sm text-gray-400">React Development</p>
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
