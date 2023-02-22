import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";

interface Props {
  label: string;
  name: string;
  className?: string;
  type?: string;
  placeholder: string;
}

export const FormField = ({ type, label, name, className, placeholder }: Props) => {
  return (
    <div className={`flex max-w-[360px] flex-col gap-2 ${className}`}>
      <Label label={label} htmlFor={name} />
      <Input placeholder={placeholder} type={type} label={label} name={name} />
    </div>
  );
};
