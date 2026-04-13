import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkillMatrix — Team Skill Graph',
  description: 'Visualize your team skills, proficiency levels, and gaps interactively.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
