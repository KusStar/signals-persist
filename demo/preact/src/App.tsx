import { signal } from '@preact/signals';
import { persist } from 'signals-persist'

const count = persist(signal(0), 'count')

const App = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="text-6xl mb-8">{count.value}</div>
      <button
        className="px-6 py-2 rounded bg-black hover:bg-green-600 text-white"
        onClick={() => count.value++}
      >
        count++
      </button>
    </div>
  )
}

export default App;
