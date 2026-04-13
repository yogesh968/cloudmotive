'use client';
import { useMemo } from 'react';
import { useStore } from '@/store';
import { CATEGORY_COLORS } from '@/lib/constants';
import { SkillCategory } from '@/types';
import styles from './SummaryPanel.module.css';

export default function SummaryPanel() {
  const { people, skills, connections } = useStore();

  const stats = useMemo(() => {
    const expertCount = connections.filter((c) => c.proficiency === 'expert').length;
    const coveredSkillIds = new Set(connections.map((c) => c.skillId));
    const uncoveredSkills = skills.filter((s) => !coveredSkillIds.has(s.id));

    const skillPopularity = skills
      .map((s) => ({
        ...s,
        count: connections.filter((c) => c.skillId === s.id).length,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 4);

    const categoryBreakdown = Object.entries(
      skills.reduce<Record<string, number>>((acc, s) => {
        acc[s.category] = (acc[s.category] ?? 0) + connections.filter((c) => c.skillId === s.id).length;
        return acc;
      }, {})
    ).sort((a, b) => b[1] - a[1]);

    return { expertCount, uncoveredSkills, skillPopularity, categoryBreakdown };
  }, [people, skills, connections]);

  return (
    <div className={styles.panel}>
      <h3 className={styles.panelTitle}>Team Overview</h3>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{people.length}</span>
          <span className={styles.statLabel}>Members</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{skills.length}</span>
          <span className={styles.statLabel}>Skills</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{stats.expertCount}</span>
          <span className={styles.statLabel}>Experts</span>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Top Skills</h4>
        {stats.skillPopularity.map((s) => (
          <div key={s.id} className={styles.barRow}>
            <span className={styles.barLabel}>{s.name}</span>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{
                  width: `${people.length ? (s.count / people.length) * 100 : 0}%`,
                  background: CATEGORY_COLORS[s.category as SkillCategory],
                }}
              />
            </div>
            <span className={styles.barCount}>{s.count}</span>
          </div>
        ))}
      </div>

      {stats.uncoveredSkills.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>⚠ Skill Gaps</h4>
          <div className={styles.gapList}>
            {stats.uncoveredSkills.map((s) => (
              <span key={s.id} className={styles.gapChip} style={{ borderColor: CATEGORY_COLORS[s.category], color: CATEGORY_COLORS[s.category] }}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>By Category</h4>
        {stats.categoryBreakdown.map(([cat, count]) => (
          <div key={cat} className={styles.catRow}>
            <span className={styles.catDot} style={{ background: CATEGORY_COLORS[cat as SkillCategory] ?? '#94a3b8' }} />
            <span className={styles.catLabel}>{cat}</span>
            <span className={styles.catCount}>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
