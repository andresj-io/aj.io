import React from "react";
import { education } from "../data/education";

const Education: React.FC = () => {
  return (
    <div>
      {education.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <h4 className="mb-1 text-gray-600">{item.institue}</h4>
          <p className="mb-2 text-sm text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
