import { ReactNode } from "react";
import Box from "../box";
import { Content, Header, Wrapper } from "./styles";

type PageProps = {
  children: ReactNode;
  header?: ReactNode;
};

const Page = ({ children, header }: PageProps) => {
  return (
    <Wrapper>
      <Header>
        <Box kind="content">{header}</Box>
      </Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Page;
