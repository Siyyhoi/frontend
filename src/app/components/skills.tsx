'use client';

type Skill = {
  name: string;
  href: string;
};

const skills: Skill[] = [
  { name: 'HTML', href: 'https://developer.mozilla.org/docs/Web/HTML' },
  { name: 'CSS', href: 'https://developer.mozilla.org/docs/Web/CSS' },
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { name: 'React', href: 'https://react.dev/' },
  { name: 'Tailwind', href: 'https://tailwindcss.com/' },
];

function SkillIcon({ name }: { name: string }) {
  // Minimal inline SVG icons to avoid external dependencies
  const common = 'w-6 h-6';
  switch (name) {
    case 'HTML':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path fill="#E34F26" d="M3 2l1.7 19.4L12 22l7.3-1.6L21 2H3z"/>
          <path fill="#FFF" d="M12 4v14.6l5.9-1.3L18.8 4H12z" opacity=".2"/>
        </svg>
      );
    case 'CSS':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path fill="#1572B6" d="M3 2l1.7 19.4L12 22l7.3-1.6L21 2H3z"/>
          <path fill="#FFF" d="M12 4v14.6l5.9-1.3L18.8 4H12z" opacity=".2"/>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontFamily="Verdana" fill="#fff">TS</text>
        </svg>
      );
    case 'React':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="10" ry="4"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
          </g>
        </svg>
      );
    case 'Tailwind':
      return (
        <svg viewBox="0 0 48 48" className={common} aria-hidden>
          <path fill="#38BDF8" d="M24 10c-7 0-9 5-10 7 2-2 5-3 8-2 2 1 3 3 5 5 2 2 4 3 7 3 7 0 9-5 10-7-2 2-5 3-8 2-2-1-3-3-5-5-2-2-4-3-7-3zm-10 14c-7 0-9 5-10 7 2-2 5-3 8-2 2 1 3 3 5 5 2 2 4 3 7 3 7 0 9-5 10-7-2 2-5 3-8 2-2-1-3-3-5-5-2-2-4-3-7-3z"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#e5e7eb"/>
        </svg>
      );
  }
}

export default function Skills() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3">
      {skills.map((skill) => (
        <a
          key={skill.name}
          href={skill.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          title={skill.name}
          aria-label={skill.name}
        >
          <SkillIcon name={skill.name} />
          <span className="text-sm text-gray-700">{skill.name}</span>
        </a>
      ))}
    </div>
  );
}


