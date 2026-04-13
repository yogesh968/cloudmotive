export type Proficiency = 'learning' | 'familiar' | 'expert';

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'data' | 'design' | 'management';

export interface Person {
  id: string;
  name: string;
  role: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

export interface Connection {
  id: string;
  personId: string;
  skillId: string;
  proficiency: Proficiency;
}
