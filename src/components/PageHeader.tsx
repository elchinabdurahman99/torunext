import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative mesh grain overflow-hidden">
      <div className="shell relative pt-16 lg:pt-24 pb-12 lg:pb-16">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display text-[clamp(2.4rem,6vw,4.5rem)] mt-5 max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className="lead text-lg mt-6 max-w-2xl">{lead}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
