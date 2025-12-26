export type Role = "ADMIN" | "STAFF" | "RECEPTION";

export const roleLabels: Record<Role, string> = {
  ADMIN: "Admin",
  STAFF: "Fodrász",
  RECEPTION: "Recepció"
};

export function canManageAll(role?: Role) {
  return role === "ADMIN" || role === "RECEPTION";
}

export function canEditSettings(role?: Role) {
  return role === "ADMIN";
}
