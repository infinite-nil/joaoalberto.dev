import { getProfileData } from "@/data/getProfileData";
import { Container } from "@/ui/components/container";
import { Link } from "@/ui/components/link";
import { ProjectCard } from "@/ui/components/project-card";
import { Subtitle } from "@/ui/components/subtitle";
import { Text } from "@/ui/components/text";
import { WorkCard } from "@/ui/components/work-card";

export default function Home() {
  const projects = getProfileData("projects");
  const work = getProfileData("experience");

  return (
    <>
      <Container containerStyles="py-16" contentStyles="text-balance">
        <Text big>
          I am a self-taught software engineer with over{" "}
          <Link external decorated href="https://www.linkedin.com/in/joao-amo/">
            8 years of experience
          </Link>
          .
        </Text>
        <Text big>
          Currently I&apos;m working at{" "}
          <Link external decorated href="https://fluency.io/">
            Fluency Academy
          </Link>{" "}
          building real-time experiences that help people to connect with
          language teachers.
        </Text>
        <Text big>
          Besides my full-time employment I also spent some time writing{" "}
          <Link external decorated href="https://github.com/infinite-nil">
            open-source
          </Link>{" "}
          software.
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
