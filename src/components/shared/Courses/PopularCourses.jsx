import CourseCard from "./CourseCard";

const fetchCourses = async () => {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data/courses.json`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

const PopularCourses = async () => {
  const courses = await fetchCourses();
  const popularCourses = courses
    .sort((a, b) => a.rating - b.rating)
    .slice(0, 3);

  return (
    <div>
      <h2 className="font-bold text-3xl my-4 text-center">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
