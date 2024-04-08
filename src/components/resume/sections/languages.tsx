import { languages } from "@/data/resume/languages";
import React from "react";

const Languages = () => {
  return (
    <div className="carousel rounded bg-neutral mb-2 space-x-2 p-2 flex justify-center">
      <div className="stats stats-horizontal shadow">
        {languages.map((language, index) => (
          <div key={index} className="stat">
            <div className="stat-title text-info flex justify-center">
              {language.profficiency}
            </div>
            <div className="stat-value my-1 text-primary">
              {language.language}
            </div>
            <div className="stat-desc my-1 justify-center items-center flex ">
              {language.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
