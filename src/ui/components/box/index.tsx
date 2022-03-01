import { styled } from "@/ui/config/theme";

const Box = styled("div", {
  variants: {
    kind: {
      content: {
        maxWidth: "680px",
        margin: "0 auto 0",
      },
      padded: {
        padding: "$base3x",
      },
    },
    appearence: {
      card: {
        // https://shadows.brumm.af/
        boxShadow:
          "0px 0px 7.8px rgba(0, 0, 0, 0.018), 0px 0px 17.2px rgba(0, 0, 0, 0.024), 0px 0px 28.8px rgba(0, 0, 0, 0.027), 0px 0px 43.4px rgba(0, 0, 0, 0.027), 0px 0px 62.6px rgba(0, 0, 0, 0.026), 0px 0px 88.6px rgba(0, 0, 0, 0.025), 0px 0px 125.7px rgba(0, 0, 0, 0.025), 0px 0px 182.5px rgba(0, 0, 0, 0.027), 0px 0px 281.3px rgba(0, 0, 0, 0.033), 0px 0px 500px rgba(0, 0, 0, 0.05)",
        borderRadius: "$base2x",
      },
    },
  },
});

export default Box;
