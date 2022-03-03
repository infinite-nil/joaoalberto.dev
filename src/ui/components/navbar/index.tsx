import Link from "next/link";

import { styled } from "@/ui/config/theme";
import Box from "@/ui/components/box";

const Wrapper = styled("nav", {
  background: "white",
  borderBottom: "1px solid",
  borderColor: "$sage12",
  justifyContent: "space-between",
  width: "100%",
  position: "fixed",
  padding: "$base2x",
  px: "$base",
  left: 0,
  right: 0,
  top: 0,
  zIndex: 100,
  boxShadow:
    "0px 0.4px 3.9px rgba(0, 0, 0, 0.02), 0px 0.2px 9.3px rgba(0, 0, 0, 0.028), 0px -0.5px 17.5px rgba(0, 0, 0, 0.035)",
});

const StyledLink = styled("a", {
  color: "$sage11",
  padding: "$base2x",
  textDecoration: "none",
});

const Navbar = () => {
  return (
    <Wrapper>
      <Box kind="content">
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/blog" passHref>
          <StyledLink>Blog</StyledLink>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default Navbar;
