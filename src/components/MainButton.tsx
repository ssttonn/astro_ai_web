import gsap from "gsap";
import React, { memo, MouseEventHandler, useCallback, useRef } from "react";

interface MainButtonProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const MainButton = ({
  title,
  children,
  className,
  onClick,
}: MainButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }
      );

      e.stopPropagation();

      onClick?.(e);
    },
    [onClick]
  );

  return (
    <button
      ref={buttonRef}
      onClick={onButtonClick}
      className={`bg-primary font-KelsonBold p-4 rounded-common hover:opacity-80 transition-all duration-200 ${className}`}
    >
      {title || children}
    </button>
  );
};

export default memo(MainButton);
