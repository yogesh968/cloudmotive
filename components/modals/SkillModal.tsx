'use client';
import { useState } from 'react';
import { useStore } from '@/store';
import { Skill, SkillCategory } from '@/types';
import Modal from './Modal';
import styles from './form.module.css';

const CATEGORIES: SkillCategory[] = ['frontend', 'backend', 'devops', 'data', 'design', 'management'];

interface Props {
  skill?: Skill;
  onClose: () => void;
}

export default function SkillModal({ skill, onClose }: Props) {
  const { addSkill, updateSkill } = useStore();
  const [name, setName] = useState(skill?.name ?? '');
  const [category, setCategory] = useState<SkillCategory>(skill?.category ?? 'frontend');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (skill) {
      updateSkill({ ...skill, name: name.trim(), category });
    } else {
      addSkill({ id: `s${Date.now()}`, name: name.trim(), category });
    }
    onClose();
  };

  return (
    <Modal title={skill ? 'Edit Skill' : 'Add Skill'} onClose={onClose}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Skill Name</label>
          <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. GraphQL" autoFocus />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Category</label>
          <select className={styles.select} value={category} onChange={(e) => setCategory(e.target.value as SkillCategory)}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.btnCancel} onClick={onClose}>Cancel</button>
          <button type="submit" className={styles.btnPrimary}>{skill ? 'Save Changes' : 'Add Skill'}</button>
        </div>
      </form>
    </Modal>
  );
}
