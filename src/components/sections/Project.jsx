import AnimateOnScroll from "../AnimateOnScroll";
import SkillsBadge from "../SkillsBadge";
import { ProjectsCard } from "../ProjectsCard";
import { projects } from "../ProjectData";

function Project() {
  return (
    <section
      id="project"
      className="relative flex min-h-screen items-center justify-center py-20"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-5xl px-6 py-1">
          <h2 className="mb-8 bg-linear-to-r from-blue-800 to-cyan-300 bg-clip-text text-center text-3xl font-bold text-transparent">
            Featured Project
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((item) => (
              <ProjectsCard
                key={item.id}
                title={item.title}
                description={item.description}
                skills={item.skills}
                footertitle={item.footertitle}
                subtitle={item.subtitle}
                label={item.label}
                progress={item.progress}
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default Project;
