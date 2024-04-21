import React from "react";
import { skills } from "@/data/resume/skills";

const Skills: React.FC = () => {
  return (
    <div className="carousel flex rounded mb-2 max-w-full space-x-2 p-2">
      <div className="stats stats-horizontal shadow">
        {skills.map((item, index) => (
          <div key={index} className="stat">
            <div className="stat-title">{item.title}</div>
            <div className="stat-value">{item.value}</div>
            <div className="stat-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

{
  /* <div className="stat">
  <div className="stat-title">C</div>
  <div className="stat-value">6 months</div>
  <div className="stat-desc">↗︎ 400 (22%)</div>
</div>

<div className="stat">
  <div className="stat-title">6 months</div>
  <div className="stat-value">JS</div>
  <div className="stat-desc">↘︎ 90 (14%)</div>
</div> */
}
