/** 
 * Objective: 
 * - Create a reusable state for a reusable component
 * - The state needs to be composible _as is_ in an array
 * 
 * Counter is a placeholder for lots of other general components 
 * - An Input Field
 * - A Symbol Row
 * - A Watchlist
 */
export const Counter = (props: { count: number, inc: () => void }) => {
  return (
    <div>
      <button onClick={props.inc}>+</button>
      <br />
      <div>{props.count}</div>
    </div>
  );
}

export type CounterState = {
  count: number,
  inc: () => void,
};