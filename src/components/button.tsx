import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

const Button = ({ variant = "primary", children, ...props }: Props) => {
  const baseStyles =
    "rounded-md py-3 px-5 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = variant === "primary" ? "bg-[#8B5CF6]" : "bg-[#71717A]";

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export { Button };
