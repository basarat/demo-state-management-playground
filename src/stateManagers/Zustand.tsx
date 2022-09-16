import { createStore, useStore } from "zustand";
import { Counter } from '../Counter';

export type CounterStore = {
  count: number;
  inc: () => void;
}

export const counterStore = createStore<CounterStore>()((set) => ({
  count: 0,
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
  },
}));

export function ZustandApp() {
  const counterState = useStore(counterStore);
  return (<>
    <Counter {...counterState} />
  </>);
}
