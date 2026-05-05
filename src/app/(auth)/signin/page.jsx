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
      <div className="w-full max-w-95 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
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
            <Input placeholder="Enter Your Email" />
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

        <Button
          onClick={() =>
            authClient.signIn.social({ provider: "google", callbackURL: "/" })
          }
          className="w-full border my-3 bg-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20"
            height="20"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
          Continue with Google
        </Button>

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
