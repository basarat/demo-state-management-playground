import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Counter } from '../Counter';

export class CounterState {
  constructor() {
    makeAutoObservable(this);
  }
  count = 0;
  inc = () => {
    this.count++;
  }
}

export class CountersState {
  constructor() {
    makeAutoObservable(this);
  }
  counters: CounterState[] = [];
  addCounter() {
    this.counters.push(new CounterState());
  }
}


const countersState = new CountersState();

export const MobxApp = observer(() => {
  return (<>
    <div>
      Sum: {
        countersState.counters.reduce((sum, counterState) => sum + counterState.count, 0)
      }</div>
    <button onClick={() => countersState.addCounter()}>Add Counter</button>

    {countersState.counters.map((counterState, i) => <Counter key={i} {...counterState} />)}
  </>);
});
