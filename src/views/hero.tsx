import clsx from "clsx";

export const Hero = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={clsx(
        `flex max-w-screen-2xl px-8 py-4 mx-auto w-full items-center justify-between px-6 ${className}`,
      )}
    >
      {children}
    </section>
  );
};
