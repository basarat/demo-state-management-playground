import { CountersState } from './Mobx';

test('CounterState', () => {
  const counters = new CountersState();
  expect(counters.counters.length).toBe(0);
  counters.addCounter();
  expect(counters.counters.length).toBe(1);
});
