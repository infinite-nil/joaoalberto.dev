import { twMerge } from "tailwind-merge";

type Props = JSX.IntrinsicElements["h1"] & {
  children: string;
};

function Subtitle({ children, className, ...props }: Props) {
  const classNames = twMerge("text-2xl font-semibold my-8", className);

  return (
    <h2 className={classNames} {...props}>
      {children}
    </h2>
  );
}

export { Subtitle };
