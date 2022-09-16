import { counters, addCounter } from './Valtio';

test('Valtio', async () => {
  expect(counters.length).toBe(0);
  await addCounter();
  expect(counters.length).toBe(1);
});
