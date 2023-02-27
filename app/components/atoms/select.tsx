import * as Select from "@radix-ui/react-select";

export const CustomSelect = () => {
  const options = [{ value: "1" }, { value: "2" }, { value: "3" }];
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {options.map(option => (
              <Select.Item key={option.value} value={option.value}>
                <Select.ItemText>{option.value}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
