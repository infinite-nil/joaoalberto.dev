import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

type Props = Readonly<{
  children: ReactNode;
}>;

function BottomSheet({ children }: Props) {
  const size = useWindowSize();

  return (
    <motion.div
      className="rounded-tl-xl w-screen h-screen rounded-tr-xl bg-[rgba(255,255,255,.9)] backdrop-blur-sm p-5 pt-2"
      drag="y"
      dragConstraints={{
        bottom: size.height - 76,
        top: size.height * 0.1,
      }}
      initial={{ y: size.height * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export { BottomSheet };
