import { styled } from "@/ui/config/theme";

const Title = styled("p", {
  fontFamily: "$body",
  fontSize: "$body",
  margin: "$base 0 $base2x",
  "& strong": {
    fontWeight: "700",
  },
});

export default Title;
