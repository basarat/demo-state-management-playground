# Setup
```
npm i # Setup
npm start # Run demo site
npm t # Run tests
```

# Analysis

Challenge: Create reusable state. See `Counter.tsx` for further details.

* redux / redux-toolkit
  * this is our baseline as everyone starts with redux
* zustand
  * redux mental model
  * +ve less boiler plate than redux
  * +ve can have async setters in store - no need for ugly thunks
  * -ve stores cannot be composed, same as redux. So difficult to create reusable pieces of state (state = store)
* jotai
  * atomic state model
  * +ve easier to compose (atoms inside atoms)
  * -ve mutations need to be done via set - not very TypeScript friendly
  * -ve each usage of an atom needs a `useAtom` hook
* mobx
  * atomic 
  * +ve composible
  * +ve less code than jotai
  * +ve easy to test logic as _just javascript_ (no react required)
  * -ve have to wrap components in `observable`
* valtio
  * - pending -
  * +ve claims support with redux tools
  * +ve automatic render optimizations just like mobx ([comparison to zustand](https://docs.pmnd.rs/zustand/getting-started/comparison#valtio))
