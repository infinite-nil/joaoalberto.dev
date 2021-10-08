import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { filter, map, lensPath, view } from "ramda";

const pageContentLens = lensPath(["paragraph", "text", 0, "text", "content"]);

const getPageContent = ({ results }: ListBlockChildrenResponse) => {
  const items = filter((item) => item.paragraph.text.length > 0, results);
  const content = map((item) => view(pageContentLens, item), items);

  return content;
};

export default getPageContent;
