import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { getPosts } from "@/utils/getPosts";
import { PostList } from "@/components/post-list/post-list";
import { Title } from "@/components/title/title";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="col-span-6 col-start-4 max-w-2xl pt-32">
      <Head>
        <title>João Alberto | Writing</title>
      </Head>
      <Title>Writing</Title>
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
