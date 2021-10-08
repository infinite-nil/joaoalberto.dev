import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { lensPath, view } from "ramda";

const pageTitleLens = lensPath(["title", "title", 0, "plain_text"]);

const getPageTitle = (properties: GetPageResponse["properties"]) => {
  return view(pageTitleLens, properties);
};

export default getPageTitle;
