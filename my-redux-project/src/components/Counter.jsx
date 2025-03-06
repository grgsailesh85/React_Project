import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  // useSelector - Access state from Redux store
  const count = useSelector((state) => state.count);

  // useDispatch - Get the dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Dispatch actions on button click */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default Counter;
