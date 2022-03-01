import ReactMarkdown from "react-markdown";

import Article from "@/ui/components/article";
import Box from "@/ui/components/box";
import Title from "@/ui/components/title";
import Text from "@/ui/components/text";
import Page from "@/ui/layout/page";

import { getPosts, getPost } from "@/services/blog";
import { BlogPost } from "@/services/blog/types";
import { formatDate } from "@/helpers/format-date";

export default function Blog({ post }: { post: BlogPost }) {
  return (
    <Page>
      <Box style={{ marginTop: "20vh" }}>
        <Article>
          <Text>{formatDate(post.date)}</Text>
          <Title>{post.title}</Title>
          <Box style={{ marginTop: "60px" }}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </Box>
        </Article>
      </Box>
    </Page>
  );
}

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: `${process.env.NEXT_PUBLIC_BLOG_PATH_PREFFIX}-${String(post.slug)}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const fixedPath = params.slug.replace("-", "/");
  const post = await getPost(fixedPath);

  return {
    props: {
      post,
    },
  };
};
