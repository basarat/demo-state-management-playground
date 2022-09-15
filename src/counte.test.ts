import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { CountersState } from './CounterMobx';

test('Test', () => {
  const counters = new CountersState();
  expect(counters.counters.length).toBe(0);
  counters.addCounter();
  expect(counters.counters.length).toBe(1);
});
