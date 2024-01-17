import { Repository } from "@/services/api/types";
import Subtitle from "../subtitle/subtitle";
import { Project } from "./project";

type Props = {
  repositories: Repository[];
};

export default function Projects({ repositories }: Props) {
  if (repositories.length <= 0) return null;

  return (
    <div className="mt-12 w-full">
      <Subtitle>Projects</Subtitle>
      <ul className="w-screen mt-4 -ml-8 flex-wrap md:w-full md:ml-0 md:flex md:gap-2">
        {repositories.map((repository) => (
          <Project key={repository.html_url} repository={repository} />
        ))}
      </ul>
    </div>
  );
}
