"use client";

import logoAnimation from "@/assets/animations/logo.json";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import { useCallback, useRef, useState } from "react";
import LoginForm from "./(components)/LoginForm";
import RegisterForm from "./(components)/RegisterForm";
import StoreProvider from "@/app/storeProvider";

enum AuthMode {
  login,
  register,
}

const RegisterPage = () => {
  const [authMode, setAuthMode] = useState(AuthMode.register);
  const divRef = useRef<HTMLDivElement>(null);

  const switchAuthMode = useCallback((authMode: AuthMode) => {
    setAuthMode(authMode);
  }, []);

  const onSwitchLoginMode = useCallback(() => {
    console.log("switching to login");
    switchAuthMode(AuthMode.login);
  }, [switchAuthMode]);

  const onSwitchRegisterMode = useCallback(() => {
    console.log("switching to register");
    switchAuthMode(AuthMode.register);
  }, [switchAuthMode]);

  useGSAP(() => {
    switch (authMode) {
      case AuthMode.login:
        return divRef.current?.scrollTo({
          left: divRef.current.scrollWidth,
          behavior: "smooth",
        });
      case AuthMode.register:
        return divRef.current?.scrollTo({
          left: 0,
          behavior: "smooth",
        });
    }
  }, [authMode]);

  return (
    <StoreProvider>
      <div className="size-screen bg-background flex-col lg:flex-row flex overflow-hidden lg:justify-normal justify-center">
        <div
          ref={divRef}
          className="lg:flex-1 lg:items-center items-start flex lg:shrink-0 flex-row overflow-hidden"
        >
          <div className="w-[100%] shrink-0 items-center lg:justify-center flex">
            <RegisterForm onSwitchLoginMode={onSwitchLoginMode} />
          </div>
          <div className="w-[100%] shrink-0 items-center lg:justify-center flex">
            <LoginForm onSwitchRegisterMode={onSwitchRegisterMode} />
          </div>
        </div>
        <div className="lg:flex-1 w-[50%] lg:self-stretch self-center rounded-common bg-backgroundLight m-6 lg:ml-0 lg:order-last order-first">
          <Lottie animationData={logoAnimation} className="h-full w-full" />
        </div>
      </div>
    </StoreProvider>
  );
};

export default RegisterPage;
