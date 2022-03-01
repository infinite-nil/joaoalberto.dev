import type { BlogPost } from "../types";
import { PostModel } from "../model";

const getPost = async (path: string): Promise<BlogPost> => {
  const response = await fetch(`${process.env.BLOG_BASEURL}/articles/${path}`, {
    headers: {
      "api-key": process.env.BLOG_API_KEY,
    },
  });
  const json = await response.json();
  const post = PostModel(json);

  return post;
};

export { getPost };
