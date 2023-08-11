import { Text } from "../text";

function Footer() {
  return (
    <footer className="mt-16 w-full overflow-hidden border-t-8 border-neutral-100 bg-white/90 py-16 text-neutral-400">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 md:max-w-3xl md:flex-row">
        <Text className="mb-0 text-neutral-400" small>
          <a className="font-bold" href="mailto:hey@joaoalberto.dev">
            hey@joaoalberto.dev
          </a>
        </Text>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            className="font-bold text-amber-300 decoration-amber-200 decoration-4 underline-offset-2 hover:underline"
            href="https://github.com/infinite-nil"
            target="_blank"
          >
            Github
          </a>
          <a
            className="font-bold text-amber-300 decoration-amber-200 decoration-4 underline-offset-2 hover:underline"
            href="https://www.linkedin.com/in/joao-amo/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="font-bold text-amber-300 decoration-amber-200 decoration-4 underline-offset-2 hover:underline"
            href="https://twitter.com/infinite_nil"
            target="_blank"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
