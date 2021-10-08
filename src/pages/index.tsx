import { RoomProvider } from "@liveblocks/react";
import Page from "@/ui/components/page";
import Title from "@/ui/components/title";
import Text from "@/ui/components/text";
import Box from "@/ui/components/box";
import ExternalLink from "@/ui/components/external-link";

import notion from "@/services/notion";
import yearsBetween from "@/utils/years-between";
import getPageTitle from "@/utils/notion/page-title";
import getPageContent from "@/utils/notion/page-content";

export default function Home({ title, content }) {
  const experience = yearsBetween(2014, new Date().getFullYear());

  return (
    <RoomProvider id="home">
      <Page header={<Title>{title}</Title>}>
        <Box kind="content">
          {content.map((paragraph, id) => (
            <Text key={id}>{paragraph}</Text>
          ))}
        </Box>
        <Box kind="content">
          <Box kind="links-section">
            <Title as="p">Links</Title>
            <ExternalLink href="https://www.linkedin.com/in/joao-amo/">
              Linkedin
            </ExternalLink>
            <ExternalLink href="https://github.com/infinite-nil">
              Github
            </ExternalLink>
          </Box>
        </Box>
      </Page>
    </RoomProvider>
  );
}

export async function getStaticProps() {
  const PAGE = "aace0c6f62434facbed4462c0985a759";

  const home = await notion.pages.retrieve({
    page_id: PAGE,
  });
  const blocks = await notion.blocks.children.list({
    block_id: PAGE,
  });

  const title = getPageTitle(home.properties);
  const content = getPageContent(blocks);

  return {
    props: { title, content },
  };
}
