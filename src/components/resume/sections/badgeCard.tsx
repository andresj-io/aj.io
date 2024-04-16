import { BadgeType } from "@/data/resume/badges";
import Link from "next/link";
import Image from "next/image";

type BadgeCardProps = {
  badge: BadgeType;
};

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  return (
    <Link
      href={badge.link}
      target="_blank"
      rel="noopener noreferrer"
      className="carousel-item card bg-base-100 rounded-box m-1 w-60 items-center justify-center scroll-ml-2"
    >
      <Image
        src={badge.image}
        alt={badge.name}
        width={150}
        height={150}
        className="mt-5 rounded-xl"
      />
      <div className="card-body text-center">
        <h2 className="card-title">{badge.name}</h2>
        <h3 className="text-sm">
          Issuing date: {badge.issuingDate.toDateString()}
        </h3>
        <p className="italic">Issuer: {badge.issuer}</p>
      </div>
    </Link>
  );
};

export default BadgeCard;
