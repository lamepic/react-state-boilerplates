import "./App.css";
import { useStateValue } from "./store/StateProvider";
import * as actionTypes from "./store/actionTypes";

function App() {
  const [{ counter }, dispatch] = useStateValue();

  const handleDecrease = () => {
    dispatch({
      type: actionTypes.DECREASE_COUNTER,
    });
  };

  const handleIecrease = () => {
    dispatch({
      type: actionTypes.INCREASE_COUNTER,
    });
  };

  return (
    <div className="app">
      <h2>Context-API Boilerplate</h2>

      <div className="content">
        <button onClick={handleDecrease} className="decrease">
          decrease
        </button>
        <p>{counter}</p>
        <button onClick={handleIecrease} className="increase">
          increase
        </button>
      </div>
    </div>
  );
}

export default App;
