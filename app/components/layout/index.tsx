import { FC } from "react";
import { Link } from "remix";

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="sm:max-w-md md:max-w-4xl mx-auto mb-24 md:mb-36 px-4 sm:px-5 md:px-6">
        {children}
      </div>
      <footer className="w-full bg-slate-50 xl:fixed xl:bottom-0">
        <div className="sm:max-w-md md:max-w-4xl mx-auto px-5 py-8">
          <nav className="flex flex-col gap-4 md:flex-row md:justify-between text-xl text-gray-400 font-bold">
            <Link to="/">João Alberto</Link>
            <span className="text-gray-500 flex flex-col gap-2 md:flex-row md:gap-4">
              <a className="font-light" href="https://github.com/infinite-nil">
                Github
              </a>
              <a className="font-light" href="https://twitter.com/infinite_nil">
                Twitter
              </a>
              <a
                className="font-light"
                href="https://www.linkedin.com/in/joao-amo/"
              >
                Linkedin
              </a>
            </span>
          </nav>
        </div>
      </footer>
    </>
  );
};

export { Layout };
