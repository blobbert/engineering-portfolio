// Edit your personal information here.
export const siteConfig = {
  name: 'George Xue',
  tagline: 'Mechanical Engineering student at the University of Toronto · Mech 2T9 + PEY.',
  description: 'Mechanical Engineering student at the University of Toronto exploring aircraft, robotics, and practical design through CAD, prototyping, and electronics.',
  eyebrow: 'Engineering portfolio',
  footerText: 'George Xue · Engineering portfolio',
  location: 'Toronto, Canada',
  // Paths here are relative to public/. Leave photo null to hide it.
  photo: null as null | { src: string; alt: string },
  ogImage: '/images/george-xue-social.png',
  ogImageAlt: 'George Xue — Mechanical Engineering at the University of Toronto. Aircraft, robotics, and practical design.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'About', href: '/about/' },
  ],
  // Add actual URLs to show contact links; empty URLs are hidden.
  socialLinks: [
    { label: 'Email', text: 'george.xue2007@hotmail.com', href: 'mailto:george.xue2007@hotmail.com' },
    { label: 'Phone', text: '+1 (647) 612-0838', href: 'tel:+16476120838' },
    { label: 'GitHub', text: 'GitHub', href: '' },
    { label: 'LinkedIn', text: 'LinkedIn', href: 'https://www.linkedin.com/in/george-xue-2640b1384/' },
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
    bio: [
      'I’m a second-year Mechanical Engineering student at U of T with an interest in autonomous drones and robotics. As part of the University of Toronto Aerospace Team’s Unmanned Aerial Systems division, I help build our aircraft for the SAE Aero Design competition. My work includes building the fuselage, designing smaller aircraft components, creating laser-cutting templates, and 3D printing parts.',
      'I enjoy the creativity of turning ideas into practical designs, whether for our aircraft or everyday improvements around the house. Outside of engineering projects, I mentor younger students and have taught with Jr. DEEP Engineering Outreach to help spark their interest in STEM.',
    ],
    skills: [
      '2D & 3D CAD — SolidWorks, AutoCAD',
      'Machining — mills & lathes',
      'Rapid prototyping & 3D printing',
      'Engineering analysis & testing',
      'Soldering & circuit design',
      'Project management & team communication',
    ],
    // Add entries to display the optional experience section.
    timeline: [] as { date: string; title: string; description: string }[],
  },
};
