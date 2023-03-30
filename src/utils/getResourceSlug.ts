const getResourceSlug = (resourcePath: string) => {
  const resourcePathParts = resourcePath.split("/");
  return resourcePathParts[resourcePathParts.length - 1];
};

export { getResourceSlug };
