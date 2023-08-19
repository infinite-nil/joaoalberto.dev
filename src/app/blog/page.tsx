import { allPosts } from ".contentlayer/generated";
import { Container } from "@/ui/components/container";
import { Subtitle } from "@/ui/components/subtitle";
import { Text } from "@/ui/components/text";
import Link from "next/link";
import { format, parseISO } from "date-fns";

function Blog() {
  return (
    <>
      <Container containerStyles="bg-[var(--container-bg)] py-8">
        <Subtitle className="text-3xl capitalize text-neutral-700">
          Blog
        </Subtitle>
      </Container>
      <Container contentStyles="px-0">
        {allPosts.map((post) => {
          const date = format(parseISO(post.date), "LLLL d, yyyy");

          return (
            <Link href={post.url} className="relative block">
              <div className="p-4">
                <Text className="mb-2 font-bold">{post.title}</Text>
                <p className="flex items-center text-xs font-semibold text-neutral-400">
                  <span>{date}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </Container>
    </>
  );
}

export default Blog;
