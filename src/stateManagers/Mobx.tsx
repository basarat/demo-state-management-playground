import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Counter, ICounterState } from '../Counter';

export class CounterState implements ICounterState {
  constructor() {
    makeAutoObservable(this);
  }
  count = 0;
  inc = async () => {
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

export const MobxMultiApp = observer(() => {
  return (<>
    <div>
      Sum: {
        countersState.counters.reduce((sum, counterState) => sum + counterState.count, 0)
      }</div>
    <button onClick={() => countersState.addCounter()}>Add Counter</button>

    {countersState.counters.map((counterState, i) => <Counter key={i} {...counterState} />)}
  </>);
});
