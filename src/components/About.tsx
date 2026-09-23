import { ArrowRightIcon } from './Icons';
import { MotionSection } from './MotionSection';
import { SectionHeading } from './SectionHeading';

const FACTS = [
  { label: 'Focus', value: 'AI systems · Computer Vision · NLP / RAG · LLMs' },
  { label: 'Approach', value: 'Model development · Integration · Deployment' },
] as const;

export function About() {
  return (
    <MotionSection
      id="about"
      labelledBy="about-heading"
      className="border-y border-line bg-surface"
    >
      <SectionHeading id="about-heading" eyebrow="About" title="Building practical AI systems" />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3">
          <p>
            I&apos;m <span className="font-semibold text-foreground">Raafat Nagy</span>, an AI
            Engineer focused on building and deploying practical AI systems across Computer
            Vision, NLP, and LLM applications.
          </p>
          <p>
            My work spans the full development process — from model development and
            experimentation to integrating models into real applications and deployable
            systems.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-xl border border-line bg-raised p-6">
            <dl className="space-y-4">
              {FACTS.map((fact) => (
                <div key={fact.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong transition-colors hover:text-accent dark:text-accent"
            >
              Get in touch
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
