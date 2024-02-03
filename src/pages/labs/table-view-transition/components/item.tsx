import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import {
  motion,
  animate,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { useRef, useState } from "react";

function Item() {
  const scope = useRef<HTMLDivElement>(null);
  const scale = useMotionValue(1);
  const [sc, setSc] = useState(1);

  useAnimationFrame(() => {
    if (!scope.current) return;

    const currentPosition = Math.ceil(scope.current.getBoundingClientRect().y);

    if (currentPosition > 550) {
      setSc(0.8);
      // animate(scale, 0.8).play();
    } else {
      setSc(1);
      // animate(scale, 1).play();
    }
  });

  return (
    <motion.div
      animate={{ scale: sc, background: sc === 1 ? "#ffffff" : "#ffffff00" }}
      className="content-item flex items-center gap-4 [&:not(:first-child)>.content-text]:border-t bg-white px-2"
      ref={scope}
    >
      <div className="content-icon w-8 h-8 rounded-full py-2 flex items-center justify-center bg-cyan-500 text-white">
        <SewingPinFilledIcon className="w-5 h-5" />
      </div>
      <div className="content-text flex-1 py-2">
        <p className="font-semibold">Acadia National Park</p>
        <p className="text-sm text-neutral-400">Maine</p>
      </div>
    </motion.div>
  );
}

export { Item };
