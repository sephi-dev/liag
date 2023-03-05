import { getQuestById } from "@/api/get-quest";
import { getUserSession } from "@/session.server";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";
import { json } from "react-router";

export const loader = async ({ request, params }: LoaderArgs) => {
  const userSession = await getUserSession(request);
  if (!userSession) return redirect("/login");
  const req = await getQuestById(userSession.token, params?.questId);
  return json(req);
};

export default function Quest() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return <div>{data.title}</div>;
}
