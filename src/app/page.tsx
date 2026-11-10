import { profile, experience, projects, education, skills } from './data';

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  const external = href.startsWith('http') || href.endsWith('.pdf');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`underline decoration-[var(--border-color)] underline-offset-4 transition-colors hover:text-[var(--accent-color)] hover:decoration-[var(--accent-color)] ${className}`}
    >
      {children}
    </a>
  );
}

function Section({ id, title, index, children }: { id: string; title: string; index: number; children: React.ReactNode }) {
  return (
    <section id={id} className="fade-in mt-14" style={{ animationDelay: `${index * 80}ms` }}>
      <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-[var(--secondary-text)]">{title}</h2>
      {children}
    </section>
  );
}

function Dates({ start, end }: { start: string; end: string }) {
  return (
    <span className="shrink-0 font-mono text-xs tabular-nums text-[var(--secondary-text)]">
      {start} – {end}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="fade-in">
        <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-[var(--secondary-text)]">{profile.role}</p>
        <div className="mt-6 space-y-4 leading-relaxed">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {profile.links.map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </nav>
      </header>

      <Section id="experience" title="Experience" index={1}>
        <ol className="space-y-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-medium">
                  {job.href ? <ExternalLink href={job.href}>{job.company}</ExternalLink> : job.company}
                </h3>
                <Dates start={job.start} end={job.end} />
              </div>
              <p className="text-sm text-[var(--secondary-text)]">
                {job.role} · {job.location}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="relative pl-4 before:absolute before:left-0 before:text-[var(--secondary-text)] before:content-['–']">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="projects" title="Projects" index={2}>
        <ul className="space-y-7">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{project.name}</h3>
                <div className="flex shrink-0 gap-3 text-sm">
                  {project.links.map((link) => (
                    <ExternalLink key={link.label} href={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed">{project.description}</p>
              <p className="mt-2 font-mono text-xs text-[var(--secondary-text)]">
                {project.year} · {project.stack.join(' · ')}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-sm text-[var(--secondary-text)]">
          More on <ExternalLink href="https://github.com/rivanjarjes">GitHub</ExternalLink>.
        </p>
      </Section>

      <Section id="education" title="Education" index={3}>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-medium">{education.school}</h3>
          <Dates start={education.start} end={education.end} />
        </div>
        <p className="text-sm text-[var(--secondary-text)]">{education.degree}</p>
        <ul className="mt-3 space-y-1.5 text-sm">
          {education.details.map((detail) => (
            <li key={detail} className="relative pl-4 before:absolute before:left-0 before:text-[var(--secondary-text)] before:content-['–']">
              {detail}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills" index={4}>
        <dl className="space-y-2 text-sm">
          {skills.map((group) => (
            <div key={group.label} className="grid grid-cols-1 gap-0.5 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
              <dt className="text-[var(--secondary-text)]">{group.label}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="mt-20 border-t border-[var(--border-color)] pt-6 font-mono text-xs text-[var(--secondary-text)]">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </main>
  );
}
