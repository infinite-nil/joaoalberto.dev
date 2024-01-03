import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
  return (
    <div className="mt-4 flex gap-2">
      <Link className="p-4" href="https://github.com/infinite-nil">
        <GitHubLogoIcon className="w-6 h-6" />
      </Link>
      <Link className="p-4" href="https://www.linkedin.com/in/joao-amo/">
        <LinkedInLogoIcon className="w-6 h-6" />
      </Link>
      <Link className="p-4" href="https://twitter.com/infinite_nil">
        <TwitterLogoIcon className="w-6 h-6" />
      </Link>
    </div>
  );
}
