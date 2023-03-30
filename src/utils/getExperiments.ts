import { allExperiments } from "contentlayer/generated";

const getExperiments = (limit: number = Infinity) => {
  return allExperiments.filter((_, i) => i <= limit);
};

export { getExperiments };
