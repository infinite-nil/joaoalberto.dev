import { FC } from "react";

const Paragraph: FC = ({ children }) => {
  return <p className="md:text-xl leading-relaxed text-gray-500">{children}</p>;
};

export { Paragraph };
