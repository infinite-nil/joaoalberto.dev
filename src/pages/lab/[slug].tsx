import Head from "next/head";
import Image from "next/image";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allExperiments } from "contentlayer/generated";
import { Title } from "@/components/title/title";
import { getResourceSlug } from "@/utils/getResourceSlug";

export async function getStaticPaths() {
  const paths = allExperiments.map((experiment) => ({
    params: {
      slug: getResourceSlug(experiment._raw.flattenedPath),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const experiment = allExperiments.find(
    (experiment) =>
      getResourceSlug(experiment._raw.flattenedPath) === params?.slug
  );

  return {
    props: {
      experiment: experiment!,
    },
  };
}

const ExperimentLayout = ({
  experiment,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(experiment.body.code);

  return (
    <>
      <Head>
        <title>{experiment.title}</title>
      </Head>
      <article className="col-span-6 col-start-4 max-w-2xl pt-10">
        <Image
          alt={`${experiment.title} cover photo`}
          src={experiment.image}
          width={768}
          height={512}
          className="rounded-xl w-full h-auto"
        />
        <Title>{experiment.title}</Title>
        <MDXContent components={{ Title }} />
      </article>
    </>
  );
};

export default ExperimentLayout;
