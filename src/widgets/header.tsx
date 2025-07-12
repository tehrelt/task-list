import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => {
  return (
    <header className={cn("w-full", className)}>
      <h1 className="text-2xl font-bold">Task List</h1>
    </header>
  );
};
