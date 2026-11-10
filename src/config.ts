// Edit your personal information here. All text below is placeholder content.
export const siteConfig = {
  name: "Jiajie's Portfolio",
  tagline: 'Your engineering focus, in one sentence.',
  description: "Jiajie's engineering portfolio.",
  eyebrow: 'Engineering portfolio',
  footerText: "Jiajie's Portfolio · Engineering portfolio",
  // Paths here are relative to public/. Leave photo null to hide it.
  photo: null as null | { src: string; alt: string },
  ogImage: '/images/social-placeholder.png',
  nav: [
    { label: 'Projects', href: '/' },
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
    bio: 'Add a short bio here: your engineering interests, what you enjoy working on, and what you want to learn next.',
    skills: ['Add a skill', 'Add a tool', 'Add an area of interest'],
    // Add entries to display the optional experience section.
    timeline: [] as { date: string; title: string; description: string }[],
  },
};
