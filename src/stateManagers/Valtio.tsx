import { proxy, useSnapshot } from 'valtio';
import { Counter, ICounterState } from '../Counter';

function createCounter(): ICounterState {
  const counterState = proxy({
    count: 0,
    inc: async () => {
      ++counterState.count;
    }
  });
  return counterState;
}

const counter = createCounter();
export function ValtioApp() {
  const counterState = useSnapshot(counter);
  return (<>
    <Counter {...counterState} />
  </>);
}

const counters = proxy<ICounterState[]>([]);
const addCounter = () => counters.push(createCounter());
function useCounters() {
  const countersSnap = useSnapshot(counters);
  return {counters: countersSnap, addCounter};
} 

export function ValtioMultiApp() {
  const {counters, addCounter} = useCounters();
  return (<>
    <div>
      Sum: {
        counters.reduce((sum, counterState) => sum + counterState.count, 0)
      }</div>
    <button onClick={() => addCounter()}>Add Counter</button>

    {counters.map((counterState, i) => <Counter key={i} {...counterState} />)}
  </>);
}