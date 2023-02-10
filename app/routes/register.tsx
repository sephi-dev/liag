import type { ActionArgs } from "@remix-run/server-runtime";
import { Form } from "@remix-run/react";
import { Input } from "@/components/input";
import { redirect } from "@remix-run/server-runtime";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const formData = Object.fromEntries(body.entries());
  try {
    const req = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    });
    return redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

export default function Register() {
  return (
    <>
      <Form method={"post"}>
        <Input label={"Email"} name={"email"} type={"email"} />
        <Input label={"Password"} name={"password"} type={"password"} />
        <Input label={"First name"} name={"firstName"} />
        <Input label={"Last name"} name={"lastName"} />

        <button type={"submit"}>Soumettre</button>
      </Form>
    </>
  );
}
