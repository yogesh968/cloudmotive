'use client';
import { useState } from 'react';
import { useStore } from '@/store';
import { Proficiency } from '@/types';
import Modal from './Modal';
import styles from './form.module.css';

interface Props {
  personId: string;
  onClose: () => void;
}

export default function ConnectionModal({ personId, onClose }: Props) {
  const { skills, connections, addConnection } = useStore();
  const existingSkillIds = new Set(connections.filter((c) => c.personId === personId).map((c) => c.skillId));
  const available = skills.filter((s) => !existingSkillIds.has(s.id));

  const [skillId, setSkillId] = useState(available[0]?.id ?? '');
  const [proficiency, setProficiency] = useState<Proficiency>('familiar');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillId) return;
    addConnection({ id: `c${Date.now()}`, personId, skillId, proficiency });
    onClose();
  };

  if (available.length === 0) {
    return (
      <Modal title="Add Skill" onClose={onClose}>
        <p style={{ color: '#64748b', fontSize: 14, margin: 0 }}>All skills are already assigned to this person.</p>
      </Modal>
    );
  }

  return (
    <Modal title="Add Skill Connection" onClose={onClose}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Skill</label>
          <select className={styles.select} value={skillId} onChange={(e) => setSkillId(e.target.value)}>
            {available.map((s) => (
              <option key={s.id} value={s.id}>{s.name} ({s.category})</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Proficiency</label>
          <select className={styles.select} value={proficiency} onChange={(e) => setProficiency(e.target.value as Proficiency)}>
            <option value="learning">Learning</option>
            <option value="familiar">Familiar</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.btnCancel} onClick={onClose}>Cancel</button>
          <button type="submit" className={styles.btnPrimary}>Add Connection</button>
        </div>
      </form>
    </Modal>
  );
}
