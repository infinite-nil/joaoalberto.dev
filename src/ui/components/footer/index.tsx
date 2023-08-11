import { Link } from "../link";
import { Text } from "../text";

function Footer() {
  return (
    <footer className="mt-16 w-full overflow-hidden border-t-8 border-neutral-100 bg-white/90 py-16 text-neutral-400">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 md:max-w-3xl md:flex-row">
        <Text className="mb-0 text-neutral-400" small>
          <Link className="font-bold" href="mailto:hey@joaoalberto.dev">
            hey@joaoalberto.dev
          </Link>
        </Text>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link href="https://github.com/infinite-nil" external>
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/joao-amo/" external>
            Linkedin
          </Link>
          <Link href="https://twitter.com/infinite_nil" external>
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
