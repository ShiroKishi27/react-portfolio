import React from "react";

const SkillsBadge = ({ label }) => {
  return (
    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
      {label}
    </span>
  );
};
export default SkillsBadge;
