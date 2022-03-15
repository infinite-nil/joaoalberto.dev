import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import Markdown from "markdown-to-jsx";

import { Title } from "~/components";

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `https://dev.to/api/articles/infinitenil/${params.slug}`,
    {
      headers: {
        "api-key": process.env.BLOG_API_SECRET as string,
      },
    }
  );
  const data = await response.json();

  return json(data);
};

export default function Index() {
  const post = useLoaderData();

  return (
    <main>
      <div>
        <header>
          <Title>{post.title}</Title>
        </header>
        <article className="prose lg:prose-xl">
          <Markdown>{post.body_markdown}</Markdown>
        </article>
      </div>
    </main>
  );
}
