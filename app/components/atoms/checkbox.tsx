import * as Checkbox from "@radix-ui/react-checkbox";

export const CustomCheckbox = () => (
  <Checkbox.Root className="flex h-[16px] w-[16px] items-center justify-center rounded border border-[#363636] bg-transparent">
    <Checkbox.Indicator className="flex h-full w-full items-center justify-center bg-[#363636]">
      <img src="/assets/icons/checked.svg" alt="checked icon" />
    </Checkbox.Indicator>
  </Checkbox.Root>
);
