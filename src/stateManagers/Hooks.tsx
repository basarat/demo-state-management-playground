import { useState } from 'react';
import { Counter } from '../Counter';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(c => c + 1);
  return {
    count, inc
  }
};

export function App() {
  const counterState = useCounter();
  return (<>
    <Counter {...counterState} />
  </>);
}

// function App() {
//   const counters = Array.from({ length: 5 }).map(useCounter);

//   return (<>
//     {counters.map((counter, i) => <Counter key={i} {...counter} />)}
//     <div>Sum: {
//       counters.reduce((sum, counter) => sum + counter.count, 0)
//     }</div>
//     </>);
// }
