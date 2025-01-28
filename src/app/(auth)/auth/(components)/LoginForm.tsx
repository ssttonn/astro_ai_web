import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import { Lock, Mail } from "lucide-react";
import LoginWithSocialSection from "./LoginWithSocialSection";

interface LoginFormProps {
  onSwitchRegisterMode: () => void;
}

const LoginForm = ({ onSwitchRegisterMode }: LoginFormProps) => {
  return (
    <div className="w-[85%] flex flex-col lg:gap-4 gap-3">
      <h1 className="font-KelsonExtraBold text-3xl lg:text-5xl uppercase text-center">
        Login
      </h1>
      <p className="font-KelsonRegular text-sm lg:text-lg opacity-55 text-center">
        {/* Welcome to AstroAI - Let&apos;s get you started on your journey to the
        future. */}
        Welcome back! Login to your account to continue your journey.
      </p>
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
      <MainButton
        title="Forgot password?"
        className="text-primary bg-transparent self-end !p-0"
      />
      <MainButton title="Login" className="w-full" />
      <LoginWithSocialSection />

      <p className="text-center font-KelsonBold lg:text-lg text-sm">
        Don&apos;t have an account?{" "}
        <MainButton
          className="!p-0 bg-transparent text-primary"
          title="Register"
          onClick={onSwitchRegisterMode}
        />
      </p>
    </div>
  );
};

export default LoginForm;
