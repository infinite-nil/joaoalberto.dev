import { ReactNode } from "react";
import Box from "@/ui/components/box";
import Navbar from "@/ui/components/navbar";

type PageProps = {
  children?: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <Box kind="content">
      <Navbar />
      {children}
    </Box>
  );
};

export default Page;
