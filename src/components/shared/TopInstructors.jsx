import Image from "next/image";

const instructors = [
  { id: 11, name: "John Doe", specialty: "Web Development" },
  { id: 32, name: "Jane Smith", specialty: "UI/UX Design" },
  { id: 45, name: "Michael Lee", specialty: "Digital Marketing" },
  { id: 28, name: "Sarah Johnson", specialty: "React Development" },
];

const TopInstructors = () => {
  return (
    <div className="py-12 px-6 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        🏆 Top Instructors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {instructors.map(({ id, name, specialty }) => (
          <div
            key={id}
            className="bg-base-200 p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Image
              src={`https://i.pravatar.cc/150?img=${id}`}
              alt={name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4 border-4 border-primary"
            />
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-400">{specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
