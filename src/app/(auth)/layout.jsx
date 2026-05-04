import LeftPanelAuth from "@/components/shared/LeftPanelAuth";
import RightPanelAuth from "@/components/shared/RightPanelAuth";
import Image from "next/image";
import background from "@/../public/background.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative">
      <Image
        className="absolute opacity-35 blur-xs z-0"
        src={background}
        fill="true"
        alt="Background"
      ></Image>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_380px_1fr] grid-cols-1 items-center min-h-screen">
        <LeftPanelAuth></LeftPanelAuth>
        {children}
        <RightPanelAuth></RightPanelAuth>
      </div>
    </div>
  );
};

export default AuthLayout;
