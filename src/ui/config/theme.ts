import { green } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export type SPACES = "8px" | "16px" | "24px" | "32px" | string;
export type CENTER = "vertical" | "horizontal" | "both";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...green,
      primary: "hsl(121, 59%, 75%)",
      primary_dark: "hsl(121, 59%, 65%)",
      text: "rgb(37, 47, 63)",
    },
    space: {
      base: "8px",
      base2x: "16px",
      base3x: "24px",
      base4x: "32px",
    },
    fontSizes: {
      body: "20px",
      heading: "38px",
      subheading: "26px",
    },
    fonts: {
      heading: "Inter, sans-serif",
      body: "'IBM Plex Serif', sans-serif",
    },
    lineHeights: {
      base: 1.618,
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  utils: {
    mx: (value: SPACES) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: SPACES) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: SPACES) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: SPACES) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    gradient: ({ start, end }: { start: string; end: string }) => ({
      background: `linear-gradient(45deg, ${start} 0%, ${end} 100%)`,
    }),
  },
});
