import { Paragraph, Title } from "~/components";

export default function Index() {
  return (
    <main className="md:grid sm:grid-cols-2 md:grid-cols-6">
      <header className="col-span-5">
        <Title>
          Hello there, I'm <span className="gradient-text">João Alberto</span>,
          software developer helping to build a better web.
        </Title>
      </header>
      <div className="col-span-4 col-start-1">
        <Paragraph>
          I am a brazilian self-taught developer with seven years of experience
          developing for web.
        </Paragraph>
        <p className="text-xl md:text-3xl font-bold mb-3 mt-9">What I do</p>
        <Paragraph>
          Mostly working on the front-end using React but also in the back-end
          using Node.js and Ruby.
        </Paragraph>
        <p className="text-xl md:text-3xl font-bold mb-3 mt-9">What I like.</p>
        <Paragraph>
          My interests are programming languages, types systems and algorithms
          and web3. When not working for my employeer or some side project I'm
          probably reading about one of these topics.
        </Paragraph>
      </div>
    </main>
  );
}
