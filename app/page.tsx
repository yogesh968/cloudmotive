'use client';
import { useEffect } from 'react';
import { useStore } from '@/store';
import Toolbar from '@/components/Toolbar';
import SummaryPanel from '@/components/SummaryPanel';
import Sidebar from '@/components/Sidebar';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

const SkillGraph = dynamic(() => import('@/components/SkillGraph'), { ssr: false });

export default function Home() {
  const init = useStore((s) => s.init);
  useEffect(() => {
    init();
  }, [init]);
  return (
    <div className={styles.app}>
      <Toolbar />
      <div className={styles.body}>
        <SummaryPanel />
        <main className={styles.graphArea}>
          <SkillGraph />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
