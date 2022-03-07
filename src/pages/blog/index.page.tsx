import { GetStaticProps } from "next";

import Box from "@/ui/components/box";
import Title from "@/ui/components/title";
import PostItem from "@/ui/components/post-item";
import Page from "@/ui/layout/page";

import { getPosts } from "@/services/blog";
import { BlogPost } from "@/services/blog/types";

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <Page>
      <Box kind="padded" style={{ marginTop: "20vh" }}>
        <Title>Latest.</Title>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
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
