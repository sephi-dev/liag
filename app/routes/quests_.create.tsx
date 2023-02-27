import { Form } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json, useActionData } from "react-router";
import { getUserSession } from "@/session.server";
import { PrimaryButton, SecondaryButton } from "@/components/atoms/button";
import {
  PrimaryInputField,
  SecondaryInputField,
  TextAreaInputField,
} from "@/components/molecules/input-field";
import { SelectField } from "@/components/molecules/select-field";

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
      <Form
        method={"post"}
        className="mx-auto flex w-[400px] flex-col gap-5 rounded border border-[#363636] p-5">
        <h2 className="text-[24px]">New quest</h2>
        <PrimaryInputField
          label="Title"
          type="text"
          name="title"
          placeholder="Title of the quest..."
        />
        <SelectField
          name="category"
          label="Category"
          placeholder="Select a category"
        />
        <div className="flex max-w-[360px] items-center justify-between">
          <div className="flex">
            <img src="/assets/icons/flag.svg" alt="" />
            <SecondaryInputField
              label=""
              name="tasks"
              placeholder="Add new tasks"
            />
          </div>
          <SecondaryButton
            className="flex h-10 items-center text-[14px]"
            name="Add task"
            type="submit"
          />
        </div>
        <div className="flex gap-5">
          <PrimaryInputField
            name="gold"
            label="Golds Earned"
            placeholder="0"
            unit="Gold"
          />
          <PrimaryInputField
            name="xp"
            label="Xp Earned"
            placeholder="0"
            unit="Xp"
          />
        </div>
        <TextAreaInputField
          label="Description"
          placeholder="Add a description..."
          name="description"
        />
        <PrimaryButton className="" type="submit" name="CREATE" />
      </Form>
    </div>
  );
}
