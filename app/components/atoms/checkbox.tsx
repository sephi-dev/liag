import * as Checkbox from "@radix-ui/react-checkbox";

interface Props {
  id: string;
}

export const CustomCheckbox = ({ id }: Props) => (
  <Checkbox.Root
    className="flex h-[16px] w-[16px] items-center justify-center rounded border border-[#363636] bg-transparent"
    id={id}>
    <Checkbox.Indicator className="flex h-full w-full items-center justify-center bg-[#363636]">
      <img
        className="h-[10px] w-[10px]"
        src="/assets/icons/checked.svg"
        alt="checked icon"
      />
    </Checkbox.Indicator>
  </Checkbox.Root>
);
