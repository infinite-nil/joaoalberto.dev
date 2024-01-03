import Social from "@/components/social/social";
import Title from "@/components/title/title";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center p-8 md:mt-24 md:min-h-max">
      <Title>I&apos;m a software engineer.</Title>
      <Social />
    </div>
  );
}
