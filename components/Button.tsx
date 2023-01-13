import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary";
  text?: string;
  icon?: React.ReactNode;
  border?: string;
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  icon,
  border,
  loading,
  fullWidth,
  href,
  ...props
}): JSX.Element => {
  const selectProperButton = (type: "primary" | "secondary"): string => {
    switch (type) {
      case "primary":
        return `${
          fullWidth && "w-full"
        } shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] min-h-[35px] min-w-[100px] text-Inconsolata text-lg text-white bg-purple hover:bg-blue active:bg-peach`;
      case "secondary":
        return `${
          fullWidth && "w-full"
        }  bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] min-h-[35px] min-w-[100px] text-Inconsolata text-lg text-purple hover:text-blue hover:border-peach active:text-peach active:border-peach`;
    }
  };
  return (
    <a href={href}>
      <button
        className={`flex items-center justify-center px-5 
      ${border && "border-[1px] border-purple"} 
      ${selectProperButton(variant)}`}
        disabled={loading ? true : false}
        {...props}
      >
        {icon && icon} {text}
      </button>
    </a>
  );
};

export default Button;
