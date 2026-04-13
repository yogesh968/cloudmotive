'use client';
import { useState } from 'react';
import { useStore } from '@/store';
import { Person } from '@/types';
import Modal from './Modal';
import styles from './form.module.css';

interface Props {
  person?: Person;
  onClose: () => void;
}

export default function PersonModal({ person, onClose }: Props) {
  const { addPerson, updatePerson } = useStore();
  const [name, setName] = useState(person?.name ?? '');
  const [role, setRole] = useState(person?.role ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    if (person) {
      updatePerson({ ...person, name: name.trim(), role: role.trim() });
    } else {
      addPerson({ id: `p${Date.now()}`, name: name.trim(), role: role.trim() });
    }
    onClose();
  };

  return (
    <Modal title={person ? 'Edit Person' : 'Add Person'} onClose={onClose}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Full Name</label>
          <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Jane Doe" autoFocus />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Role</label>
          <input className={styles.input} value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. Frontend Engineer" />
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.btnCancel} onClick={onClose}>Cancel</button>
          <button type="submit" className={styles.btnPrimary}>{person ? 'Save Changes' : 'Add Person'}</button>
        </div>
      </form>
    </Modal>
  );
}
