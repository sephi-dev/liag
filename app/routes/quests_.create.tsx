import { Form } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json, useActionData } from "react-router";
import { getUserSession } from "@/session.server";
import { InputField } from "@/components/molecules/input-field";
import { SelectField } from "@/components/molecules/select-field";
import { CustomSelect } from "@/components/atoms/select";

// export const action = async ({ request }: ActionArgs) => {
//   const userSession = await getUserSession(request);
//   try {
//     const formData = await request.formData();
//     const title = formData.get("title");
//     const description = formData.get("description");
//     // get the rest of data form
//   } catch (error) {
//     console.error(error);
//     return json({ error: "Invalid credentials" }, { status: 401 });
//   }
// };

export default function CreateQuest() {
  // const actionData = useActionData();
  return (
    <div>
      <h1>Create Quest</h1>
      <Form method={"post"} className="mx-auto w-1/2">
        <InputField
          label="Title"
          type="text"
          name="title"
          placeholder="Title of the quest..."
        />
        <InputField
          label="Description"
          type="text"
          name="description"
          placeholder="Add a description..."
        />
        <div className="relative">
          <CustomSelect />
        </div>
      </Form>
    </div>
  );
}
