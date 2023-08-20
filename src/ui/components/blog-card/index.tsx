import { format } from "@/lib/date";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { Text } from "../text";

type Props = {
  post: Post;
};

function BlogCard({ post }: Props) {
  return (
    <Link key={post._id} href={post.url} className="relative block">
      <div className="p-4">
        <Text className="mb-2 font-bold">{post.title}</Text>
        <p className="flex items-center text-xs font-semibold text-neutral-400">
          <span>{format(post.date)}</span>
        </p>
      </div>
    </Link>
  );
}

export { BlogCard };
