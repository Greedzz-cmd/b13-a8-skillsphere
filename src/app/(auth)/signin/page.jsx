"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo_black.png";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const SignPage = () => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    setFields((p) => ({ ...p, [key]: e.target.value }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.email))
      errs.email = "Please enter a valid email address";
    if (!fields.password) errs.password = "Password is required";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const { data, error } = await authClient.signIn.email({
      email: fields.email,
      password: fields.password,
      callbackURL: "http://localhost:3000/profile",
    });

    if (error) alert(`Sign-in failed: ${JSON.stringify(error)}`);
    if (data) alert("Signed in successfully!");
  };

  const inputClass = (key) =>
    `w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-400 ${
      errors[key] ? "border-red-400" : "border-neutral-300"
    }`;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_380px_1fr] grid-cols-1 items-center min-h-screen">
        <div className="hidden lg:flex flex-col items-end pr-14 relative">
          <p className="text-3xl leading-snug text-right font-light max-w-[220px]">
            Learn at your
            <br />
            <span className="font-semibold">own pace.</span>
          </p>
          <p className="mt-3 text-sm text-neutral-400 text-right">
            Thousands of courses, one platform.
          </p>
          <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
        </div>

        <div className="w-full max-w-[380px] border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
          <div className="flex justify-center mb-6">
            <Image src={logo} width={70} height={70} alt="logo" />
          </div>
          <h3 className="font-semibold text-lg mb-1">Welcome Back</h3>
          <p className="text-sm text-neutral-400 mb-6">Sign in to continue</p>

          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className={inputClass("email")}
                value={fields.email}
                onChange={set("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className={inputClass("password")}
                value={fields.password}
                onChange={set("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
              <div className="flex justify-end mt-1">
                <Link
                  href="/forgot-password"
                  className="text-xs text-neutral-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full bg-black text-white mt-2">
              Sign In
            </Button>
          </form>

          <div className="flex gap-1 justify-center mt-6 text-sm">
            <span className="text-neutral-400">
              Don&apos;t have an account?
            </span>
            <Link href="/signup" className="font-semibold hover:underline">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="hidden lg:block pl-14">
          {[
            { num: "50K+", label: "students enrolled" },
            { num: "500+", label: "courses available" },
            { num: "4.9★", label: "average rating" },
          ].map(({ num, label }) => (
            <div key={label} className="mb-8">
              <p className="text-3xl font-semibold leading-none">{num}</p>
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
