import { FC } from "react";

const Subtitle: FC = ({ children }) => {
  return (
    <h3 className="text-2xl md:text-4xl md:leading-snug mt-9 md:mt-24 font-bold mb-12">
      {children}
    </h3>
  );
};

export { Subtitle };
