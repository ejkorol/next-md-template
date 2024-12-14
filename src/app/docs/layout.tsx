const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>header</div>
      <article>{children}</article>
      <div>footer</div>
    </div>
  );
};

export default DocsLayout;
