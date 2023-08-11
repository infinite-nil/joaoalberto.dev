"use client";

import { saveTheme } from "@/app/actions";
import { cn } from "@/lib/utils";
import { Colors, colors } from "@/ui/theme/colors";
import { useTransition } from "react";
import { Icon } from "../icon";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

function ThemeSwitcher() {
  const [_, startSave] = useTransition();

  function handleColor(color: Colors) {
    const classes = document.body.classList.value.split(" ");
    const classToRemove = classes[classes.length - 1];

    document.body.classList.remove(classToRemove);
    document.body.classList.add(color);
    startSave(() => saveTheme(color));
  }

  return (
    <Popover>
      <PopoverTrigger>
        <div className="h-6 w-6">
          <Icon name="palette" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 rounded-full p-2">
        {colors.map((color) => (
          <button
            onClick={() => handleColor(color.name)}
            key={color.name}
            type="submit"
            className={cn(
              "inline-block h-6 w-6 cursor-pointer rounded-full",
              color.color
            )}
          />
        ))}
      </PopoverContent>
    </Popover>
  );
}

export { ThemeSwitcher };
