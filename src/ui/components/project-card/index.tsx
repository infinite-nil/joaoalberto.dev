import { Text } from "../text";

type Props = {
  title: string;
  url: string;
  description: string;
};

function ProjectCard({ title, description, url }: Props) {
  return (
    <a
      target="_blank"
      href={url}
      className="col-span-1 block rounded-2xl border bg-white p-8 shadow-md transition-all hover:scale-105 hover:border-[var(--project-card-border-hover)] hover:shadow-xl focus:scale-105 focus:border-[var(--project-card-border-hover)] focus:shadow-xl focus:outline-0"
    >
      <Text>{title}</Text>
      <Text small>{description}</Text>
    </a>
  );
}

export { ProjectCard };
