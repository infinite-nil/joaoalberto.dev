import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.md",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The post cover image",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export const Experiment = defineDocumentType(() => ({
  name: "Experiment",
  filePathPattern: "lab/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the experiment",
      required: true,
    },
    image: {
      type: "string",
      description: "The experiment cover image",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (experiment) => experiment._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Experiment],
});
