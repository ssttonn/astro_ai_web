"use client";
import MainButton from "@/components/MainButton";
import Lottie from "lottie-react";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdTravelExplore } from "react-icons/md";
import logoAnimation from "@/assets/animations/logo.json";

const HomePage = () => {
  return (
    <div className="size-screen flex flex-col lg:p-4 p-2 lg:gap-4 gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Lottie animationData={logoAnimation} className="size-10" />
          <h1 className="font-KelsonExtraBold">AstroAI</h1>
        </div>
      </div>
      <div className="flex items-start flex-1 lg:gap-4 gap-2">
        <div className="rounded-common bg-backgroundLight lg:p-4 p-2 flex lg:flex-col flex-row lg:gap-4 gap-2">
          <MainButton className="rounded-full !bg-background">
            <BiHome className="size-5" />
          </MainButton>
          <MainButton className="rounded-full !bg-background">
            <MdTravelExplore className="size-5" />
          </MainButton>
          <MainButton className="rounded-full !bg-background">
            <CgProfile className="size-5" />
          </MainButton>
        </div>
        <div className="rounded-common bg-backgroundLight flex-1 self-stretch">
          dsa
        </div>
      </div>
    </div>
  );
};

export default HomePage;
