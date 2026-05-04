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
    <div className="grid grid-cols-3 gap-5 py-10">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
export default AllCourses;
