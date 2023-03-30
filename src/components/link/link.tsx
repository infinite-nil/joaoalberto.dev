import NativeLink, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

import { HomeIcon } from "../icons/home";
import { BlogIcon } from "../icons/blog";
import { useState } from "react";
import { LabsIcon } from "../icons/labs";

type Icons = "home" | "blog" | "lab";
type Props = LinkProps & {
  icon: Icons;
  children: React.ReactNode;
  href: string;
};

function Link({ ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const linkClassName = twMerge(
    "text-xs flex gap-2 p-2 font-bold items-center justify-center md:text-lg focus:text-emerald-500 hover:text-emerald-500",
    "focusable"
  );

  return (
    <NativeLink
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
      className={linkClassName}
    >
      {props.children}
      {(() => {
        switch (props.icon) {
          case "home":
            return <HomeIcon focused={isFocused} />;
          case "blog":
            return <BlogIcon focused={isFocused} />;
          case "lab":
            return <LabsIcon focused={isFocused} />;
          default:
            return null;
        }
      })()}
    </NativeLink>
  );
}

export { Link };
