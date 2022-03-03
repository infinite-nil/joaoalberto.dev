import { styled } from "@/ui/config/theme";

const Box = styled("div", {
  variants: {
    kind: {
      content: {
        maxWidth: "680px",
        margin: "0 auto 0",
        width: "100%",
      },
      padded: {
        padding: "$base3x",
      },
    },
    appearence: {
      card: {
        // https://shadows.brumm.af/
        boxShadow:
          "0px 0px 7.8px rgba(0, 0, 0, 0.018), 0px 0px 17.2px rgba(0, 0, 0, 0.024), 0px 0px 28.8px rgba(0, 0, 0, 0.027)",
        borderRadius: "$base2x",
      },
    },
  },
});

export default Box;
