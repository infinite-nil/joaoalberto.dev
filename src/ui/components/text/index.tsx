import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
  small?: boolean;
  big?: boolean;
};

function Text({ children, className, small = false, big = false }: Props) {
  const classes = twMerge([
    "mb-[1.8rem] max-w-[36ch] text-xl font-semibold text-neutral-700",
    small && "text-base",
    big && "text-3xl",
    big && "font-bold",
    big && "leading-snug",
    className,
  ]);
  return <p className={classes}>{children}</p>;
}

export { Text };
