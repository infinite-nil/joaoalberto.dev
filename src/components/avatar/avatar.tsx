import Image from "next/image";

const sizes = {
  sm: 32,
};

type Props = {
  size?: keyof typeof sizes;
};

function Avatar({ size = "sm" }: Props) {
  return (
    <Image
      alt="João Alberto"
      src="/images/me.svg"
      className={`w-${sizes[size]} h-${sizes[size]}`}
      width={200}
      height={200}
    />
  );
}

export { Avatar };
