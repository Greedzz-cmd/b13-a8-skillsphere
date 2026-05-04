import CourseCard from "@/components/shared/Courses/CourseCard";

const fetchCourses = async () => {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data/courses.json`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

const AllCourses = async () => {
  const courses = await fetchCourses();

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
