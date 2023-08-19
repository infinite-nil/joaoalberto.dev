import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function Subtitle({ children, className }: Props) {
  const classes = cn([
    "mb-4 text-sm font-bold uppercase text-neutral-400",
    className,
  ]);

  return <h3 className={classes}>{children}</h3>;
}

export { Subtitle };
