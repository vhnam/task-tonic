import { Button as MuiButton } from "@mui/base/Button";
import cn from "@repo/utils/cn";
import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <MuiButton
      className={cn("rounded px-4 py-2 bg-sky-500 hover:bg-sky-700", className)}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
