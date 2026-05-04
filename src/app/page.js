import PopularCourses from "@/components/shared/Courses/PopularCourses";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Image from "next/image";
import background from "@/../public/background.png";
import LearningTips from "../components/shared/LearningTips";
import TopInstructors from "@/components/shared/TopInstructors";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="relative inset-0">
        <Image
          className="absolute opacity-35 blur-xs z-0"
          src={background}
          fill="true"
          alt="Background"
        ></Image>

        <Hero></Hero>
      </div>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </>
  );
}
