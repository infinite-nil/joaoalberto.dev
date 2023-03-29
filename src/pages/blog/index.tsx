import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { getPosts } from "@/utils/getPosts";
import { PostList } from "@/components/post-list/post-list";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>
      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
