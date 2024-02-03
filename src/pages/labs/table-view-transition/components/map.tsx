import type { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

function MapContainer({ children }: Props) {
  return (
    <div className="w-scren h-screen fixed inset-0 flex items-center justify-center bg-[url('/images/map.png')] bg-center bg-cover">
      {children}
    </div>
  );
}

export { MapContainer };
