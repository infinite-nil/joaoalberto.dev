import { json, useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";

import { Paragraph, Subtitle, Title } from "~/components";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.BLOG_API_SECRET as string,
    },
  });
  const data = await response.json();

  return json(data);
};

export default function Index() {
  const data = useLoaderData();

  return (
    <main>
      <div className="md:grid sm:grid-cols-2 md:grid-cols-6">
        <header className="col-span-5">
          <Title>
            Hello there, I'm <span className="gradient-text">João Alberto</span>
            , software developer helping to build a better web.
          </Title>
        </header>
        <div className="col-span-4 col-start-1">
          <Paragraph>
            I am a brazilian self-taught developer with seven years of
            experience developing for web.
          </Paragraph>
          <p className="text-xl md:text-3xl font-bold mb-3 mt-9">What I do</p>
          <Paragraph>
            Mostly working on the front-end using React but also in the back-end
            using Node.js and Ruby.
          </Paragraph>
          <p className="text-xl md:text-3xl font-bold mb-3 mt-9">
            What I like.
          </p>
          <Paragraph>
            My interests are programming languages, types systems and algorithms
            and web3. When not working for my employeer or some side project I'm
            probably reading about one of these topics.
          </Paragraph>
        </div>
      </div>
      <div className="mt-36">
        <Subtitle>
          <span className="gradient-text">Writings</span>
        </Subtitle>
        {[...data, ...data, ...data].map((post) => {
          return (
            <Link
              className="p-4 block hover:bg-slate-50 rounded-lg cursor-pointer mb-4"
              key={post.id}
              to={`blog/${post.slug}`}
            >
              <p className="text-xs text-gray-400 mb-2">
                {new Intl.DateTimeFormat("en-US").format(
                  new Date(post.published_at)
                )}
              </p>
              <p className="font-bold">{post.title}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
