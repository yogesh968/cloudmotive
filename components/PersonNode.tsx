'use client';
import { Handle, Position, NodeProps } from 'reactflow';
import styles from './PersonNode.module.css';

const ROLE_COLORS: Record<string, string> = {
  'Frontend Engineer': '#6366f1',
  'Backend Engineer': '#0ea5e9',
  'DevOps Engineer': '#f59e0b',
  'Data Scientist': '#10b981',
  'Product Designer': '#ec4899',
};

export default function PersonNode({ data }: NodeProps) {
  const initials = data.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase();

  const color = ROLE_COLORS[data.role] ?? '#64748b';

  return (
    <div className={`${styles.card} ${data.selected ? styles.selected : ''}`} style={{ '--accent': color } as React.CSSProperties}>
      <div className={styles.topBar} />
      <div className={styles.body}>
        <div className={styles.avatar} style={{ background: color }}>{initials}</div>
        <div className={styles.info}>
          <span className={styles.name}>{data.name}</span>
          <span className={styles.role}>{data.role}</span>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className={styles.handle} />
    </div>
  );
}
