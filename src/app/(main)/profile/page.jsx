const ProfilePage = () => {
  const user = {
    name: "Rakib Khan",
    email: "rakib@email.com",
    image: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      {/* Profile Card */}
      <div className="max-w-md mx-auto bg-base-200 p-8 rounded-2xl shadow-xl text-center mb-10">
        <img
          src={user.image}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary"
        />

        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-400">{user.email}</p>

        <button className="btn btn-primary mt-5 w-full">Update Profile</button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        <div className="bg-base-200 p-6 rounded-xl text-center shadow">
          <h3 className="text-xl font-bold">5</h3>
          <p className="text-gray-400">Courses Enrolled</p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl text-center shadow">
          <h3 className="text-xl font-bold">20h</h3>
          <p className="text-gray-400">Learning Time</p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl text-center shadow">
          <h3 className="text-xl font-bold">2</h3>
          <p className="text-gray-400">Certificates</p>
        </div>
      </div>

      {/* My Courses */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-base-200 rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src="https://via.placeholder.com/300"
                className="rounded-t-xl"
              />

              <div className="p-4">
                <h3 className="font-bold">Web Development</h3>
                <p className="text-sm text-gray-400">Progress: 60%</p>

                <button className="btn btn-sm btn-primary mt-3 w-full">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
