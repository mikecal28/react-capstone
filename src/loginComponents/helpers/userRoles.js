import withAuth from "../core/withAuth";

export const StandardUser = withAuth([
  "admin",
  "user",
  "standard",
  "super-admin",
]);
export const AdminUser = withAuth(["admin", "super-admin"]);
