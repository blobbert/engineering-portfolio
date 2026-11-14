// Edit your personal information here.
export const siteConfig = {
  name: 'Jiajie (George) Xue',
  tagline: 'Mechanical Engineering student at the University of Toronto · Mech 2T9 + PEY.',
  description: "Jiajie (George) Xue's engineering portfolio.",
  eyebrow: 'Engineering portfolio',
  footerText: 'Jiajie (George) Xue · Engineering portfolio',
  // Paths here are relative to public/. Leave photo null to hide it.
  photo: null as null | { src: string; alt: string },
  ogImage: '/images/social-placeholder.png',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'About', href: '/about/' },
  ],
  // Add actual URLs to show contact links; empty URLs are hidden.
  socialLinks: [
    { label: 'Email', href: '' }, // e.g. mailto:you@example.com
    { label: 'GitHub', href: '' },
    { label: 'LinkedIn', href: '' },
  ],
  appearance: {
    theme: 'minimal' as 'minimal' | 'blueprint' | 'earth' | 'bold',
    defaultMode: 'system' as 'system' | 'light' | 'dark',
    animations: true,
  },
  projects: {
    layout: 'grid' as 'grid' | 'list',
    columns: 2 as 1 | 2 | 3,
    showTags: true,
  },
  about: {
    bio: 'I’m interested in turning ideas into practical designs through CAD, prototyping, testing, and iteration. This portfolio is a growing collection of the projects I’ve worked on and what I learned while building them.',
    skills: ['CAD', '3D printing', 'Prototyping', 'Testing and iteration'],
    // Add entries to display the optional experience section.
    timeline: [] as { date: string; title: string; description: string }[],
  },
};
