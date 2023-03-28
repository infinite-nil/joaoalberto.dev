import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { animate, motion, useMotionValue } from "framer-motion";

type Props = {
  children: ReactNode;
};

function Focus(props: Props) {
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const w = useMotionValue(0);
  const h = useMotionValue(0);

  useEffect(() => {
    function clearAnimations() {
      x.set(0);
      y.set(0);
      w.set(0);
      h.set(0);
    }

    function animateToElement(element: HTMLElement) {
      const sizes = element.getBoundingClientRect();

      animate(x, sizes.left);
      animate(y, sizes.top);
      animate(w, sizes.width);
      animate(h, sizes.height);
    }

    function handleKeyboard(event: KeyboardEvent) {
      if (event.code === "Tab") {
        const element = document.activeElement as HTMLElement;

        animateToElement(element);
      }
    }

    function handleMouse(event: PointerEvent) {
      const element = event.target as HTMLElement;
      animateToElement(element);
    }

    const elementHandler = document.querySelectorAll<HTMLElement>(".focusable");
    elementHandler.forEach((element) => {
      element.addEventListener("pointerenter", handleMouse);
    });

    document.addEventListener("keyup", handleKeyboard);

    router.events.on("routeChangeStart", clearAnimations);

    return () => {
      elementHandler.forEach((element) => {
        element.removeEventListener("pointerenter", handleMouse);
      });

      document.removeEventListener("keyup", handleKeyboard);

      router.events.off("routeChangeStart", clearAnimations);
    };
  }, [x, y, w, h, router]);

  return (
    <>
      {props.children}
      <motion.div
        className="focus bg-neutral-100 -z-[1] absolute rounded-xl"
        style={{ left: x, top: y, width: w, height: h }}
      />
    </>
  );
}

export { Focus };
