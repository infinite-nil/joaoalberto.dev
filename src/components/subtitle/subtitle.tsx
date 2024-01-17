type Props = Readonly<{
  children: string;
}>;

function Subtitle({ children }: Props) {
  return <h3 className="text-xl font-title font-bold">{children}</h3>;
}

export { Subtitle };
