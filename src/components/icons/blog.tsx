import { motion } from "framer-motion";
import { type Props, variants } from "./utils";

function BlogIcon({ focused }: Props) {
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
      {/* Container */}
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
      />

      {/* Internal square */}
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="M10 6h8v4h-8V6Z"
      />

      {/* Line 1 */}
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="M18 14h-8"
      />

      {/* Line 2 */}
      <motion.path
        initial="closed"
        variants={variants}
        animate={focused ? "open" : "closed"}
        d="M15 18h-5"
      />
    </motion.svg>
  );
}

export { BlogIcon };
