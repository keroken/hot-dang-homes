import Link from "next/link";

export const ButtonLink = ({label, destination}) => {
  return (
    <Link href={destination} className="btn">
      {label}
    </Link>
  );
};