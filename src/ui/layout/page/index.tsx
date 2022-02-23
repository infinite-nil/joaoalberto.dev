import { ReactNode } from "react";
import Box from "../../components/box";
import { Content, Header } from "./styles";

type PageProps = {
  children: ReactNode;
  header?: ReactNode;
};

const Page = ({ children, header }: PageProps) => {
  return (
    <div>
      <Header>
        <Box kind="content">{header}</Box>
      </Header>
      <Content>{children}</Content>
    </div>
  );
};

export default Page;
