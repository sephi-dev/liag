import { useOutlet } from "react-router";

export default function Quests() {
  const outlet = useOutlet();
  return (
    <div>
      <aside>menu</aside>
      {outlet}
    </div>
  );
}
