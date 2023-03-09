import { json } from "@remix-run/server-runtime";

export async function getQuestById(token: string, questId?: string) {
  if (!questId) return false;
  try {
    const req = await fetch(`http://localhost:3000/api/quests/${questId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    });
    return await req.json();
  } catch (error) {
    console.error(error);
    return json({ error: "Invalid credentials" }, { status: 401 });
  }
}
