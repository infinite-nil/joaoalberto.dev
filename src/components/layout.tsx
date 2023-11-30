import React from "react";

type Props = React.PropsWithChildren;

export function BaseLayout({ children }: Props) {
  return <div className="max-w-[68ch] mx-auto">{children}</div>;
}
