import { FieldState, FormState } from 'formstate';
import { useAtom } from 'jotai';
import { observer } from 'mobx-react';
import { useRef, useState } from 'react';
import { useStore } from 'zustand';
import { Counter, Field, useCounter } from './Counter';
import { CountersState, CounterState } from './CounterMobx';
// import { counter, createCounter } from './CounterJotai';
import { counterStore } from './CounterZustand';

// function App() {
//   const counters = Array.from({ length: 5 }).map(useCounter);

//   return (<>
//     {counters.map((counter, i) => <Counter key={i} {...counter} />)}
//     <div>Sum: {
//       counters.reduce((sum, counter) => sum + counter.count, 0)
//     }</div>
//     </>);
// }


// function App() {
//   const counterState = useStore(counterStore);
//   return (<>
//     <Counter {...counterState} />
//     </>);
// }

// function App() {
//   const { countAtom, incAtom } = counter;
//   const [count] = useAtom(countAtom);
//   const [inc] = useAtom(incAtom);
//   return (<>
//     <Counter {...{ inc, count }} />
//   </>);
// }


// const countersState = new CountersState();

// const App = observer(() => {
//   return (<>
//     {countersState.counters.map((counterState, i) => <Counter key={i} {...counterState} />)}
//     <button onClick={() => countersState.addCounter()}>Add Counter</button>
//     <div>
//       Sum: {
//       countersState.counters.reduce((sum, counterState) => sum + counterState.count, 0)
//     }</div>
//   </>);
// });

const form = new FormState({
  username: new FieldState('').validators(
    (value: string) => {
      if (value.length < 3) return 'Must be longer than 3 characters';
    },
    (value: string) => {
      if (value.length > 6) return 'type less';
    }
  ),
  password: new FieldState('')
})

const App = observer(() => {
  return (<>
    <div style={{ backgroundColor: form.hasError ? 'red' : 'transparent' }}>
      <Field fs={form.$.username} />

      <Field fs={form.$.password} />

      {form.error}
    </div>
  </>);
});


export default App;
