import { ReactNode } from "react";
import Box from "@/ui/components/box";

type PageProps = {
  children?: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <Box kind="content">{children}</Box>;
};

export default Page;
