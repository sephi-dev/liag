import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

const SelectItems = ["Primary", "Secondary", "Optionnel"];

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const CustomSelect = ({
  value,
  onChange,
  name,
  placeholder,
  disabled,
}: Props) => (
  <Select.Root>
    <Select.Trigger className="w-fill flex h-10 items-center justify-between rounded border border-[#363636] bg-[#1E1E1E] p-2.5 text-[14px] text-slate-50 placeholder:text-[#9F9F9F] focus:border-0 focus:outline-none">
      <Select.Value placeholder={placeholder} />
      <Select.Icon>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="flex flex-col justify-center rounded border border-[#363636] bg-[#1e1e1e] p-3">
          {SelectItems.map(item => (
            <Select.Item
              className="flex h-8 cursor-pointer items-center rounded p-2 radix-highlighted:bg-[#363636] radix-highlighted:hover:outline-none"
              key={item}
              value={item}>
              <Select.ItemText className="h-4">{item}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
