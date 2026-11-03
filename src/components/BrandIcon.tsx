import { Anvil, Blocks, Bone, Boxes, Columns3, Github, Instagram, KeyRound, Linkedin, Network, PanelsTopLeft, Pickaxe, Puzzle } from 'lucide-react';

const assets: Record<string, string> = {
  'Node.js': 'nodejs', Java: 'java', 'Java 21': 'java', 'Spring Boot': 'spring',
  MySQL: 'mysql', MongoDB: 'mongodb', GraphQL: 'graphql', React: 'react', Git: 'git', Docker: 'docker', Angular: 'angular',
};
const symbols = {
  Strapi: Blocks, REST: Network, JWT: KeyRound, NeoForge: Anvil, GeckoLib: Bone, Blockbench: Boxes,
  Minecraft: Pickaxe, 'UI/UX': PanelsTopLeft, Plugins: Puzzle, 'Scrum / Kanban': Columns3,
  GitHub: Github, LinkedIn: Linkedin, Instagram,
};
export function BrandIcon({ name }: { name: string }) {
  const asset = assets[name];
  if (asset) return <span className="brand-glyph" aria-hidden="true" style={{ maskImage: `url(/icons/${asset}.svg)`, WebkitMaskImage: `url(/icons/${asset}.svg)` }} />;
  if (name === 'Pixelmon') return <svg className="brand-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h6m6 0h6" /><circle cx="12" cy="12" r="3" /></svg>;
  const Icon = symbols[name as keyof typeof symbols] ?? Boxes;
  return <Icon className="brand-glyph" strokeWidth={1.6} aria-hidden="true" />;
}
export function IconBadge({ name, label = name }: { name: string; label?: string }) {
  return <span className="icon-badge" role="img" aria-label={label} data-tooltip={label} tabIndex={0}><BrandIcon name={name} /></span>;
}
