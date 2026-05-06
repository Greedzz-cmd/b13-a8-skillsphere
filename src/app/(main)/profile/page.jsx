import Link from "next/link";
import Image from "next/image";
import { requireSession } from "@/lib/session";

export const metadata = {
  title: "My Profile | SkillSphere",
};

function ProfileAvatar({ user }) {
  if (user.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <Image
        width={96}
        height={96}
        src={user.image}
        alt={user.name ?? user.email}
        className="h-24 w-24 rounded-full object-cover border"
      ></Image>
    );
  }

  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
      {(user.name ?? user.email).slice(0, 1).toUpperCase()}
    </div>
  );
}

export default async function ProfilePage() {
  const session = await requireSession("/signin");
  const user = session.user;

  const infoCards = [
    { label: "Name", value: user.name || "No name added" },
    { label: "Email", value: user.email },
    { label: "Email Verified", value: user.emailVerified ? "Yes" : "No" },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <ProfileAvatar user={user} />
            <div>
              <p className="text-sm text-gray-500">My Profile</p>
              <h1 className="text-3xl font-bold text-gray-900">
                {user.name || "SkillSphere Student"}
              </h1>
              <p className="text-sm text-gray-600 mt-1">{user.email}</p>
            </div>
          </div>

          <Link
            href="/all-courses"
            className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Browse Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {infoCards.map((item) => (
            <div key={item.label} className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-2 font-semibold text-gray-900 break-words">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border rounded-lg p-5">
          <h2 className="text-xl font-semibold text-gray-900">
            About this account
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-7">
            This page shows the information of the currently logged-in user.
            Students can use this route to check their account details before
            exploring protected course pages.
          </p>
        </div>
      </div>
    </section>
  );
}
