import { gray } from "@radix-ui/colors";
import { styled } from "@/ui/config/theme";

const Wrapper = styled("div", {
  background: "white",
  borderBottom: `2px solid $mauve2`,
  display: "flex",
  fontFamily: "$heading",
  justifyContent: "center",
  position: "fixed",
  width: "100%",
});

const Container = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "100%",
  padding: "$base",
  width: "600px",
});

const NavLink = styled("a", {
  background: "$mauve2",
  borderRadius: "4px",
  color: "$text",
  display: "inline-block",
  margin: "0 $base",
  padding: "calc($base / 2) $base2x",
  textDecoration: "none",
  "&:hover": {
    background: "$mauve4",
  },
  "&:active": {
    background: "$green4",
  },
});

export { Container, Wrapper, NavLink };
