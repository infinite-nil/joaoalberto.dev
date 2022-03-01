import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import Article from "@/ui/components/article";
import Box from "@/ui/components/box";
import Text from "@/ui/components/text";
import Title from "@/ui/components/title";
import Page from "@/ui/layout/page";

import { getPosts } from "@/services/blog";
import { BlogPost } from "@/services/blog/types";

export default function Home({
  posts: _,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page>
      <Box style={{ marginTop: "20vh" }}>
        <Article>
          <Title>João Alberto.</Title>
          <Text>
            I am a brazilian self-taught developer with some years of experience
            developing for web.
          </Text>
          <Text>
            Mostly working on the front-end using React but also in the back-end
            using Node.js and Ruby.
          </Text>
          <Text>
            My interests are programming languages, type system and algorithms.
            When not working for my employeer or some side project I&apos;m
            probably reading about one of these topics.
          </Text>
        </Article>
      </Box>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<{
  posts: BlogPost[];
}> = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
