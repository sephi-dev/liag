import { getQuestById } from "@/api/get-quest";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "react-router";

export const loader = async ({ params }: LoaderArgs) => {
  const req = await getQuestById(params?.questId);
  return json(req);
};

export default function Quest() {
  const data = useLoaderData<typeof loader>();
  return <div>Quest {data.title}</div>;
}
