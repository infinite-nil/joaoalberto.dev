import { cn } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

function Navbar() {
  const linkContainerClassnames = cn("flex gap-4");
  const hasBlogPosts = allPosts.length > 0;
  const blogPostsCount = allPosts.length;

  return (
    <nav className="fixed z-50 w-full overflow-hidden bg-white/90 py-4 text-neutral-600">
      <div className="mx-auto flex items-center justify-between px-6 md:max-w-3xl">
        <h1 className="font-bold">
          <Link href="/">João Alberto</Link>
        </h1>
        <div className={linkContainerClassnames}>
          <Link className="relative mr-4 font-bold" href="/craft">
            Craft
          </Link>
          {hasBlogPosts ? (
            <Link className="relative mr-4 font-bold" href="/blog">
              <span className="relative z-10">Blog</span>
              <small className="absolute -right-4 -top-2 rounded-full bg-[var(--container-bg)] px-2 py-1 text-xs">
                {blogPostsCount}
              </small>
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
