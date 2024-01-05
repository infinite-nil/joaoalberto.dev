type Props = {
  children: string;
};

export default function Subtitle({ children }: Props) {
  return <h3 className="text-xl font-title font-bold">{children}</h3>;
}
