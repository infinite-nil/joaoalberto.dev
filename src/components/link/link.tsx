import NativeLink, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

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
    <motion.a
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      as={NativeLink}
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
    </motion.a>
  );
}

export { Link };
