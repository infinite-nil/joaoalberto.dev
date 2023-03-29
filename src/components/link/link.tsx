import NativeLink, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

import { HomeIcon } from "../icons/home";
import { BlogIcon } from "../icons/blog";
import { useState } from "react";

type Icons = "home" | "blog";
type Props = LinkProps & {
  icon: Icons;
  children: React.ReactNode;
  href: string;
};

function Link({ ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const linkClassName = twMerge(
    "flex gap-2 p-2 px-4 text-lg font-bold focus:text-indigo-500 hover:text-indigo-500",
    "focusable"
  );

  return (
    <NativeLink
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
      className={linkClassName}
    >
      {(() => {
        switch (props.icon) {
          case "home":
            return <HomeIcon focused={isFocused} />;
          case "blog":
            return <BlogIcon focused={isFocused} />;
          default:
            return null;
        }
      })()}
      {props.children}
    </NativeLink>
  );
}

export { Link };
