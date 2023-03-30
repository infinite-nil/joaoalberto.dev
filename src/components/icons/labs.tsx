import { motion } from "framer-motion";
import { type Props, variants } from "./utils";

function LabsIcon({ focused }: Props) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
      ></motion.path>
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="M8.5 2h7"
      ></motion.path>
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="M7 16h10"
      ></motion.path>
    </motion.svg>
  );
}

export { LabsIcon };
