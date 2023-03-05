interface Props {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  className: string;
  onClick?: () => void;
}

export const PrimaryButton = ({ className, name, type }: Props) => {
  return (
    <button
      className={`h-10 rounded bg-gradient-to-r from-[#7369F1] to-[#a869f1] ${className}`}
      type={type}>
      {name}
    </button>
  );
};

export const SecondaryButton = ({ className, name, type, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`${className}`} type={type}>
      {name}
    </button>
  );
};
