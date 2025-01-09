"use client";

import logoAnimation from "@/assets/animations/logo.json";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import Lottie from "lottie-react";
import { IdCard, Lock, Mail, User } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  return (
    <div className="size-screen bg-background flex-col lg:flex-row flex justify-center overflow-auto">
      <div className="lg:flex-1 justify-center items-center flex">
        <div className="w-[85%] flex flex-col lg:gap-4 gap-3">
          <h1 className="font-KelsonExtraBold text-3xl lg:text-5xl uppercase text-center">
            Register
          </h1>
          <p className="font-KelsonRegular text-sm lg:text-lg opacity-55 text-center">
            Welcome to AstroAI - Let&apos;s get you started on your journey to
            the future.
          </p>
          <div className="flex flex-row lg:gap-4 gap-3">
            <MainInput
              type="text"
              placeholder="First name"
              inputContainerClassName="flex-1"
              prefixComponent={<IdCard />}
              required
            />

            <MainInput
              type="text"
              placeholder="Last name"
              inputContainerClassName="flex-1"
              prefixComponent={<IdCard />}
              required
            />
          </div>
          <MainInput
            type="text"
            placeholder="Username"
            prefixComponent={<User />}
            required
          />
          <MainInput
            type="email"
            placeholder="Email"
            prefixComponent={<Mail />}
            required
          />

          <MainInput
            type="password"
            placeholder="Password"
            prefixComponent={<Lock />}
            required
          />
          <MainButton title="Register" className="w-full" />
          <div className="flex flex-row gap-2 w-full flex-wrap">
            <MainButton className="flex-1 flex-row flex items-center justify-center gap-4 bg-white text-background p-4">
              <FcGoogle className="text-2xl" />
              <span className="font-KelsonBold">Google</span>
            </MainButton>
            <MainButton className="flex-1 flex-row flex items-center justify-center gap-4 bg-[#1877F2] text-background p-4">
              <FaFacebook className="text-2xl text-white" />
              <span className="font-KelsonBold text-white">Facebook</span>
            </MainButton>
          </div>
          <p className="text-center font-KelsonBold lg:text-lg text-sm">
            Already have an account?{" "}
            <MainButton
              className="p-0 bg-transparent text-primary"
              title="Login"
            />
          </p>
        </div>
      </div>
      <div className="lg:flex-1 w-[50%] lg:self-stretch self-center rounded-common bg-backgroundLight m-6 lg:ml-0 lg:order-last order-first">
        <Lottie animationData={logoAnimation} className="h-full w-full" />
      </div>
    </div>
  );
};

export default RegisterPage;
