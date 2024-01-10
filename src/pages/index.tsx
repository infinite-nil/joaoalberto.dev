import Automata from "@/components/automata/automata";
import Projects from "@/components/projects/projects";
import Social from "@/components/social/social";
import Title from "@/components/title/title";
import { fetchRepositories } from "@/services/api";
import { Repository } from "@/services/api/types";
import Head from "next/head";

type Props = {
  repositories: Repository[];
};

export default function Home({ repositories }: Props) {
  return (
    <>
      <Automata />
      <div className="min-h-screen flex flex-col items-start md:justify-center p-8 md:mt-24 md:min-h-max relative z-10">
        <Head>
          <title>João Alberto - Developer</title>
        </Head>
        <Social />
        <Title>I&apos;m a software engineer.</Title>
        <Projects repositories={repositories} />
      </div>
    </>
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
