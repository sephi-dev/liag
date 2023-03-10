interface Props {
  label: string;
  htmlFor: string;
}

export const Label = ({ label, htmlFor }: Props) => {
  return (
    <label className="text-[14px] font-normal text-slate-50" htmlFor={htmlFor}>
      {label}
    </label>
  );
};
