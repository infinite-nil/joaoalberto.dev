import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { filter, map, lensPath, view } from "ramda";
import { format } from "date-fns";

export type BlogListType = {
  date: string;
  content: string;
};

const blogListLens = lensPath(["paragraph", "text", 0, "text", "content"]);
const dateLens = lensPath(["created_time"]);

const getBlogList = ({
  results,
}: ListBlockChildrenResponse): BlogListType[] => {
  const items = filter((item) => item.paragraph.text.length > 0, results);

  const content: BlogListType[] = map(
    (item) => ({
      content: view(blogListLens, item),
      date: format(new Date(view(dateLens, item)), "MM/dd/yyyy"),
    }),
    items
  );

  return content;
};

export default getBlogList;
