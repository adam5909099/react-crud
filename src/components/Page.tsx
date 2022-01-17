import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Page({ title, children }: Props) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl">{title}</h1>
      <div className="mt-8">{children}</div>
    </div>
  );
}
