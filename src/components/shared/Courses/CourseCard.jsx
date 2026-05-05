"use client";
import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  const { user } = useSession();
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-md transition">
      <div className="relative w-full h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
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
        <Link href={user ? `/all-courses/${course.id}` : "/signin"}>
          <Button className="bg-black mt-2">See Details</Button>
        </Link>
      </div>
    </div>
  );
}
