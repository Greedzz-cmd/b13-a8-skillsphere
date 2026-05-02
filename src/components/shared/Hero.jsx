const Hero = () => {
  return (
    <section className=" py-24 text-center px-4">
      <p className="text-sm text-[#ccbe8e] font-medium mb-3 bg-[#f1f3e7] rounded-full badge">
        PREMIUM LEARNING PLATFORM
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Upgrade Your Skills <br />
        With <span className="text-[#C77A52]">Confidence</span>
      </h1>

      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Learn Web Development, Design, and Marketing from industry experts at
        your own pace.
      </p>

      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <button className="btn rounded-full bg-black text-white">
          Start Learning
        </button>

        <button className="btn btn-ghost rounded-full">Explore Courses</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-16">
        <div>
          <h2 className="text-xl font-bold">10k+</h2>
          <p className="text-gray-500 text-sm">Students</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">500+</h2>
          <p className="text-gray-500 text-sm">Courses</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">4.9/5</h2>
          <p className="text-gray-500 text-sm">Rating</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">24/7</h2>
          <p className="text-gray-500 text-sm">Support</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
