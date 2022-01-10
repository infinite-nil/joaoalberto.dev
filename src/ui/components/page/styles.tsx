import { styled } from "@/ui/config/theme";

const Wrapper = styled("div", {
  minHeight: "100vh",
});

const Header = styled("header", {
  py: "100px",
  px: "$base3x",
});

const Content = styled("div", {
  padding: "$base3x $base3x 0",
});

export { Content, Header, Wrapper };
