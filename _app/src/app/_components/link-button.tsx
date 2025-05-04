import { ButtonStyles } from "@/lib/constants";
import { LinkButtonProps } from "@/lib/types";
import cn from "classnames";
import Link from "next/link";

export const LinkButton = ({
  href,
  children,
  variant = "button",
  colors = "primary",
  subvariant = "solid",
  className,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        variant === "button" && ButtonStyles.baseStyles,
        ButtonStyles.variantStyles[variant],
        variant === "button" ? ButtonStyles.subvariantStyles[subvariant] : "",
        variant === "button"
          ? ButtonStyles.colorStyles[colors][subvariant]
          : "",
        className
      )}
    >
      {children}
    </Link>
  );
};
