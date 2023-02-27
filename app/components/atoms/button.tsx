interface Props {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ name, type }: Props) => {
  return <button type={type}>{name}</button>;
};
