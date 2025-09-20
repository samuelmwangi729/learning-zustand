import { useCounterStore } from "./Utils/store"

const App = () => {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)
  return (
    <div className="mx-2 mt-2">
      <div className="text-red-500 font-bold text-2xl">
        {count}
      </div>
      <button className="bg-[#ff6600] px-4 py-1 text-white" onClick={increment}>
        Add
      </button>
      <button className="bg-red-500 px-4 py-1 text-white" onClick={decrement}>
        Decrement
      </button>
      <button className="bg-yellow-400 px-4 py-1 text-white" onClick={reset}>
        reset
      </button>
    </div>
  )
}

export default App