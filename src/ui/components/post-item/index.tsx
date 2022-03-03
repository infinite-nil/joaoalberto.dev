import Link from "next/link";
import NextImage from "next/image";

import { styled } from "@/ui/config/theme";
import NativeTitle from "@/ui/components/title";
import NativeText from "@/ui/components/text";

import { BlogPost } from "@/services/blog/types";

import { formatDate } from "@/helpers/format-date";

const Wrapper = styled("div", {
  marginBottom: "calc($base4x + 16px)",
});

const ImageWrapper = styled("div", {
  borderRadius: "$base2x",
  overflow: "hidden",
  width: "100%",
  height: "160px",
});

const Image = styled(NextImage, {
  objectFit: "cover",
  width: "100%",
});

const Title = styled(NativeTitle, {
  margin: 0,
  marginTop: "$base",
  fontSize: "calc($subheading - 4px)",
  color: "$sage7",
  marginLeft: "$base2x",
});

const Text = styled(NativeText, {
  fontSize: "calc($body - 4px)",
  margin: 0,
  marginLeft: "$base2x",
  color: "$sage10",
});

const PostItem = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/post/${process.env.NEXT_PUBLIC_BLOG_PATH_PREFFIX}-${post.slug}`}
      passHref
    >
      <a>
        <Wrapper>
          <ImageWrapper>
            <Image src={post.cover} alt={post.title} width={800} height={500} />
          </ImageWrapper>
          <Title as="h3">{post.title}</Title>
          <Text>{formatDate(post.date)}</Text>
        </Wrapper>
      </a>
    </Link>
  );
};

export default PostItem;
