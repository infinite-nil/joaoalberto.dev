import { styled } from "@/ui/config/theme";

const Title = styled("h1", {
  fontFamily: "$heading",
  fontSize: "$heading",
  fontWeight: "bolder",
  margin: "2ex 0 4ex",
  variants: {
    size: {
      subtitle: {
        fontSize: "$subheading",
      },
      smalltitle: {
        fontSize: "calc($subheading - 4px)",
        fontWeight: "bolder",
        color: "$gray12",
        margin: "4ex 0 2ex",
      },
    },
  },
});

export default Title;
