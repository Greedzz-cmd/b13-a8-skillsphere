import { Button } from "@heroui/react";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-md transition">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-xs text-blue-500 font-medium">
          {course.category}
        </span>
        <h3 className="font-semibold text-lg mt-1">{course.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <span>{course.duration}</span>
          <span>{course.rating}</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
            {course.level}
          </span>
        </div>
        <Button className="bg-black">See Details</Button>
      </div>
    </div>
  );
}
