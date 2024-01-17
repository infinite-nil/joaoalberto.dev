type Props = Readonly<{
  children: string;
}>;

function Title({ children }: Props) {
  return (
    <h1 className="text-5xl font-title font-semibold md:text-7xl my-10">
      {children}
    </h1>
  );
}

export { Title };
