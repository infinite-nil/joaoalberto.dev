import { twMerge } from "tailwind-merge";

type Props = JSX.IntrinsicElements["p"] & {
  children: string;
};

function BaseText({ children, className = "", ...props }: Props) {
  const classNames = twMerge(
    "text-base font-medium text-neutral-900 max-w-[36ch] mb-4 mt-8",
    className
  );

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
}

export { BaseText };
