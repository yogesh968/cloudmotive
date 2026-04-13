import { Person, Skill, Connection } from '@/types';

export const initialPeople: Person[] = [
  { id: 'p1', name: 'Alice Chen', role: 'Frontend Engineer' },
  { id: 'p2', name: 'Bob Martinez', role: 'Backend Engineer' },
  { id: 'p3', name: 'Carol Smith', role: 'DevOps Engineer' },
  { id: 'p4', name: 'David Kim', role: 'Data Scientist' },
  { id: 'p5', name: 'Eva Johnson', role: 'Product Designer' },
];

export const initialSkills: Skill[] = [
  { id: 's1', name: 'React', category: 'frontend' },
  { id: 's2', name: 'TypeScript', category: 'frontend' },
  { id: 's3', name: 'Node.js', category: 'backend' },
  { id: 's4', name: 'PostgreSQL', category: 'backend' },
  { id: 's5', name: 'Docker', category: 'devops' },
  { id: 's6', name: 'Kubernetes', category: 'devops' },
  { id: 's7', name: 'Python', category: 'data' },
  { id: 's8', name: 'Figma', category: 'design' },
];

export const initialConnections: Connection[] = [
  { id: 'c1', personId: 'p1', skillId: 's1', proficiency: 'expert' },
  { id: 'c2', personId: 'p1', skillId: 's2', proficiency: 'expert' },
  { id: 'c3', personId: 'p1', skillId: 's3', proficiency: 'familiar' },
  { id: 'c4', personId: 'p2', skillId: 's3', proficiency: 'expert' },
  { id: 'c5', personId: 'p2', skillId: 's4', proficiency: 'expert' },
  { id: 'c6', personId: 'p2', skillId: 's2', proficiency: 'familiar' },
  { id: 'c7', personId: 'p3', skillId: 's5', proficiency: 'expert' },
  { id: 'c8', personId: 'p3', skillId: 's6', proficiency: 'familiar' },
  { id: 'c9', personId: 'p3', skillId: 's3', proficiency: 'learning' },
  { id: 'c10', personId: 'p4', skillId: 's7', proficiency: 'expert' },
  { id: 'c11', personId: 'p4', skillId: 's4', proficiency: 'familiar' },
  { id: 'c12', personId: 'p4', skillId: 's2', proficiency: 'learning' },
  { id: 'c13', personId: 'p5', skillId: 's8', proficiency: 'expert' },
  { id: 'c14', personId: 'p5', skillId: 's1', proficiency: 'familiar' },
  { id: 'c15', personId: 'p5', skillId: 's2', proficiency: 'learning' },
];
