import React from "react";
import BadgeCard from "./badgeCard";
import { badges } from "@/data/badges";

const sortedBadges = badges.sort(
  (a, b) => b.issuingDate.getTime() - a.issuingDate.getTime(),
);

const Badges = () => {
  return (
    <div className="carousel bg-neutral rounded-box w-fit space-x-4 p-4">
      {sortedBadges.map((badge) => (
        <BadgeCard badge={badge} key={badge.id} />
      ))}
    </div>
  );
};

export default Badges;
