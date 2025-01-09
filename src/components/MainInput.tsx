import React from "react";

interface MainInputProps {
  inputContainerClassName?: string;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
}

const MainInput = ({
  inputContainerClassName,
  prefixComponent,
  suffixComponent,
  ...inputProps
}: MainInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={`input-container ${inputContainerClassName}`}>
      {prefixComponent}
      <input className="input" {...inputProps} autoComplete="nope" />
      {suffixComponent}
    </div>
  );
};

export default MainInput;
