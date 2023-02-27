import { PrimaryInput, SecondaryInput, TextAreaInput } from "@/atoms/input";
import { Label } from "@/atoms/label";

interface Props {
  label: string;
  name: string;
  className?: string;
  type?: string;
  placeholder: string;
  unit?: string;
}

export const PrimaryInputField = ({
  type,
  label,
  name,
  className,
  placeholder,
  unit,
}: Props) => {
  return (
    <div className={`relative flex max-w-[360px] flex-col gap-2 ${className}`}>
      <Label label={label} htmlFor={name} />
      <PrimaryInput
        unitClass="text-[14px] absolute top-[50%] translate-y-[4px] right-[12px] "
        placeholder={placeholder}
        type={type}
        name={name}
        unit={unit}
      />
    </div>
  );
};

export const SecondaryInputField = ({
  type,
  name,
  className,
  placeholder,
}: Props) => {
  return (
    <div className={`flex max-w-[360px] flex-col gap-2 ${className}`}>
      <SecondaryInput placeholder={placeholder} type={type} name={name} />
    </div>
  );
};

export const TextAreaInputField = ({
  type,
  label,
  name,
  className,
  placeholder,
}: Props) => {
  return (
    <div className={`flex max-w-[360px] flex-col gap-2 ${className}`}>
      <Label label={label} htmlFor={name} />
      <TextAreaInput placeholder={placeholder} type={type} name={name} />
    </div>
  );
};
