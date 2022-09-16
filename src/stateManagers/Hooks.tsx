import { useEffect, useState } from 'react';
import { Counter, ICounterState } from '../Counter';

export const useCounter = (): ICounterState => {
  const [count, setCount] = useState(0);
  const inc = async () => setCount(c => c + 1);
  return {
    count, inc
  }
};

export function HooksApp() {
  const counterState = useCounter();
  return (<>
    <Counter {...counterState} />
  </>);
}

/** Breaks the rules of hooks */
export function HooksMultiApp() {
  const counters = Array.from({ length: 5 }).map(useCounter);

  return (<>
    {counters.map((counter, i) => <Counter key={i} {...counter} />)}
    <div>Sum: {
      counters.reduce((sum, counter) => sum + counter.count, 0)
    }</div>
  </>);
}


