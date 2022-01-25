import { useRecoilState } from "recoil";
import { counterState } from "./atoms/counterAtom";
import "./App.css";

function App() {
  const [counter, setCounter] = useRecoilState(counterState);

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  const handleIecrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="app">
      <h2>Recoil Boilerplate</h2>

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
