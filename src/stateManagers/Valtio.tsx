import { proxy, useSnapshot } from 'valtio';
import { Counter, CounterState } from '../Counter';

function createCounter(): CounterState {
  const counter = proxy({
    count: 0,
    inc: () => {
      ++counter.count
    }
  });
  return counter;
}

const counter = createCounter();
export function ValtioApp() {
  const counterState = useSnapshot(counter);
  return (<>
    <Counter {...counterState} />
  </>);
}

const counters = proxy<CounterState[]>([]);
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