import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useMatches } from "@remix-run/react";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const CustomSelect = ({ placeholder }: Props) => {
  const matches = useMatches();
  // data coming from the root loader function
  const categories = matches.find(route => route.pathname === "/quests/create")
    ?.data.categories;

  return (
    <Select.Root name="category">
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
            {categories && (
              <div>
                {categories.docs
                  .map((category: { id: string; title: string }) => (
                    <Select.Item
                      className="flex h-8 cursor-pointer items-center rounded p-2 radix-highlighted:bg-[#363636] radix-highlighted:hover:outline-none"
                      key={category.id}
                      value={category.id}>
                      <Select.ItemText className="h-4">
                        {category.title}
                      </Select.ItemText>
                    </Select.Item>
                  ))
                  .reverse()}
              </div>
            )}
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
