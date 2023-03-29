import { InferGetStaticPropsType } from "next";
import { Avatar } from "@/components/avatar/avatar";
import { BaseText } from "@/components/base-text/base-text";
import { Title } from "@/components/title/title";
import { getPosts } from "@/utils/getPosts";
import { Subtitle } from "@/components/subtitle/subtitle";
import { PostList } from "@/components/post-list/post-list";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <main className="col-span-6 mt-8">
        <Avatar />
        <Title>João Alberto.</Title>
        <BaseText>
          I am a self-taught front-end developer with over 7 years of experience
          in web and mobile development.
        </BaseText>
      </main>
      <div className="col-span-6 mt-16 md:mt-8">
        <Subtitle>Writing</Subtitle>
        <PostList posts={posts} />
      </div>
    </>
  );
}

export function getStaticProps() {
  const posts = getPosts(3);

  return {
    props: {
      posts,
    },
  };
}
