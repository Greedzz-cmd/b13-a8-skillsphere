import Image from "next/image";
import logo from "@/../public/logo_black.png";
import Link from "next/link";

const SignPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_380px_1fr] grid-cols-1 items-center min-h-screen">
        <div className="hidden lg:flex flex-col items-end pr-14 relative">
          <p className="text-3xl leading-snug text-right text-base-content font-light max-w-55">
            Learn at your
            <br />
            <span className="font-semibold">own pace.</span>
          </p>
          <p className="mt-3 text-sm text-neutral-400 text-right">
            Thousands of courses, one platform.
          </p>

          <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-linear-to-b from-transparent via-base-300 to-transparent" />
        </div>

        <fieldset className="fieldset bg-transparent border-base-300 rounded-box w-xs border p-4">
          <div>
            <div className="flex justify-center">
              <Image src={logo} width={70} height={70} alt="logo"></Image>
            </div>
            <h3 className="font-semibold text-lg mb-1 mt-7">Welcome Back</h3>
            <p className="text-sm text-neutral-400 mb-7">Sign In to continue</p>
          </div>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Sign In</button>
          <div className="flex gap-1 justify-center my-4">
            <p className="text-neutral-400">Don&apos;t have an account?</p>
            <Link href="/signup" className="link link-hover font-semibold">
              Sign Up
            </Link>
          </div>
        </fieldset>
        <div>
          {[
            { num: "50K+", label: "students enrolled" },
            { num: "500+", label: "courses available" },
            { num: "4.9★", label: "average rating" },
          ].map(({ num, label }) => (
            <div key={label} className="mb-8">
              <p className="text-3xl font-semibold text-base-content leading-none">
                {num}
              </p>
              <p className="text-xs text-neutral-400 tracking-wide mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignPage;
