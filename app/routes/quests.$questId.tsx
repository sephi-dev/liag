import { getQuestById } from "@/api/get-quest";
import { CustomCheckbox } from "@/components/atoms/checkbox";
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
  return (
    <div>
      <h2 className="mb-14 text-[24px]">{data.title}</h2>
      <div className="w-[60%]">
        <h3 className="mb-5 border-b-[1px] border-[#363636] pb-[6px] text-[14px] text-[#9F9F9F]">
          Description
        </h3>
        <div className="w-[80%] text-[14px] italic leading-[22px] text-[#C8C6E4]">
          {data.description}
        </div>
      </div>
      <div className="mt-14 w-[60%]">
        <h3 className="mb-5 border-b-[1px] border-[#363636] pb-[6px] text-[14px] text-[#9F9F9F]">
          Objectifs
        </h3>
        <div className="flex w-[80%] flex-col gap-2 text-[14px]">
          {data.tasks.map((task: { id: string; title: string }) => (
            <div className="flex items-center gap-[10px]" key={task.id}>
              <CustomCheckbox id={`box${task.title}`}></CustomCheckbox>
              <label className="cursor-pointer" htmlFor={`box${task.title}`}>
                {task.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 w-[60%]">
        <h3 className="mb-5 border-b-[1px] border-[#363636] pb-[6px] text-[14px] text-[#9F9F9F]">
          Récompenses
        </h3>
        <div className="flex w-[80%] flex-col gap-2 text-[14px]">
          <p>
            {data.xp} <span className="font-bold text-[#69D0F1]">XP</span>
          </p>
          <p>
            {data.gold} <span className="font-bold text-[#E4BC2F]">Gold</span>
          </p>
        </div>
      </div>
    </div>
  );
}
