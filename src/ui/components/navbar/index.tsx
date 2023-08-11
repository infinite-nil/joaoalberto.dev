import { Text } from "../text";

function Navbar() {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bg-white/90 py-4 text-neutral-600">
      <div className="mx-auto flex items-center justify-between px-6 md:max-w-3xl">
        <h1 className="font-bold">
          <Text className="m-0 inline-block" big>
            👨🏽‍💻
          </Text>
          <a href="/">João Alberto</a>
        </h1>
        {/* <div className="flex items-center gap-4 text-sm">
          <a href="/blog">Blog</a>
          <a href="/lab">Lab</a>
        </div> */}
      </div>
    </nav>
  );
}

export { Navbar };
