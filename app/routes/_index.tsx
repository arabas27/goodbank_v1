import type { Route } from "./+types/_index";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GoodBank | กระดานข้อมูล" },
    {
      name: "description",
      content:
        "ติดตามประกาศประจำวันและอัปเดตตามกำหนดการจากทีมผู้ดูแลของ GoodBank",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
