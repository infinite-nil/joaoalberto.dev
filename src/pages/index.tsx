import Page from "@/ui/components/page";
import Title from "@/ui/components/title";
import Text from "@/ui/components/text";
import Box from "@/ui/components/box";
import ExternalLink from "@/ui/components/external-link";

import yearsBetween from "@/utils/years-between";

export default function Home() {
  const experience = yearsBetween(2014, new Date().getFullYear());

  return (
    <Page header={<Title>João Alberto, front-end developer</Title>}>
      <Box kind="content">
        <Text>
          I am a self taught developer with over {experience} years of experience
          developing for web, mostly in the fron-end world but I also developed
          for back-end.
        </Text>
        <Text>
          I have a strong knowledge of how web works and how to deliver amazing
          experiences through well written code.
        </Text>
        <Text>
          Now, I want to expand my horizons by investing my time learning to
          develop for crypto, blockchains and this kind of cool stuff.
        </Text>
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
  );
}
