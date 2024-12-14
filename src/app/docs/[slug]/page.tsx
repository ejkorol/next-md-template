import { getDocs } from "@/lib/docs";

export async function generateStaticParams() {
  const entries = getDocs();
  return entries.map((entry) => ({ slug: entry.slug }));
}

const Entry = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const entry = getDocs().find((doc) => doc.slug === slug);

  if (!entry) {
    return <section>404</section>;
  }

  return (
    <section>
      <p>{slug}</p>
      <article className="prose">{entry.content}</article>
    </section>
  );
};

export default Entry;
