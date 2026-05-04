const CourseDetails = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      {/* Left Content */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-4">Web Development Bootcamp</h1>

        <p className="text-gray-400 mb-6">
          Learn full-stack development from scratch.
        </p>

        {/* Curriculum */}
        <div className="bg-base-200 p-4 rounded-xl">
          <h2 className="font-bold mb-3">Curriculum</h2>
          <ul className="list-disc pl-5">
            <li>Introduction</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-base-200 p-6 rounded-xl shadow h-fit">
        <p className="text-xl font-bold mb-4">⭐ 4.8</p>
        <button className="btn btn-primary w-full">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseDetails;
