import type { BlogPost } from "../types";
import { PostModel } from "../model";

const getPosts = async (per_page = 5, page = 1): Promise<BlogPost[]> => {
  try {
    const response = await fetch(
      `${process.env.BLOG_BASEURL}/articles/me/published?per_page=${per_page}&page=${page}`,
      {
        headers: {
          "api-key": process.env.BLOG_API_KEY,
        },
      }
    );
    const json = await response.json();
    const posts = json.map(PostModel);

    return posts;
  } catch {
    return [];
  }
};

export { getPosts };
