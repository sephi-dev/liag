import { useRef } from "react";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const Input = ({
  type,
  required,
  name,
  placeholder,
  onChange,
  value,
  disabled,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <input
      autoComplete="off"
      type={type}
      required={required}
      ref={ref}
      name={name}
      id={name}
      className="text-14 w-fill h-10 rounded border border-[#363636] bg-[#1E1E1E] p-2.5 text-slate-50 placeholder:text-[#9F9F9F] focus:border-0"
      placeholder={placeholder}
      onChange={e => onChange?.(e.target.value)}
      value={value}
      disabled={disabled}
    />
  );
};
