import { getProfileData } from "@/data/getProfileData";
import { Container } from "@/ui/components/container";
import { ProjectCard } from "@/ui/components/project-card";
import { Subtitle } from "@/ui/components/subtitle";
import { Text } from "@/ui/components/text";
import { WorkCard } from "@/ui/components/work-card";

export default function Home() {
  const projects = getProfileData("projects");
  const work = getProfileData("experience");

  return (
    <div className="grid grid-cols-1 lg:mx-auto lg:max-w-6xl lg:grid-cols-2">
      <Container containerStyles="col-span-1" contentStyles="md:text-balance">
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
      <Container containerStyles="lg:col-start-2">
        <Subtitle>Projects</Subtitle>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.url} {...project} />
          ))}
        </div>
      </Container>
      <Container containerStyles="lg:col-start-2">
        <Subtitle>Work</Subtitle>
        <ul className="flex flex-col gap-8">
          {work.map((work) => (
            <WorkCard key={work.company} {...work} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
