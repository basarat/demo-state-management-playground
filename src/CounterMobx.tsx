import { makeAutoObservable, makeObservable } from 'mobx';

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
