import { createStore } from "zustand";

export type CounterStore = {
  count: number;
  inc:  () => Promise<void>;
}

export const counterStore = createStore<CounterStore>()((set) => ({
  count: 0,
  inc: async () => {
    await 1;
    set((state) => ({ count: state.count + 1 }));
  },
}));