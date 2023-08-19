import { allPosts } from ".contentlayer/generated";
import { format } from "@/lib/date";
import { Container } from "@/ui/components/container";
import { Subtitle } from "@/ui/components/subtitle";
import { Text } from "@/ui/components/text";
import Link from "next/link";

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
        })}
      </Container>
    </>
  );
}

export default Blog;
