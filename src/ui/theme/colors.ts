const colors = [
  { name: "amber", color: "bg-amber-300" },
  { name: "sky", color: "bg-sky-300" },
  { name: "lime", color: "bg-lime-300" },
  { name: "emerald", color: "bg-emerald-300" },
  { name: "rose", color: "bg-rose-300" },
] as const;

export type Colors = (typeof colors)[number]["name"];
export { colors };
