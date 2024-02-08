import SeasonCard from "./SeasonCard";
import prisma from "@/prisma/client";

export default async function Home() {
  const seasons = await prisma.season.findMany();

  return (
    <>
      <h1>Browse Seasons</h1>
      {seasons.map((season, key) => {
        return <SeasonCard key={key}>{season.name}</SeasonCard>;
      })}
    </>
  );
}
