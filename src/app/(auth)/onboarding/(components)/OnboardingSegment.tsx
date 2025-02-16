import MainButton from "@/components/MainButton";
import dynamic from "next/dynamic";
import { memo } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export interface OnboardingSegmentProps {
  id?: string;
  className?: string;
  animationData: unknown;
  title: string;
  description: string;
  buttonTitle: string;
  onButtonClick?: () => void;
}

const OnboardingSegment = ({
  id,
  className,
  animationData,
  title,
  description,
  buttonTitle,
  onButtonClick,
}: OnboardingSegmentProps) => {
  return (
    <div
      id={id}
      className={`flex size-full lg:flex-row flex-col items-stretch justify-center gap-4 p-4 ${className}`}
    >
      <div className="flex-1 bg-backgroundLight rounded-common p-4">
        <Lottie
          className="size-full"
          animationData={animationData}
          loop={true}
        />
      </div>
      <div className="shrink-0 lg:flex-1 flex-col lg:p-4 p-4 flex justify-start lg:justify-center items-center gap-4">
        <h1 className="font-KelsonBold text-3xl text-center text-foreground">
          {title}
        </h1>
        <p className="text-lg font-KelsonRegular opacity-55 text-center text-foreground">
          {description}
        </p>
        <MainButton
          title={buttonTitle}
          className="uppercase w-full"
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default memo(OnboardingSegment);
