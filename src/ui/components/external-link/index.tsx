import { styled } from "@/ui/config/theme";

const ExternalLink = styled("a", {
  fontSize: "inherit",
  borderBottom: "1px solid $text",
  display: "inline-block",
  textDecoration: "none",
  position: "relative",

  "& + a": {
    marginLeft: "16px",
  },

  "&:after": {
    content: "↗",
    fontSize: "14px",
    display: "inline-block",
    position: "relative",
  },
});

export default ExternalLink;
