// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projectData";
import HeroCard from "@/app/components/card/HeroCard";
import CTASection from "@/app/components/card/CTASection";

// Statically generate paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Correct type and implementation (no Promise)
export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen">
      <HeroCard
        heading={project.title}
        subheading={project.description}
        bgImg={project.image}
      />

      <div className="main-div py-10 px-4 flex flex-col sm:flex-row justify-center gap-10">
        <div className="description p-2 sm:w-1/2">{project.longDescription}</div>
        <div className="image p-2 sm:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg object-cover aspect-square"
          />
          <p className="text-lg font-bold text-gray-500 flex items-center gap-2 p-4">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {project.location}
          </p>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
