import { json } from "@remix-run/server-runtime";

export async function getCategoryById(token: string, categoryId?: string) {
  if (!categoryId) return false;
  try {
    const req = await fetch(
      `http://localhost:3000/api/categories/${categoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
      },
    );
    return await req.json();
  } catch (error) {
    console.error(error);
    return json({ error: "Invalid credentials" }, { status: 401 });
  }
}
