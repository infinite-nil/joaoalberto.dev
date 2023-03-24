type Props = JSX.IntrinsicElements["h1"] & {
  children: string;
};

function Title({ children, ...props }: Props) {
  return (
    <h1 className="text-4xl font-semibold my-8" {...props}>
      {children}
    </h1>
  );
}

export { Title };
