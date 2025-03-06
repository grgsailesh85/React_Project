import { createStore } from "redux";

// Initial state for the store
const initialState = { count: 0 };

// Reducer function - Determines how state changes based on actions
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }; // Increase count
    case "DECREMENT":
      return { count: state.count - 1 }; // Decrease count
    default:
      return state; // Return current state if action is unknown
  }
};

// Create a Redux store with the reducer
const store = createStore(counterReducer);

export default store;
