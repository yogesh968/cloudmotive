'use client';
import { Handle, Position, NodeProps } from 'reactflow';
import styles from './PersonNode.module.css';

export default function PersonNode({ data }: NodeProps) {
  const initials = data.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`${styles.card} ${data.selected ? styles.selected : ''}`}>
      <div className={styles.avatar}>{initials}</div>
      <div className={styles.info}>
        <span className={styles.name}>{data.name}</span>
        <span className={styles.role}>{data.role}</span>
      </div>
      <Handle type="source" position={Position.Right} className={styles.handle} />
    </div>
  );
}
