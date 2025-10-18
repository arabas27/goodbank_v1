import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GoodBank | Information Board" },
    {
      name: "description",
      content:
        "Stay current with daily announcements and scheduled updates from the GoodBank administration team.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
