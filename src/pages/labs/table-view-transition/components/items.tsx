import { motion } from "framer-motion";
import { Item } from "./item";

function Items() {
  return (
    <motion.div className="content-wrapper rounded-xl overflow-hidden">
      <Item />
    </motion.div>
  );
}

export { Items };
