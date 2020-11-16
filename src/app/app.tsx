import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, asyncIncrease, delayIncrease } from '../store/slicer/counter';

const App: React.FC = () => {
  const valueCounter: number = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{valueCounter}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(delayIncrease(0.5))}>Increase delay after 1s</button>
      {/* Need to run a simple server at port 4000 */}
      <p style={{ fontStyle: 'italic' }}>
        Need to run a simple server at port 4000 to active this button
      </p>
      <button disabled onClick={() => dispatch(asyncIncrease(5))}>
        Increase delay by async
      </button>
    </div>
  );
};

export default App;
