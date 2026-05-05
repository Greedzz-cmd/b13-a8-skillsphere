"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo_black.png";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      password: userData.password,
      callbackURL: "http://localhost:3000/profile",
    });

    console.log("full error object:", JSON.stringify(error, null, 2));

    if (error) alert(`Sign-up failed: ${JSON.stringify(error)}`);
    if (data)
      alert(
        "Sign-up successful! Please check your email to verify your account.",
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[380px] border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
        <div className="flex justify-center mb-6">
          <Image src={logo} width={70} height={70} alt="logo" />
        </div>
        <h3 className="font-semibold text-lg mb-1">Create an account</h3>
        <p className="text-sm text-neutral-400 mb-6">Start learning today</p>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex gap-3">
            <TextField
              isRequired
              name="firstName"
              validate={(v) => (v.length < 3 ? "At least 3 characters" : null)}
              className=""
            >
              <Label>First Name</Label>
              <Input className="w-40" placeholder="First Name" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="lastName"
              validate={(v) => (v.length < 3 ? "At least 3 characters" : null)}
              className=""
            >
              <Label>Last Name</Label>
              <Input className="w-40" placeholder="Last Name" />
              <FieldError />
            </TextField>
          </div>

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
            validate={(v) => {
              if (v.length < 8) return "Must be at least 8 characters";
              if (!/[A-Z]/.test(v)) return "Must contain an uppercase letter";
              if (!/[0-9]/.test(v)) return "Must contain a number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              At least 8 characters, 1 uppercase, 1 number
            </Description>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            validate={(v) => {
              if (v.length < 8) return "Must be at least 8 characters";
              if (!/[A-Z]/.test(v)) return "Must contain an uppercase letter";
              if (!/[0-9]/.test(v)) return "Must contain a number";
              return null;
            }}
          >
            <Label>Confirm Password</Label>
            <Input placeholder="Re-enter your password" />
            <FieldError />
          </TextField>

          <div className="flex gap-2 mt-2">
            <Button type="submit" className="flex-1 bg-black">
              <Check />
              Sign Up
            </Button>
            <Button type="reset" variant="secondary" className="text-black">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex gap-1 justify-center mt-6 text-sm">
          <span className="text-neutral-400">Already have an account?</span>
          <Link href="/signin" className="font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
