'use client';
import { useState } from 'react';
import PersonModal from './modals/PersonModal';
import SkillModal from './modals/SkillModal';
import styles from './Toolbar.module.css';

export default function Toolbar() {
  const [showPerson, setShowPerson] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  return (
    <>
      <header className={styles.toolbar}>
        <div className={styles.brand}>
          <span className={styles.logo}>⬡</span>
          <span className={styles.brandName}>SkillMatrix</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnSecondary} onClick={() => setShowSkill(true)}>+ Add Skill</button>
          <button className={styles.btnPrimary} onClick={() => setShowPerson(true)}>+ Add Person</button>
        </div>
      </header>
      {showPerson && <PersonModal onClose={() => setShowPerson(false)} />}
      {showSkill && <SkillModal onClose={() => setShowSkill(false)} />}
    </>
  );
}
