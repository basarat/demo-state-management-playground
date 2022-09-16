import { atom, useAtom, useAtomValue } from "jotai";
import { Counter } from '../Counter';

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


const counter = createCounter();

export function JotaiApp() {
  const { countAtom, incAtom } = counter;
  const count = useAtomValue(countAtom);
  const [, inc] = useAtom(incAtom);
  return (<>
    <Counter {...{ inc, count }} />
  </>);
}