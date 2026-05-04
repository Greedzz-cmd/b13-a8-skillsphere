"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo_black.png";
import {
  Button,
  Form,
  TextField,
  Label,
  Input,
  FieldError,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const SignPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });

    console.log("full error object:", JSON.stringify(error, null, 2));

    if (error) alert(`Sign-in failed: ${JSON.stringify(error)}`);
    if (data) alert("Signed in successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[380px] border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
        <div className="flex justify-center mb-6">
          <Image src={logo} width={70} height={70} alt="logo" />
        </div>
        <h3 className="font-semibold text-lg mb-1">Welcome Back</h3>
        <p className="text-sm text-neutral-400 mb-6">Sign in to continue</p>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(v) =>
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                ? "Please enter a valid email address"
                : null
            }
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(v) => (!v ? "Password is required" : null)}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <div className="flex justify-end -mt-2">
            <Link
              href="/forgot-password"
              className="text-xs text-neutral-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="flex gap-2 mt-2">
            <Button type="submit" className="flex-1 bg-black text-white">
              Sign In
            </Button>
            <Button type="reset" variant="secondary" className="text-black">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex gap-1 justify-center mt-6 text-sm">
          <span className="text-neutral-400">Don&apos;t have an account?</span>
          <Link href="/signup" className="font-semibold hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
