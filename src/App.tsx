import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex justify-center items-center bg-indigo-100 border-4 border-indigo-500 p-28 rounded">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="btn bg-green-600 px-3 py-2 text-md font-semibold rounded text-white"
        >
          Increment By Value
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="btn bg-green-600 px-3 py-2 text-md font-semibold rounded text-white"
        >
          Increment
        </button>
        <p className="text-2xl px-5 font-semibold">{count}</p>
        <button
          onClick={() => dispatch(decrement())}
          className="btn bg-red-600 px-3 py-2 text-md font-semibold rounded text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
