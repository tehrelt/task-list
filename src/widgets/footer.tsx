import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Footer = ({ className }: Props) => {
  return (
    <footer className={cn("w-full", className)}>
      <p>&copy; Copyright 2025</p>
    </footer>
  );
};
