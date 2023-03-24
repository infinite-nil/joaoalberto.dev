type Props = JSX.IntrinsicElements["p"] & {
  children: string;
};

function BaseText({ children, className = "", ...props }: Props) {
  const classNames = `text-base text-justify font-medium text-stone-500 max-w-[36ch] mb-4 mt-8 md:text-left ${className}`;

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
}

export { BaseText };
