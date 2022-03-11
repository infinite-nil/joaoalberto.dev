export default function Index() {
  return (
    <main className="md:grid sm:grid-cols-2 md:grid-cols-6">
      <header className="col-span-5">
        <h1 className="text-3xl md:text-5xl md:leading-snug mt-9 md:mt-24 font-bold mb-24">
          Hello there, I'm <span className="gradient-text">João Alberto</span>,
          software developer helping to build a better web.
        </h1>
      </header>
      <div className="col-span-4 col-start-1">
        <p className="md:text-xl leading-relaxed text-gray-500">
          I am a brazilian self-taught developer with seven years of experience
          developing for web.
        </p>
        <p className="text-xl md:text-3xl font-bold mb-3 mt-9">What I do</p>
        <p className="md:text-xl leading-relaxed text-gray-500">
          Mostly working on the front-end using React but also in the back-end
          using Node.js and Ruby.
        </p>
        <p className="text-xl md:text-3xl font-bold mb-3 mt-9">What I like.</p>
        <p className="md:text-xl leading-relaxed text-gray-500">
          My interests are programming languages, types systems and algorithms
          and web3. When not working for my employeer or some side project I'm
          probably reading about one of these topics.
        </p>
      </div>
    </main>
  );
}
