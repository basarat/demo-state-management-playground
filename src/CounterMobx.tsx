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
/** 
 * zustand: redux mental model, with less boiler plate 
 * 
 * jotai: 
 * atomic state model, easier to compose, atoms inside atoms, 
 * - to use you have to use a hook, mutations need to be done via set
 * 
 * mobx: atomic - less code than jotai ... because it assumes that you are willing to wrap your components in observer
 */