import { notFound } from "next/navigation";

const fetchCourses = async () => {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data/courses.json`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const courses = await fetchCourses();

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    notFound();
  }

  return (
    <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      {/* Left */}
      <div className="md:col-span-2">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

        <p className="text-gray-400 mb-6">{course.description}</p>

        {/* Curriculum */}
        <div className="bg-base-200 p-4 rounded-xl">
          <h2 className="font-bold mb-3">Curriculum</h2>
          <ul className="list-disc pl-5">
            {course.curriculum?.length > 0 ? (
              course.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <>
                <li>Introduction</li>
                <li>Core Concepts</li>
                <li>Hands-on Project</li>
                <li>Final Assignment</li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Right */}
      <div className="bg-base-200 p-6 rounded-xl shadow h-fit">
        <p className="text-xl font-bold mb-2">⭐ {course.rating}</p>

        <p className="text-sm text-gray-400 mb-2">{course.duration}</p>

        <p className="text-sm mb-4">Level: {course.level}</p>

        <button className="btn btn-primary w-full">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseDetails;
