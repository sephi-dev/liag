import type { ActionArgs } from "@remix-run/server-runtime";
import { Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Input } from "@/components/input";
import { createUserSession } from "@/session.server";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const formData = Object.fromEntries(body.entries());
  try {
    const req = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    });
    const data = await req.json();
    if (data.errors) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    } else {
      return createUserSession({ request, data });
    }
  } catch (error) {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }
};

export default function Login() {
  return (
    <Form method={"post"}>
      <Input label={"Email"} name={"email"} type={"email"} />
      <Input label={"Password"} name={"password"} type={"password"} />
      <button type={"submit"}>Connexion</button>
    </Form>
  );
}
