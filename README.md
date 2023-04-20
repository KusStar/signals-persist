# signals-persist

A library for persisting state of a [signal](https://github.com/preactjs/signals).

## Installation

```bash
npm install signals-persist
yarn add signals-persist
pnpm add signals-persist
```

## Usage

### React

Install the `@preact/signals-react` package.

```bash
npm i @preact/signals-react
yarn add @preact/signals-react
pnpm add @preact/signals-react
```

```jsx
import { signal } from '@preact/signals-react'

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
```

### Preact

Install the `@preact/signals` package.

```bash
npm i @preact/signals
yarn add @preact/signals
pnpm add @preact/signals
```

```jsx
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

```

## License

[MIT](LICENSE)
