import { SkillCategory, Proficiency } from '@/types';

export const CATEGORY_COLORS: Record<SkillCategory, string> = {
  frontend: '#6366f1',
  backend: '#0ea5e9',
  devops: '#f59e0b',
  data: '#10b981',
  design: '#ec4899',
  management: '#8b5cf6',
};

export const PROFICIENCY_COLORS: Record<Proficiency, string> = {
  learning: '#f59e0b',
  familiar: '#3b82f6',
  expert: '#10b981',
};

export const PROFICIENCY_LABELS: Record<Proficiency, string> = {
  learning: 'Learning',
  familiar: 'Familiar',
  expert: 'Expert',
};
