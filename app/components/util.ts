// Things like this should be integrated into Prisma models. Come back to this.
export const getInitials = (name?: string) => {
  if (!name) return;

  return name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");
};
