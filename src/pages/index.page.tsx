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
      <Box style={{ marginTop: "12vh" }}>
        <Article>
          <Title>Hey I&apos;m João Alberto.</Title>
          <Text>
            I am a brazilian self-taught developer with seven years of
            experience developing for web.
          </Text>
          <Title as="h3" size="smalltitle">
            What I do.
          </Title>
          <Text>
            Mostly working on the front-end using React but also in the back-end
            using Node.js and Ruby.
          </Text>
          <Title as="h3" size="smalltitle">
            What I like.
          </Title>
          <Text>
            My interests are programming languages, types systems and algorithms
            and web3.
          </Text>
          <Text>
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
