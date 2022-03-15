import { FC } from "react";

const Title: FC = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-5xl md:leading-snug mt-9 md:mt-24 font-bold mb-24">
      {children}
    </h1>
  );
};

export { Title };
