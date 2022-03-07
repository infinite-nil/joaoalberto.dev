import Link from "next/link";

import { styled } from "@/ui/config/theme";
import Box from "@/ui/components/box";

const Wrapper = styled("nav", {
  background: "white",
  borderBottom: "1px solid",
  borderColor: "$gray3",
  justifyContent: "space-between",
  width: "100%",
  position: "fixed",
  padding: "$base2x",
  px: "$base",
  left: 0,
  right: 0,
  top: 0,
  zIndex: 100,
});

const StyledLink = styled("a", {
  color: "$grass9",
  padding: "0 $base2x",
  textDecoration: "none",
});

const Navbar = () => {
  return (
    <Wrapper>
      <Box
        kind="content"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link href="/" passHref>
          <StyledLink>João Alberto</StyledLink>
        </Link>
        <Link href="/blog" passHref>
          <StyledLink>Blog</StyledLink>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default Navbar;
