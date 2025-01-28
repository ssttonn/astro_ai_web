import MainButton from "@/components/MainButton";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginWithSocialSection = () => {
  return (
    <div className="flex flex-row gap-2 w-full flex-wrap">
      <MainButton className="flex-1 flex-row flex items-center justify-center gap-4 bg-white text-background p-4">
        <FcGoogle className="text-2xl" />
        <span className="font-KelsonBold">Google</span>
      </MainButton>
      <MainButton className="flex-1 flex-row flex items-center justify-center gap-4 !bg-[#1877F2] text-background p-4">
        <FaFacebook className="text-2xl text-white" />
        <span className="font-KelsonBold text-white">Facebook</span>
      </MainButton>
    </div>
  );
};

export default LoginWithSocialSection;
