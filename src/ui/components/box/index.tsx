import { styled } from "@/ui/config/theme";

const Box = styled("div", {
  variants: {
    kind: {
      content: {
        maxWidth: "680px",
        margin: "0 auto 0",
      },
    },
  },
});

export default Box;
