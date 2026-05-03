import React from "react";

const RightPanelAuth = () => {
  return (
    <div className="hidden lg:block pl-14">
      {[
        { num: "50K+", label: "students enrolled" },
        { num: "500+", label: "courses available" },
        { num: "4.9★", label: "average rating" },
      ].map(({ num, label }) => (
        <div key={label} className="mb-8">
          <p className="text-3xl font-semibold leading-none">{num}</p>
          <p className="text-xs text-neutral-400 tracking-wide mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default RightPanelAuth;
