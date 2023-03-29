import { twMerge } from "tailwind-merge";

type Props = JSX.IntrinsicElements["h1"] & {
  children: string;
};

function Title({ children, className, ...props }: Props) {
  const classNames = twMerge("text-4xl font-semibold my-8", className);

  return (
    <h1 className={classNames} {...props}>
      {children}
    </h1>
  );
}

export { Title };
