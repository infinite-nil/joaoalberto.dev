"use client";

import { saveTheme } from "@/app/actions";
import { cn } from "@/lib/utils";
import { Colors, colors } from "@/ui/theme/colors";
import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { Icon } from "../icon";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

function ThemeSwitcher() {
  const [_, startSave] = useTransition();
  const [isSaving, setIsSaving] = useState(false);

  function handleColor(color: Colors) {
    setIsSaving(true);
    const classes = document.body.classList.value.split(" ");
    const classToRemove = classes[classes.length - 1];

    document.body.classList.remove(classToRemove);
    document.body.classList.add(color);
    startSave(() => {
      saveTheme(color);
      setTimeout(() => setIsSaving(false), 800);
    });
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div className="h-6 w-6">
          {isSaving ? (
            <motion.div
              animate={{ rotate: 360, repeatCount: 10 }}
              transition={{ duration: 1 }}
            >
              <Icon name="rotate-cw" />
            </motion.div>
          ) : (
            <Icon name="palette" />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        asChild
        className="flex w-auto flex-col gap-2 rounded-full p-2"
      >
        <motion.div>
          {colors.map((color, index) => (
            <motion.button
              onClick={() => handleColor(color.name)}
              key={color.name}
              type="submit"
              className={cn(
                "inline-block h-6 w-6 cursor-pointer rounded-full",
                color.color
              )}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: [0.9, 1.1, 1],
                transition: {
                  delay: index * 0.08,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
            />
          ))}
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}

export { ThemeSwitcher };
