import { allPosts } from "contentlayer/generated";
import { Container } from "@/ui/components/container";
import { format } from "@/lib/date";

function getPost(slug: string) {
  return allPosts.find((p) => p._raw.flattenedPath === `blog/${slug}`);
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <Container contentStyles="py-8">
      <article className="prose">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(post.date)}
        </time>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </Container>
  );
};

export default PostLayout;
