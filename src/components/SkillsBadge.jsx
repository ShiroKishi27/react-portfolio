import React from "react";

const SkillsBadge = ({ label }) => {
  return (
    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-400">
      {label}
    </span>
  );
};
export default SkillsBadge;
