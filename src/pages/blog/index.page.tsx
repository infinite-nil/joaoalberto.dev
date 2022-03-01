import { GetStaticProps } from "next";
import Link from "next/link";

import Box from "@/ui/components/box";
import Title from "@/ui/components/title";
import Page from "@/ui/layout/page";

import { getPosts } from "@/services/blog";
import { BlogPost } from "@/services/blog/types";
import { formatDate } from "@/helpers/format-date";

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <Page>
      <Box style={{ marginTop: "20vh" }}>
        <Title>Blog.</Title>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/post/${process.env.NEXT_PUBLIC_BLOG_PATH_PREFFIX}-${post.slug}`}
                prefetch
              >
                <a>
                  {post.title} &bull; {formatDate(post.date)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 86400,
  };
};
