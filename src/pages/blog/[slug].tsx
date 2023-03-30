import Head from "next/head";
import { allPosts } from "contentlayer/generated";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Title } from "@/components/title/title";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { getResourceSlug } from "@/utils/getResourceSlug";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: {
      slug: getResourceSlug(post._raw.flattenedPath),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allPosts.find(
    (post) => getResourceSlug(post._raw.flattenedPath) === params?.slug
  );

  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="col-span-6 col-start-4 max-w-2xl pt-10">
        <Image
          alt={`${post.title} cover photo`}
          src={post.image}
          width={768}
          height={512}
          className="rounded-xl w-full h-auto"
        />
        <Title>{post.title}</Title>
        <time dateTime={post.date} className="text-sm text-slate-600">
          {formatDate(post.date)}
        </time>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
};

export default PostLayout;
