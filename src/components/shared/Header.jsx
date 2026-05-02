import Link from "next/link";
import logo from "@/../public/logo_black.png";
import Image from "next/image";

const Header = () => {
  const links = (
    <>
      <Link href="/" className="relative inline-block group cursor-pointer">
        Home
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
        href="/courses"
        className="relative inline-block group cursor-pointer "
      >
        Courses
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
        href="/profile"
        className="relative inline-block group cursor-pointer"
      >
        My Profile
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={logo} width={40} height={40} alt="logo"></Image>
          <p>SkillSphere</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 text-gray-600">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <Link href="/signin" className="btn btn-ghost ">
          Sign In
        </Link>
        <Link href="/signup" className="btn text-white bg-black rounded-lg">
          Join for Free
        </Link>
      </div>
    </div>
  );
};

export default Header;
