interface Props {
  title: string;
  children: React.ReactNode;
}

export const DefaultPageLayout = ({ title, children }: Props) => {
  return (
    <section className="flex h-full w-full flex-col gap-8 p-16">
      <div>
        <h2 className="text-[24px]">{title}</h2>
      </div>
      <div className="h-full w-full">{children}</div>
    </section>
  );
};
