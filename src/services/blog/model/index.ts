import type { BlogPost } from "../types";

const PostModel = (post): BlogPost => {
  console.log(post);

  return {
    id: post?.id,
    title: post?.title || "",
    content: post?.body_markdown || "",
    cover: post?.cover_image || "",
    tags: post?.tag_list || [""],
    readingTime: post?.reading_time_minutes || 0,
    slug: post?.slug || "",
    date: post?.created_at || post?.published_at,
  };
};

export { PostModel };
