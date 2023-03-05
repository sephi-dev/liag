import { DefaultPageLayout } from "@/components/templates/default-layout";
import { useOutlet } from "react-router";

export default function Quests() {
  const outlet = useOutlet();
  return (
    <div className="flex h-screen">
      <div className="h-full w-[256px] bg-[#171717]"></div>
      <DefaultPageLayout title="Quests">
        <div className="flex h-full max-w-[1024px] rounded border border-[#363636]">
          <aside className="w-[30%]"></aside>
          <div className=" w-[70%] p-9">{outlet}</div>
        </div>
      </DefaultPageLayout>
    </div>
  );
}
