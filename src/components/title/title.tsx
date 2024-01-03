type Props = {
  children: string;
};

export default function Title({ children }: Props) {
  return <h1 className="text-5xl font-semibold md:text-7xl">{children}</h1>;
}
