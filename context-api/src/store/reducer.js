import * as actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return {
        counter: state.counter + 1,
      };
    case actionTypes.DECREASE_COUNTER:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default reducer;
