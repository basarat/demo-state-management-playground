import { counters, addCounter } from './Valtio';

test('Valtio', () => {
  expect(counters.length).toBe(0);
  addCounter();
  expect(counters.length).toBe(1);
});
