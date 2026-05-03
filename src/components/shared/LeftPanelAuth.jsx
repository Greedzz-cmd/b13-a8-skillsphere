import React from "react";

const LeftPanelAuth = () => {
  return (
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
  );
};

export default LeftPanelAuth;
