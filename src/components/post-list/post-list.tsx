import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { BaseText } from "../base-text/base-text";

type Props = {
  posts: Post[];
};

function PostList({ posts }: Props) {
  const date = (postDate: string) => format(parseISO(postDate), "LLLL d, yyyy");

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <Link
            href={post.url}
            className="flex flex-col items-start bg-neutral-100 gap-4 md:items-center mb-6 p-4 rounded-xl w-[calc(100%_+_32px)] -left-4 relative md:flex-row md:bg-transparent focus:bg-neutral-100 hover:bg-neutral-100 outline-none focus:shadow-outline"
          >
            <BaseText className="m-0">{post.title}</BaseText>
            <hr className="flex-1 md:block" />
            <BaseText className="text-xs m-0 text-neutral-500">
              {date(post.date)}
            </BaseText>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { PostList };
