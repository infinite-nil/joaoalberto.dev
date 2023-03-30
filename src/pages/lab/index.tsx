import Head from "next/head";
import { Title } from "@/components/title/title";
import { BaseText } from "@/components/base-text/base-text";
import { getExperiments } from "@/utils/getExperiments";
import { InferGetStaticPropsType } from "next";
import { LabList } from "@/components/lab-list/lab-list";

export default function Lab({
  experiments,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="col-span-6 col-start-4 max-w-2xl pt-32">
      <Head>
        <title>João Alberto | Lab</title>
      </Head>
      <Title>Labs</Title>
      <LabList labs={experiments} />
    </div>
  );
}

export async function getStaticProps() {
  const experiments = getExperiments();

  return { props: { experiments } };
}
