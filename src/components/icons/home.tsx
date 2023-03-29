import { motion } from "framer-motion";
import { type Props, variants } from "./utils";

function HomeIcon({ focused }: Props) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      />
      <motion.polyline
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        points="9 22 9 12 15 12 15 22"
      />
    </motion.svg>
  );
}

export { HomeIcon };
