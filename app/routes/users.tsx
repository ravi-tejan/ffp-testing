import type { Route } from "./+types/users";
import { Users } from "../components/users/users";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function UsersPage() {
  return <Users />;
}