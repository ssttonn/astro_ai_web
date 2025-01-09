"use client";
import React, { useMemo, useRef, useState } from "react";
import AI1Animation from "@/assets/animations/ai_1.json";
import AI2Animation from "@/assets/animations/ai_2.json";
import AI3Animation from "@/assets/animations/ai_3.json";
import OnboardingSegment, {
  OnboardingSegmentProps,
} from "./(components)/OnboardingSegment";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import Routes from "@/constants/routes";

const OnboardingPage = () => {
  const [currentSegment, setCurrentSegment] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onboardingData = useMemo<OnboardingSegmentProps[]>(
    () => [
      {
        id: "onboarding-0",
        animationData: AI1Animation,
        title: "Welcome to the Future",
        description:
          "Experience the power of AI-driven solutions designed to simplify your world.",
        buttonTitle: "Next",
      },
      {
        id: "onboarding-1",
        animationData: AI2Animation,
        title: "Powered by Intelligence",
        description:
          "Tap into cutting-edge AI technology to enhance your productivity and decision-making.",
        buttonTitle: "Next",
      },
      {
        id: "onboarding-2",
        animationData: AI3Animation,
        title: "Your AI Assistant Awaits",
        description:
          "Let advanced algorithms work for you—delivering personalized insights and assistance.",
        buttonTitle: "Get Started",
      },
    ],
    []
  );

  useGSAP(() => {
    // Animation for correct segment here
    console.log("Current segment:", currentSegment);
    divRef.current?.scrollTo({
      left: currentSegment * window.innerWidth,
      behavior: "smooth",
    });
  }, [currentSegment]);

  return (
    <div ref={divRef} className="size-screen overflow-hidden flex flex-row">
      {onboardingData.map((data, index) => (
        <OnboardingSegment
          key={index}
          {...data}
          className="shrink-0"
          onButtonClick={() => {
            if (currentSegment < onboardingData.length - 1) {
              setCurrentSegment(currentSegment + 1);
            } else {
              // Navigate to the next page
              console.log("Navigate to the next page");
              router.push(Routes.register);
            }
          }}
        />
      ))}
    </div>
  );
};

export default OnboardingPage;
