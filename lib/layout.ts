import { Person, Skill } from '@/types';
import { Node } from 'reactflow';

export function buildNodes(people: Person[], skills: Skill[], selectedId: string | null): Node[] {
  const personNodes: Node[] = people.map((p, i) => ({
    id: `person-${p.id}`,
    type: 'personNode',
    position: { x: 80, y: 80 + i * 140 },
    data: { ...p, selected: selectedId === `person-${p.id}` },
  }));

  const skillNodes: Node[] = skills.map((s, i) => ({
    id: `skill-${s.id}`,
    type: 'skillNode',
    position: { x: 520, y: 80 + i * 110 },
    data: { ...s, selected: selectedId === `skill-${s.id}` },
  }));

  return [...personNodes, ...skillNodes];
}
