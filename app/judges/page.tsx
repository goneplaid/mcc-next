import Link from "next/link";
import prisma from "@/prisma/client";

/*
This page

On this page we'll display all of the judges that have appeared on the show,
listed in descending order from who has had the most season-appearances.

The list should consist of a large, page-wide card for each judge with the 
following content:
  * Judge avatar
  * Name
  * Number of seasons
  * Card grid of seasons they appeared on
*/

export default async function Judges() {
  const judges = await prisma.season.findMany({
    orderBy: [
      {
        seasonNumber: "asc",
      },
    ],
  });

  return (
    <>
      <h1 className="mb-4">MasterChef Judges</h1>
    </>
  );
}
