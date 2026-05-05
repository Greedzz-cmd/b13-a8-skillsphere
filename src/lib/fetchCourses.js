import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

const coursesFilePath = path.join(process.cwd(), "public", "data", "courses.json");

export async function getCourses() {
  const fileContents = await readFile(coursesFilePath, "utf8");
  return JSON.parse(fileContents);
}

export async function getCourseById(id) {
  const courses = await getCourses();
  const courseId = Number.parseInt(id, 10);

  return courses.find((course) => course.id === courseId) ?? null;
}
