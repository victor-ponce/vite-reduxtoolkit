import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store'
import { 
  increment,
  decrement,
  // we add the actions u objects recentrly exported
reset,
incrementByAmount
 } from './counterSlice';
 // in this case useState is imported couse we need to preserve the count payload for incrementByAmount
 import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state:RootState) => state.counter.count);
  const dispatch = useDispatch();

  // we add the const useState for the incremenByAmount
  const [incrementAmount, setIncrementAmount] = useState(0);
  // next line is to say the increment will be a number if not it will set cero
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      
      <input
       type='text'
       value={incrementAmount}
       onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
          <button onClick={resetAll}>Reset</button>
        </div>
    </section>
    
  )
}

export default Counter;
