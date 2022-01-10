import { Fragment } from "react";
import { InferGetStaticPropsType } from "next";
import { RoomProvider } from "@liveblocks/react";
import Page from "@/ui/components/page";
import Title from "@/ui/components/title";
import Text from "@/ui/components/text";
import Box from "@/ui/components/box";

import notion from "@/services/notion";
import getPageTitle from "@/utils/notion/page-title";
import getBlogList from "@/utils/notion/blog-list";
import { ONE_DAY } from "@/utils/constants";

export default function Home({
  title,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <RoomProvider id="blog">
      <Page header={<Title>{title}</Title>}>
        <Box kind="content">
          {content.map((item, id) => (
            <Fragment key={id}>
              <Text>{item.date}</Text>
              <Text>{item.content}</Text>
            </Fragment>
          ))}
        </Box>
      </Page>
    </RoomProvider>
  );
}

export const getStaticProps = async () => {
  const PAGE = "805cc572ff9b45c184afc6ea29b30a13";
  const home = await notion.pages.retrieve({
    page_id: PAGE,
  });
  const blocks = await notion.blocks.children.list({
    block_id: PAGE,
  });
  const title = getPageTitle(home.properties);
  const content = getBlogList(blocks);

  return {
    props: { title, content, blocks },
    revalidate: ONE_DAY,
  };
};
