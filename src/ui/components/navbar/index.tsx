import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";

function Navbar() {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bg-white/90 py-4 text-neutral-600">
      <div className="mx-auto flex items-center justify-between px-6 md:max-w-3xl">
        <h1 className="font-bold">
          <Link href="/">João Alberto</Link>
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export { Navbar };
