'use client';
import { Handle, Position, NodeProps } from 'reactflow';
import { CATEGORY_COLORS } from '@/lib/constants';
import { SkillCategory } from '@/types';
import styles from './SkillNode.module.css';

export default function SkillNode({ data }: NodeProps) {
  const color = CATEGORY_COLORS[data.category as SkillCategory] ?? '#94a3b8';

  return (
    <div
      className={`${styles.node} ${data.selected ? styles.selected : ''}`}
      style={{ '--skill-color': color } as React.CSSProperties}
    >
      <Handle type="target" position={Position.Left} className={styles.handle} />
      <div className={styles.dot} />
      <div className={styles.info}>
        <span className={styles.name}>{data.name}</span>
        <span className={styles.category}>{data.category}</span>
      </div>
    </div>
  );
}
