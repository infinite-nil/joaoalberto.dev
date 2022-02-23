import { globalCss } from "./theme";

const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
    overflow: "auto",
  },
  body: {
    fontFamily: "$body",
    fontSize: "$body",
    lineHeight: "$base",
    margin: 0,
    overflow: "auto",
    padding: 0,
  },
});

export default globalStyles;
