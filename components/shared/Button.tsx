import { cn } from "@/lib/utils";

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-[14px] bg-blue-700 text-white font-semibold text-base",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};
