import React from "react";

const SkillsCard = ({ children, title, className = "", divClassName = "" }) => {
  return (
    <div className={`rounded-xl p-6 ${className}`}>
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <div className={`flex flex-wrap gap-2 ${divClassName}`}>{children}</div>
    </div>
  );
};

export default SkillsCard;
