"use server";

import { Colors } from "@/ui/theme/colors";
import { cookies } from "next/headers";

export async function saveTheme(color: Colors): Promise<void> {
  const cookiesStore = cookies();

  cookiesStore.set("theme", color);
}
