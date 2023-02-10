import { useRef } from "react";

interface Props {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  type?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

export const Input = ({
  label,
  value,
  onChange,
  name,
  type,
  className,
  required,
  disabled,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={className}>
      <div className="relative">
        <input
          type={type}
          required={required}
          ref={ref}
          name={name}
          id={name}
          className="text-16 font-semiBold lg:text-12 peer block w-full appearance-none rounded bg-[#F3F2F5] px-20 pb-[15px] pt-[25px] text-black focus:outline-none focus:ring-1 focus:ring-[#C5C5C5] disabled:cursor-not-allowed"
          placeholder=" "
          onChange={e => onChange?.(e.target.value)}
          value={value}
          disabled={disabled}
        />
        <label
          htmlFor={name}
          className="text-12 font-semiBold absolute top-4 left-[20px] z-10 origin-[0] -translate-y-[10px] scale-75 transform text-black duration-300 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[10px] peer-focus:scale-75 peer-focus:text-[#A9A9A9]">
          {label}
        </label>
      </div>
    </div>
  );
};
