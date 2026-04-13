import { create } from 'zustand';
import { Person, Skill, Connection } from '@/types';
import { initialPeople, initialSkills, initialConnections } from '@/lib/seedData';

const STORAGE_KEY = 'skill-matrix-data';

function loadFromStorage() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveToStorage(data: { people: Person[]; skills: Skill[]; connections: Connection[] }) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

interface Store {
  people: Person[];
  skills: Skill[];
  connections: Connection[];
  selectedNodeId: string | null;
  selectedNodeType: 'person' | 'skill' | null;

  init: () => void;
  selectNode: (id: string | null, type: 'person' | 'skill' | null) => void;

  addPerson: (p: Person) => void;
  updatePerson: (p: Person) => void;
  deletePerson: (id: string) => void;

  addSkill: (s: Skill) => void;
  updateSkill: (s: Skill) => void;
  deleteSkill: (id: string) => void;

  addConnection: (c: Connection) => void;
  updateConnection: (c: Connection) => void;
  deleteConnection: (id: string) => void;
}

export const useStore = create<Store>((set, get) => ({
  people: [],
  skills: [],
  connections: [],
  selectedNodeId: null,
  selectedNodeType: null,

  init: () => {
    const saved = loadFromStorage();
    if (saved) {
      set({ people: saved.people, skills: saved.skills, connections: saved.connections });
    } else {
      set({ people: initialPeople, skills: initialSkills, connections: initialConnections });
      saveToStorage({ people: initialPeople, skills: initialSkills, connections: initialConnections });
    }
  },

  selectNode: (id, type) => set({ selectedNodeId: id, selectedNodeType: type }),

  addPerson: (p) => {
    const next = [...get().people, p];
    set({ people: next });
    saveToStorage({ people: next, skills: get().skills, connections: get().connections });
  },
  updatePerson: (p) => {
    const next = get().people.map((x) => (x.id === p.id ? p : x));
    set({ people: next });
    saveToStorage({ people: next, skills: get().skills, connections: get().connections });
  },
  deletePerson: (id) => {
    const people = get().people.filter((x) => x.id !== id);
    const connections = get().connections.filter((c) => c.personId !== id);
    set({ people, connections, selectedNodeId: null, selectedNodeType: null });
    saveToStorage({ people, skills: get().skills, connections });
  },

  addSkill: (s) => {
    const next = [...get().skills, s];
    set({ skills: next });
    saveToStorage({ people: get().people, skills: next, connections: get().connections });
  },
  updateSkill: (s) => {
    const next = get().skills.map((x) => (x.id === s.id ? s : x));
    set({ skills: next });
    saveToStorage({ people: get().people, skills: next, connections: get().connections });
  },
  deleteSkill: (id) => {
    const skills = get().skills.filter((x) => x.id !== id);
    const connections = get().connections.filter((c) => c.skillId !== id);
    set({ skills, connections, selectedNodeId: null, selectedNodeType: null });
    saveToStorage({ people: get().people, skills, connections });
  },

  addConnection: (c) => {
    const next = [...get().connections, c];
    set({ connections: next });
    saveToStorage({ people: get().people, skills: get().skills, connections: next });
  },
  updateConnection: (c) => {
    const next = get().connections.map((x) => (x.id === c.id ? c : x));
    set({ connections: next });
    saveToStorage({ people: get().people, skills: get().skills, connections: next });
  },
  deleteConnection: (id) => {
    const next = get().connections.filter((x) => x.id !== id);
    set({ connections: next });
    saveToStorage({ people: get().people, skills: get().skills, connections: next });
  },
}));
