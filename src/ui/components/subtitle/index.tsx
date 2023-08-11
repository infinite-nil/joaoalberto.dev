import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Subtitle({ children }: Props) {
  return (
    <h3 className="mb-4 text-sm font-bold uppercase text-neutral-400">
      {children}
    </h3>
  );
}

export { Subtitle };
