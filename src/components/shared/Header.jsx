"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo_black.png";
import { Button } from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";

import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/all-courses" },
  { label: "My Profile", href: "/profile" },
];

const Header = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
          router.refresh();
        },
      },
    });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = useSession();
  const user = data?.user;

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src={logo} width={40} height={40} alt="logo" />
          SkillSphere
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-600">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="relative inline-block group">
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          {user ? (
            ""
          ) : (
            <>
              <Link href="/signin">
                <Button as={Link} variant="ghost">
                  Sign In
                </Button>
              </Link>
            </>
          )}
          {user ? (
            <Button
              onClick={() => handleSignOut()}
              className="bg-black text-white"
            >
              Sign Out
            </Button>
          ) : (
            <Link href="/signup">
              <Button className="bg-black text-white">Join for Free</Button>
            </Link>
          )}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
            />
          </svg>
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 pt-2 text-gray-600 border-t border-neutral-100">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setIsMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
            Sign In
          </Link>
          <Link
            href="/signup"
            className="font-semibold text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Join for Free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
