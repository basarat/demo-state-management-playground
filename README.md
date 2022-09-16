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
  * transparent reactive
  * +ve composible
  * +ve less code than jotai (transparent => atomic without the noise)
  * +ve easy to test logic as _just javascript_ (no react required)
  * -ve have to wrap components in `observable`
* valtio
  * transparent reactive
  * +ve less code than jotai (transparent => atomic without the noise)
  * +ve less object oriented than mobx
  * +ve integrates into react nicer than mobx (uses hooks, no need for observer wrapper + works with suspense)([link](https://mobx.js.org/react-integration.html))
  * +ve claims support with redux tools ([link](https://github.com/pmndrs/valtio#dev-tools))
  * +ve composable ([link](https://github.com/pmndrs/valtio/wiki/How-to-split-and-compose-states))
  * +ve automatic render optimizations just like mobx ([comparison to zustand](https://docs.pmnd.rs/zustand/getting-started/comparison#valtio))
  * -ve not a big market share (compared to redux, mobx, zustand)
