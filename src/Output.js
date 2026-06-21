import { useState } from 'react';
import { content, COMMANDS } from './content';

function SectionHeader({ title }) {
  const line = '═'.repeat(title.length + 4);
  return (
    <>
      <div className="section-header">{title}</div>
      <div className="section-divider">{line}</div>
    </>
  );
}

export function AboutOutput() {
  const { title, text } = content.about;
  return (
    <div className="output-block">
      <SectionHeader title={title} />
      {text.map((line, i) => (
        <div key={i} className="content-line cmd-gray">
          {line}
        </div>
      ))}
    </div>
  );
}

export function SkillsOutput() {
  const { title, categories } = content.skills;
  return (
    <div className="output-block">
      <SectionHeader title={title} />
      {categories.map((cat) => (
        <div key={cat.label} className="skills-category">
          <span className="skills-label">{cat.label}:</span>
          <div className="skills-items">{'  ' + cat.items.join('  |  ')}</div>
        </div>
      ))}
    </div>
  );
}

export function ExperienceOutput() {
  const { title, jobs } = content.experience;
  return (
    <div className="output-block">
      <SectionHeader title={title} />
      {jobs.map((job) => (
        <div key={job.title + job.company} className="job-block">
          <div className="job-title">{job.title}</div>
          <div className="job-meta">
            {job.company}{'  '}
            <span className="cmd-dim">[{job.dates}]</span>
          </div>
          {job.bullets.map((b, i) => (
            <div key={i} className="job-bullet content-line">{b}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ProjectsOutput() {
  const { title, items } = content.projects;
  return (
    <div className="output-block">
      <SectionHeader title={title} />
      {items.map((proj) => (
        <div key={proj.name} className="project-block">
          <div className="project-name">{proj.name}</div>
          <div className="project-desc">{proj.description}</div>
          <div className="project-stack">Stack: {proj.stack.join(', ')}</div>
          <div>
            <button
              className="project-link"
              onClick={() => window.open(proj.link, '_blank', 'noopener,noreferrer')}
            >
              {'  '}{proj.linkLabel ?? proj.link}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResumeOutput() {
  const { title, url, linkLabel } = content.resume;
  return (
    <div className="output-block">
      <SectionHeader title={title} />
      <div>
        <button
          className="project-link"
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
        >
          {linkLabel}
        </button>
      </div>
    </div>
  );
}

export function LinksOutput() {
  const { title, items } = content.links;
  return (
    <div className="output-block">
      <SectionHeader title={title} />
      {items.map((item) => (
        <div key={item.label} className="link-row">
          <span className="link-label">{item.label}:</span>
          <button
            className="link-url"
            onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
          >
            {item.url}
          </button>
        </div>
      ))}
    </div>
  );
}

export function HelpOutput() {
  return (
    <div className="output-block">
      <SectionHeader title="HELP" />
      <div className="cmd-dim" style={{ marginBottom: 10 }}>
        Tip: you can type just the first letter of any command as a shortcut.
      </div>
      {COMMANDS.map(({ cmd, shortcut, desc }) => (
        <div key={cmd} className="help-row">
          <span className="help-cmd">
            {cmd}{shortcut && <span className="cmd-dim"> ({shortcut})</span>}
          </span>
          <span className="help-desc">{desc}</span>
        </div>
      ))}
    </div>
  );
}

export function GalleryOutput() {
  const { title, photos } = content.gallery;
  const [selected, setSelected] = useState(null);
  const base = process.env.PUBLIC_URL + '/gallery/';

  return (
    <div className="output-block">
      <SectionHeader title={title} />

      <div className="gallery-grid">
        {photos.map((photo) => (
          <button
            key={photo.filename}
            className="gallery-item"
            onClick={() => setSelected(photo)}
            aria-label={`View ${photo.title}`}
          >
            <img
              src={base + photo.filename}
              alt={photo.title}
              className="gallery-thumb"
            />
            <div className="gallery-item-title">{photo.title}</div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="lightbox-backdrop" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={base + selected.filename}
              alt={selected.title}
              className="lightbox-img"
            />
            <div className="lightbox-title">{selected.title}</div>
            <div className="lightbox-caption">{selected.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ThemeOutput({ theme }) {
  const labels = { default: 'default', hacker: 'hacker', retro: 'retro' };
  return (
    <div className="output-block">
      <div className="cmd-gray">
        Theme switched to <span className="cmd-yellow">{labels[theme]}</span>.
      </div>
    </div>
  );
}

export function ErrorOutput({ command }) {
  return (
    <div className="output-block">
      <div className="cmd-error">
        '{command}' is not recognized as an internal or external command,
      </div>
      <div className="cmd-error">operable program or batch file.</div>
      <div className="cmd-dim" style={{ marginTop: 6 }}>
        Type <span className="cmd-yellow">help</span> to see available commands.
      </div>
    </div>
  );
}
