export type Role = "ADMIN" | "STAFF" | "RECEPTION";

export const hasAccess = (role: Role | undefined, allowed: Role[]) =>
  role ? allowed.includes(role) : false;
