import React from "react";
import SkillsBadge from "./SkillsBadge";

function ProjectCardOverlay() {
  return (
    <>
      <div className="absolute inset-0 -z-1 rounded-xl bg-linear-to-tl from-white/30 to-transparent opacity-30"></div>
      <div className="absolute inset-0 -z-1 rounded-xl ring-1 ring-white/30"></div>
    </>
  );
}

function ProjectCardTitle({ title }) {
  return <h3 className="text-xl font-bold">{title}</h3>;
}

function ProjectCardDescription({ children }) {
  return <p className="text-gray-400">{children}</p>;
}

function ProjectCardSkills({ skills }) {
  return (
    <div className="flex gap-1">
      {skills.map((item, key) => (
        <SkillsBadge key={key} label={item} />
      ))}
    </div>
  );
}

function ProjectCardFooter({ footertitle, subtitle, label, progress }) {
  return (
    <div className="flex items-center justify-between border-t border-white/10 pt-4">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
          {" "}
          {footertitle}
        </span>
        <span className="text-sm font-medium text-blue-400"> {subtitle}</span>
      </div>

      <div className="flex flex-col items-end">
        <span
          className={`mb-1 text-[10px] font-bold ${progress === "full" ? "text-blue-500/80" : "text-yellow-500"} uppercase`}
        >
          {label}
        </span>
        <div className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
          <div
            className={`h-full w-${progress} ${progress === "full" ? "bg-blue-500/40" : "bg-yellow-500/40"} shadow-[0_0_8px_rgba(59,130,246,0.3)]`}
          ></div>
        </div>
      </div>
    </div>
  );
}

function ProjectsCard({
  title,
  description,
  skills,
  footertitle,
  subtitle,
  label,
  progress,
}) {
  return (
    <div className="flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-white/2 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-500/30">
      <ProjectCardOverlay />
      <ProjectCardTitle title={title} />
      <ProjectCardDescription>{description}</ProjectCardDescription>
      <ProjectCardSkills skills={skills} />
      <ProjectCardFooter
        footertitle={footertitle}
        subtitle={subtitle}
        label={label}
        progress={progress}
      />
    </div>
  );
}

export {
  ProjectsCard,
  ProjectCardOverlay,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardSkills,
  ProjectCardFooter,
};
