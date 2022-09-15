import { FieldState } from 'formstate';
import { observer } from 'mobx-react';
import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(c => c + 1);
  return {
    count, inc
  }
}

export const Counter = (props: ReturnType<typeof useCounter>) => {
  return (
    <div>
      <button onClick={props.inc}>+</button>
      <br />
      <div>{props.count}</div>
    </div>
  );
}

export const Field = observer(({fs}:{fs: FieldState<string>}) => {
  return <div>
    <div>Message:</div>
    <input value={fs.value} onChange={(e)=> fs.onChange(e.currentTarget.value)} />
    <div>{fs.error }</div>
    </div>
});