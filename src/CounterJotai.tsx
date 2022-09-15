import { atom } from "jotai";

export const createCounter = () => {
  const countAtom = atom(0);
  
  const incAtom = atom(null, (get, set) => {
    set(countAtom, get(countAtom) + 1);
  });

  return { countAtom, incAtom };
}

export const multiCounter = atom([createCounter()]);

const addCounter = atom(null, (get, set) => {
  set(multiCounter, [...get(multiCounter), createCounter()]);
});