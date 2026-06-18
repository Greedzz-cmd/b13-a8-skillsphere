import Image from "next/image";
import { notFound } from "next/navigation";
import { getCourseById } from "@/lib/fetchCourses";

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      {/* Left */}
      <div className="md:col-span-2">
        <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden shadow-md">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {course.title}
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {course.description}
        </p>

        {/* Curriculum */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="font-bold mb-3 text-gray-900 text-lg">Curriculum</h2>
          <ul className="list-disc pl-5 text-gray-700">
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
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-fit">
        <p className="text-2xl font-bold mb-4 text-gray-900">
          ⭐ {course.rating}
        </p>

        <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
          <span>⏱</span> {course.duration}
        </p>

        <p className="text-sm mb-6 text-gray-600 flex items-center gap-2">
          <span>📊</span> Level:{" "}
          <span className="text-gray-900 font-semibold">{course.level}</span>
        </p>

        <div className="border-t border-gray-200 pt-4 mb-4"></div>

        <button className="w-full py-3 px-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
