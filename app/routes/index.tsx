import type { ActionArgs } from "@remix-run/server-runtime";
import { Form } from "@remix-run/react";
import { json } from "@remix-run/node";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();

  try {
    const req = await fetch("http://localhost:3000/api/quests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.get("name"),
      }),
    });
    return json(req);
  } catch (error) {
    console.log(error);
  }
};

export default function Index() {
  return (
    <>
      <Form method={"post"}>
        <input type="text" name={"name"} />
        <button type={"submit"}>Soumettre</button>
      </Form>
    </>
  );
}
