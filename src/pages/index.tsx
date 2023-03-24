import { Avatar } from "@/components/avatar/avatar";
import { BaseText } from "@/components/base-text/base-text";
import { Title } from "@/components/title/title";

export default function Home() {
  return (
    <div className="px-8 mx-auto pt-28 md:max-w-2xl md:pt-60">
      <main>
        <Avatar />
        <Title>João Alberto.</Title>
        <BaseText>
          I am a self-taught front-end developer with over 7 years of experience
          in web and mobile development.
        </BaseText>
      </main>
    </div>
  );
}
