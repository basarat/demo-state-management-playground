# Setup
```
npm i # Setup
npm start # Run demo site
npm t # Run tests
```

# Analysis

* zustand
  * redux mental model
  * less boiler plate than redux.
  * -ve stores cannot be composed. So difficult to create reusable pieces of state (state = store).
* jotai
  * atomic state model
  * +ve easier to compose (atoms inside atoms)
  * -ve mutations need to be done via set - not very type friendly
* mobx
  * atomic 
  * +ve composible
  * +ve less code than jotai
  * +ve easy to test logic as _just javascript_ (no react required)
  * -ve have to wrap components in `observable`
* valtio
  * - pending -
  * potentially works with redux tools
