import { FC } from 'react';

import { signal } from '@preact/signals-react'

import { persist } from 'signals-persist'

interface Props { }

const count = persist(signal(0), 'count')

const App: FC<Props> = () => {
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
