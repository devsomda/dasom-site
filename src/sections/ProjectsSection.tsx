import { projectData } from "@/data/projects.data";
import MainSection from "@/components/ui/MainSection";
import Link from "next/link";

export default function ProjectsSection() {
  const { projects } = projectData;

  return (
    <MainSection>
      <h2 className="text-3xl font-semibold">Projects</h2>
      <hr className="mt-2 w-full border-gray-200" />

      <div className="space-y-4 overflow-y-auto">
        {/* 프로젝트 카드 */}
        {projects.map((project) => (
          <article
            key={project.name}
            className="p-4 border border-border rounded-lg shadow-sm "
          >
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-sm ">
              {project.period} | {project.company}
            </p>
            {project.serviceLink && (
              <p>
                서비스 링크:{" "}
                <Link
                  href={project.serviceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  {project.serviceLink}
                </Link>
              </p>
            )}
            {project.otherLink && (
              <p>
                소개 링크{" "}
                <Link
                  href={project.otherLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  바로가기
                </Link>
              </p>
            )}
            {project.githubLink && (
              <p>
                GitHub{" "}
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  바로 가기
                </Link>
              </p>
            )}
            <p className="mt-2">{project.description}</p>
            <ul className="list-disc list-inside mt-2 text-sm ">
              {project.subDescription.map((subDescription) => (
                <li key={subDescription}>{subDescription}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {/* <Link href="/projects">더 보기</Link> */}
    </MainSection>
  );
}
