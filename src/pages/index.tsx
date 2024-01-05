import Projects from "@/components/projects/projects";
import Social from "@/components/social/social";
import Title from "@/components/title/title";
import { fetchRepositories } from "@/services/api";
import { Repository } from "@/services/api/types";

type Props = {
  repositories: Repository[];
};

export default function Home({ repositories }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-start md:justify-center p-8 md:mt-24 md:min-h-max">
      <Social />
      <Title>I&apos;m a software engineer.</Title>
      <Projects repositories={repositories}  />
    </div>
  );
}

export async function getServerSideProps() {
  const repositories = await fetchRepositories();

  return {
    props: {
      repositories,
    },
  };
}
