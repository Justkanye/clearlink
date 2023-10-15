import { cn } from "@/lib/utils";

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-[14px] bg-blue-700 text-white font-semibold text-base shadow-sm",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
