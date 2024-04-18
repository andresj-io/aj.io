import React from "react";
import BadgeCard from "./badgeCard";
import { badges } from "@/data/resume/badges";

const Badges = () => {
  const sortedBadges = badges.sort(
    (a, b) => b.issuingDate.getTime() - a.issuingDate.getTime(),
  );
  return (
    <div className="carousel bg-neutral flex rounded space-x-2 p-2 gap-2">
      {sortedBadges.map((badge) => (
        <BadgeCard badge={badge} key={badge.id} />
      ))}
    </div>
  );
};

export default Badges;
