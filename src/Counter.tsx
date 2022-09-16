/** 
 * Objective: Create a reusable piece of logic for this
 * Counter is a placeholder for lots of other general components 
 * - An Input Field
 * - A Symbol Row
 * - A Watchlist
 * 
 * All of these ^ will need to be in arrays
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
