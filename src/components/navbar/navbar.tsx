import { Link } from "../link/link";

function Navbar() {
  return (
    <nav className="container flex gap-3 mt-4">
      <Link icon="home" href="/">
        João Alberto
      </Link>
      <Link icon="blog" href="/blog">
        Blog
      </Link>
    </nav>
  );
}

export { Navbar };