'use client';
import { useState } from 'react';
import { useStore } from '@/store';
import { CATEGORY_COLORS, PROFICIENCY_COLORS } from '@/lib/constants';
import { Proficiency } from '@/types';
import styles from './Sidebar.module.css';
import PersonModal from './modals/PersonModal';
import SkillModal from './modals/SkillModal';
import ConnectionModal from './modals/ConnectionModal';

export default function Sidebar() {
  const { people, skills, connections, selectedNodeId, selectedNodeType, selectNode, deletePerson, deleteSkill, deleteConnection } = useStore();
  const [editPerson, setEditPerson] = useState(false);
  const [editSkill, setEditSkill] = useState(false);
  const [addConn, setAddConn] = useState(false);

  if (!selectedNodeId || !selectedNodeType) return null;

  const rawId = selectedNodeId.replace(/^(person|skill)-/, '');

  if (selectedNodeType === 'person') {
    const person = people.find((p) => p.id === rawId);
    if (!person) return null;
    const personConns = connections.filter((c) => c.personId === rawId);

    return (
      <aside className={styles.sidebar}>
        <button className={styles.close} onClick={() => selectNode(null, null)}>✕</button>
        <div className={styles.header}>
          <div className={styles.avatarLg}>
            {person.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
          </div>
          <div>
            <h2 className={styles.title}>{person.name}</h2>
            <p className={styles.subtitle}>{person.role}</p>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills ({personConns.length})</h3>
          <div className={styles.skillList}>
            {personConns.map((c) => {
              const skill = skills.find((s) => s.id === c.skillId);
              if (!skill) return null;
              return (
                <div key={c.id} className={styles.skillChip}>
                  <span className={styles.skillDot} style={{ background: CATEGORY_COLORS[skill.category] }} />
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.profBadge} style={{ background: PROFICIENCY_COLORS[c.proficiency] + '22', color: PROFICIENCY_COLORS[c.proficiency] }}>
                    {c.proficiency}
                  </span>
                  <button className={styles.removeBtn} onClick={() => deleteConnection(c.id)} title="Remove">✕</button>
                </div>
              );
            })}
            {personConns.length === 0 && <p className={styles.empty}>No skills yet</p>}
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.btnSecondary} onClick={() => setAddConn(true)}>+ Add Skill</button>
          <button className={styles.btnPrimary} onClick={() => setEditPerson(true)}>Edit</button>
          <button className={styles.btnDanger} onClick={() => deletePerson(rawId)}>Delete</button>
        </div>

        {editPerson && <PersonModal person={person} onClose={() => setEditPerson(false)} />}
        {addConn && <ConnectionModal personId={rawId} onClose={() => setAddConn(false)} />}
      </aside>
    );
  }

  if (selectedNodeType === 'skill') {
    const skill = skills.find((s) => s.id === rawId);
    if (!skill) return null;
    const skillConns = connections.filter((c) => c.skillId === rawId);
    const color = CATEGORY_COLORS[skill.category];

    return (
      <aside className={styles.sidebar}>
        <button className={styles.close} onClick={() => selectNode(null, null)}>✕</button>
        <div className={styles.header}>
          <div className={styles.skillIconLg} style={{ background: color + '22', border: `2px solid ${color}` }}>
            <span style={{ color }}>◉</span>
          </div>
          <div>
            <h2 className={styles.title}>{skill.name}</h2>
            <p className={styles.subtitle} style={{ color }}>{skill.category}</p>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Team Members ({skillConns.length})</h3>
          <div className={styles.skillList}>
            {skillConns.map((c) => {
              const person = people.find((p) => p.id === c.personId);
              if (!person) return null;
              return (
                <div key={c.id} className={styles.skillChip}>
                  <div className={styles.miniAvatar}>{person.name.split(' ').map((n) => n[0]).join('')}</div>
                  <span className={styles.skillName}>{person.name}</span>
                  <span className={styles.profBadge} style={{ background: PROFICIENCY_COLORS[c.proficiency] + '22', color: PROFICIENCY_COLORS[c.proficiency] }}>
                    {c.proficiency}
                  </span>
                  <button className={styles.removeBtn} onClick={() => deleteConnection(c.id)} title="Remove">✕</button>
                </div>
              );
            })}
            {skillConns.length === 0 && <p className={styles.empty}>No team members yet</p>}
          </div>
        </div>

        <div className={styles.profBreakdown}>
          {(['expert', 'familiar', 'learning'] as Proficiency[]).map((p) => {
            const count = skillConns.filter((c) => c.proficiency === p).length;
            const pct = skillConns.length ? (count / skillConns.length) * 100 : 0;
            return (
              <div key={p} className={styles.profRow}>
                <span className={styles.profLabel}>{p}</span>
                <div className={styles.profBar}>
                  <div className={styles.profFill} style={{ width: `${pct}%`, background: PROFICIENCY_COLORS[p] }} />
                </div>
                <span className={styles.profCount}>{count}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => setEditSkill(true)}>Edit</button>
          <button className={styles.btnDanger} onClick={() => deleteSkill(rawId)}>Delete</button>
        </div>

        {editSkill && <SkillModal skill={skill} onClose={() => setEditSkill(false)} />}
      </aside>
    );
  }

  return null;
}
