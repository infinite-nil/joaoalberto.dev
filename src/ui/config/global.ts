import { globalCss } from "./theme";

const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
  },
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
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  a: {
    textDecoration: "none",
  },
});

export default globalStyles;
