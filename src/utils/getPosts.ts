import { allPosts } from "contentlayer/generated";
import compareDesc from "date-fns/compareDesc";

const getPosts = (limit: number = Infinity) => {
  return allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .filter((_, i) => i <= limit);
};

export { getPosts };
