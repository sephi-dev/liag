import type { ActionArgs } from "@remix-run/server-runtime";
import { Form } from "@remix-run/react";
import { FormField } from "@/components/molecules/form-field";
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
    <section className="flex h-screen">
      <div className="w-1/2 bg-[#121212]"></div>
      <div className=" w-1/2 bg-[#171717]">
        <Form
          method={"post"}
          className="mx-auto flex w-[360px] flex-col gap-8 pt-60">
          <div className="flex flex-row gap-6">
            <FormField placeholder="John" className="w-[168px]" label={"First name"} name={"firstName"} />
            <FormField placeholder="Do" className="w-[168px]" label={"Last name"} name={"lastName"} />
          </div>
          <FormField placeholder="adress@mail.com" label={"Email"} name={"email"} type={"email"} />
          <FormField placeholder="**********" label={"Password"} name={"password"} type={"password"} />
          <button
            className=" text-14 h-10 rounded bg-[#7369F1] font-semibold text-slate-50 hover:bg-[#554dc8]"
            type={"submit"}> Create account
          </button>
        </Form>
      </div>
    </section>
  );
}
