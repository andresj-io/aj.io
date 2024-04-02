import Link from "next/link";
import React from "react";
import { experience } from "../data/experience";

const Experience: React.FC = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {experience.map((item, index) => (
        <li key={index}>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="inherit"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={
              index % 2 !== 0
                ? "timeline-end mb-10"
                : "timeline-start md:text-end"
            }
          >
            <time className="font-mono italic">{item.date}</time>
            <div className="text-2xl ">{item.role}</div>
            <div className="text-base font-bold">{item.company}</div>
            <div
              className={`text-lg font-semibold ${item.link ? "link-info" : ""}`}
            >
              {item.link ? (
                <Link href={item.link} target="_blank">
                  {item.project}
                </Link>
              ) : (
                <span>{item.project}</span>
              )}
            </div>
            {item.details.map((detail, detailIndex) => (
              <p key={detailIndex} className="text-sm">
                {detail}
              </p>
            ))}
          </div>
          {index !== experience.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};

export default Experience;
