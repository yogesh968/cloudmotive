'use client';
import { useCallback, useMemo, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useStore } from '@/store';
import { PROFICIENCY_COLORS } from '@/lib/constants';
import { buildNodes } from '@/lib/layout';
import PersonNode from './PersonNode';
import SkillNode from './SkillNode';
import styles from './SkillGraph.module.css';

const nodeTypes = { personNode: PersonNode, skillNode: SkillNode };

export default function SkillGraph() {
  const { people, skills, connections, selectedNodeId, selectNode } = useStore();

  const initialNodes = useMemo(
    () => buildNodes(people, skills, selectedNodeId),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const initialEdges: Edge[] = useMemo(
    () =>
      connections.map((c) => ({
        id: `edge-${c.id}`,
        source: `person-${c.personId}`,
        target: `skill-${c.skillId}`,
        animated: c.proficiency === 'learning',
        style: {
          stroke: PROFICIENCY_COLORS[c.proficiency],
          strokeWidth: c.proficiency === 'expert' ? 3 : 2,
          opacity: selectedNodeId
            ? `person-${c.personId}` === selectedNodeId || `skill-${c.skillId}` === selectedNodeId
              ? 1
              : 0.15
            : 1,
        },
        markerEnd: { type: MarkerType.ArrowClosed, color: PROFICIENCY_COLORS[c.proficiency] },
        label: c.proficiency,
        labelStyle: { fontSize: 10, fill: PROFICIENCY_COLORS[c.proficiency], fontWeight: 600 },
        labelBgStyle: { fill: '#fff', fillOpacity: 0.85 },
        data: { connectionId: c.id },
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Sync nodes when store changes
  useEffect(() => {
    setNodes((prev) => {
      const posMap = new Map(prev.map((n) => [n.id, n.position]));
      return buildNodes(people, skills, selectedNodeId).map((n) => ({
        ...n,
        position: posMap.get(n.id) ?? n.position,
      }));
    });
  }, [people, skills, selectedNodeId, setNodes]);

  // Sync edges when store changes
  useEffect(() => {
    setEdges(
      connections.map((c) => ({
        id: `edge-${c.id}`,
        source: `person-${c.personId}`,
        target: `skill-${c.skillId}`,
        animated: c.proficiency === 'learning',
        style: {
          stroke: PROFICIENCY_COLORS[c.proficiency],
          strokeWidth: c.proficiency === 'expert' ? 3 : 2,
          opacity: selectedNodeId
            ? `person-${c.personId}` === selectedNodeId || `skill-${c.skillId}` === selectedNodeId
              ? 1
              : 0.15
            : 1,
        },
        markerEnd: { type: MarkerType.ArrowClosed, color: PROFICIENCY_COLORS[c.proficiency] },
        label: c.proficiency,
        labelStyle: { fontSize: 10, fill: PROFICIENCY_COLORS[c.proficiency], fontWeight: 600 },
        labelBgStyle: { fill: '#fff', fillOpacity: 0.85 },
        data: { connectionId: c.id },
      }))
    );
  }, [connections, selectedNodeId, setEdges]);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      const [type, id] = node.id.split('-') as ['person' | 'skill', string];
      if (selectedNodeId === node.id) {
        selectNode(null, null);
      } else {
        selectNode(node.id, type);
      }
    },
    [selectedNodeId, selectNode]
  );

  const onPaneClick = useCallback(() => selectNode(null, null), [selectNode]);

  return (
    <div className={styles.wrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#e2e8f0" gap={24} size={1} />
        <Controls className={styles.controls} />
        <MiniMap
          nodeColor={(n) => (n.type === 'personNode' ? '#6366f1' : '#10b981')}
          className={styles.minimap}
          maskColor="rgba(241,245,249,0.7)"
        />
      </ReactFlow>

      <div className={styles.legend}>
        <span className={styles.legendTitle}>Proficiency</span>
        {(['learning', 'familiar', 'expert'] as const).map((p) => (
          <div key={p} className={styles.legendItem}>
            {p === 'learning' ? (
              <span className={styles.legendLineDotted} style={{ borderColor: PROFICIENCY_COLORS[p] }} />
            ) : (
              <span
                className={styles.legendLine}
                style={{
                  background: PROFICIENCY_COLORS[p],
                  height: p === 'expert' ? '3px' : '2px',
                }}
              />
            )}
            <span>{p.charAt(0).toUpperCase() + p.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
