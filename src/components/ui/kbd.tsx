import clsx from "clsx";
import { Command } from "lucide-react";

type Type = "command";

const renderIcon = (type: Type): React.ReactNode => {
  switch (type) {
    case "command":
      return <Command size={12} />;
  }
};

export const KBD = ({
  children,
  className = "",
  type,
}: {
  children: React.ReactNode;
  className?: string;
  type?: Type;
}) => {
  return (
    <div
      className={clsx(
        `flex items-center gap-1 rounded-sm border text-neutral-400 hover:text-neutral-300 cursor-pointer transition-all bg-white dark:bg-black px-[8px] py-[2px] ${className}`,
      )}
    >
      {type && renderIcon(type)}
      <span className="font-medium text-sm uppercase">{children}</span>
    </div>
  );
};
