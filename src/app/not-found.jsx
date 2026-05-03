import Header from "@/components/shared/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen">
      <Header />
      <div className="relative z-10 w-full flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center text-center px-6">
          {/* Big 404 */}
          <p className="text-[10rem] font-semibold leading-none text-neutral-200 select-none">
            404
          </p>

          {/* Card */}
          <div className="bg-white/70 backdrop-blur-md border border-neutral-200 rounded-2xl px-10 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] -mt-8 max-w-md w-full">
            <h1 className="text-xl font-semibold mb-2">Page not found</h1>
            <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
              Looks like this lesson doesn&apos;t exist yet — or maybe it moved.
              Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="flex-1 bg-black text-white text-sm font-medium px-4 py-2 rounded-xl text-center hover:bg-neutral-700 transition"
              >
                Go home
              </Link>
              <Link
                href="/courses"
                className="flex-1 border border-neutral-300 text-sm font-medium px-4 py-2 rounded-xl text-center hover:bg-neutral-100 transition"
              >
                Browse courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
