import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
  return (
    <div className="my-4 flex gap-2 text-gray-500 -ml-4">
      <Link aria-label="Github" className="p-4 hover:text-blue-950" href="https://github.com/infinite-nil">
        <GitHubLogoIcon className="w-6 h-6" />
      </Link>
      <Link aria-label="Linkedin" className="p-4 hover:text-blue-950" href="https://www.linkedin.com/in/joao-amo/">
        <LinkedInLogoIcon className="w-6 h-6" />
      </Link>
      <Link aria-label="X/Twitter" className="p-4 hover:text-blue-950" href="https://twitter.com/infinite_nil">
        <TwitterLogoIcon className="w-6 h-6" />
      </Link>
    </div>
  );
}
