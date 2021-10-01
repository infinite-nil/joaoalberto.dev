import { styled } from "@/ui/config/theme";

const Box = styled("div", {
  variants: {
    kind: {
      content: {
        maxWidth: "680px",
        margin: "80px auto 0",
      },
      "links-section": {
        fontFamily: "$heading",
        gradient: { start: "$green6", end: "$green4" },
        border: "4px solid $green6",
        borderRadius: "16px",
        marginBottom: "40px",
        marginTop: "80px",
        padding: "$base3x",
      },
    },
  },
});

export default Box;
