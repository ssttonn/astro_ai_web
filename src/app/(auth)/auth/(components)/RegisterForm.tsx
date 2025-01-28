import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import { IdCard, Lock, Mail, User } from "lucide-react";
import { memo } from "react";
import LoginWithSocialSection from "./LoginWithSocialSection";

export interface RegisterFormProps {
  onSwitchLoginMode: () => void;
}

const RegisterForm = ({ onSwitchLoginMode }: RegisterFormProps) => {
  return (
    <div className="w-[85%] flex flex-col lg:gap-4 gap-3">
      <h1 className="font-KelsonExtraBold text-3xl lg:text-5xl uppercase text-center">
        Register
      </h1>
      <p className="font-KelsonRegular text-sm lg:text-lg opacity-55 text-center">
        Welcome to AstroAI - Let&apos;s get you started on your journey to the
        future.
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
      <LoginWithSocialSection />
      <p className="text-center font-KelsonBold lg:text-lg text-sm">
        Already have an account?{" "}
        <MainButton
          className="!p-0 bg-transparent text-primary"
          title="Login"
          onClick={onSwitchLoginMode}
        />
      </p>
    </div>
  );
};

export default memo(RegisterForm);
