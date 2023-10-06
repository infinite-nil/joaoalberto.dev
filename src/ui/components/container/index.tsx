import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  containerStyles?: React.ComponentProps<"div">["className"];
  contentStyles?: React.ComponentProps<"div">["className"];
};

function Container({ children, containerStyles, contentStyles }: Props) {
  const containerClasses = twMerge(["mt-16", containerStyles]);
  const contentClasses = twMerge(["mx-auto px-6 md:max-w-3xl", contentStyles]);

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>{children}</div>
    </div>
  );
}

export { Container };
