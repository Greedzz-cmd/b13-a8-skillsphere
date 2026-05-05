import CourseCard from "@/components/shared/Courses/CourseCard";
import { getCourses } from "@/lib/fetchCourses";

const AllCourses = async () => {
  const courses = await getCourses();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};
export default AllCourses;
