import NativeLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren<
  {
    className?: string;
    external?: boolean;
    decorated?: boolean;
  } & LinkProps
>;

function Link({ children, className, external, decorated, ...props }: Props) {
  const classes = twMerge([
    "font-bold hover:text-[var(--link-text-hover)] decoration-[var(--link-decoration)] decoration-4 underline-offset-2",
    decorated ? "underline decoration-wavy" : "",
    className,
  ]);

  return (
    <NativeLink
      {...props}
      className={classes}
      target={external ? "_blank" : "_self"}
    >
      {children}
    </NativeLink>
  );
}

export { Link };
