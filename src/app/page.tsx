import { Container } from "@/ui/components/container";
import { ProjectCard } from "@/ui/components/project-card";
import { Subtitle } from "@/ui/components/subtitle";
import { Text } from "@/ui/components/text";
import { WorkCard } from "@/ui/components/work-card";

export default function Home() {
  const projects = [
    {
      title: "Snake game",
      description: "A small game written in C using the amazing Raylib",
      url: "https://github.com/infinite-nil/snake-game",
    },
    {
      title: "Kakemono",
      description: "A knowledge management software that runs on the terminal",
      url: "https://github.com/infinite-nil/kakemono",
    },
    {
      title: "Blog",
      description:
        "A blog platform written from scratch using Rust without any dependency.",
      url: "https://github.com/infinite-nil/blog",
    },
  ];

  const work = [
    {
      company: "Fluency Acedemy",
      role: "Lead front-end engineer",
      description:
        "I am building a real-time platform for students around the world that want to interact with teachers via text, voice, and video.",
      start: "Mar 2022",
      end: "Present",
    },
    {
      company: "Pixelwolf",
      role: "Lead front-end engineer",
      description:
        "Responsible for developing project patterns and internal tooling to increase developer experience and ship amazing products for a variety of companies in a range of areas such as pop culture, fintech, and real estate.",
      start: "Mar, 2020",
      end: "Mar 2022",
    },
    {
      company: "MadeiraMadeira",
      role: "Senior front-end engineer",
      description:
        "At MadeiraMadeira I worked in the customer experience team as a lead front-end developer building a highly scalable and performant real-time chat platform that has been used by after-sales service and technical assistance teams. Also, I mentored some new developers and managed some hiring while I participated in the Design System team.",
      start: "Jul, 2019",
      end: "Dec, 2019",
    },
    {
      company: "Critical Mass",
      role: "Full-stack engineer",
      description:
        "Developing high-performance applications for a social enterprise network called Dialog.ci which has more than three hundred thousand users around the globe. I&apos;ve worked in a GraphQL API built in Node.js, a back office app written in Ruby on Rails, and clients wrote both in React (PWA) and React Native.",
      start: "Oct 2017",
      end: "Nov, 2020",
    },
    {
      company: "Personaliza Marketing",
      role: "Front-end engineer",
      description:
        "At Personaliza I worked on two products, an e-learning platform, and an ERP. I brought new technologies to the front-end team such as Angular and React while developing those platforms.",
      start: "Jul, 2015",
      end: "Jul, 2017",
    },
    {
      company: "Volts Digital",
      role: "Front-end engineer",
      description:
        "Developing the front-end of blogs and e-commerces using WordPress.",
      start: "Feb, 2014",
      end: "Jul, 2017",
    },
  ];

  return (
    <>
      <Container containerStyles="bg-amber-50 py-16">
        <Text big>
          I am a self-taught software engineer with over 8 years of experience.
        </Text>
        <Text big>
          Currently I&apos;m working at Fluency Academy building real-time
          experiences that help people to connect with language teachers.
        </Text>
        <Text big>
          Besides my full-time employment I also spent some time writing
          open-source software.
        </Text>
      </Container>
      <Container>
        <Subtitle>Projects</Subtitle>
        <div className="grid grid-rows-2 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.url} {...project} />
          ))}
        </div>
      </Container>
      <Container>
        <Subtitle>Work</Subtitle>
        <ul className="flex flex-col gap-8">
          {work.map((work) => (
            <WorkCard key={work.company} {...work} />
          ))}
        </ul>
      </Container>
    </>
  );
}
