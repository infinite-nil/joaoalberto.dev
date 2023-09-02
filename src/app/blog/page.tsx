import { compareDesc } from "date-fns";
import { allPosts } from ".contentlayer/generated";
import { BlogCard } from "@/ui/components/blog-card";
import { Container } from "@/ui/components/container";
import { Subtitle } from "@/ui/components/subtitle";

function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
      <Container containerStyles="bg-[var(--container-bg)] py-8">
        <Subtitle className="text-3xl capitalize text-neutral-700">
          Blog
        </Subtitle>
      </Container>
      <Container contentStyles="px-0">
        {posts.map((post) => {
          return <BlogCard key={post._id} post={post} />;
        })}
      </Container>
    </>
  );
}

export default Blog;
