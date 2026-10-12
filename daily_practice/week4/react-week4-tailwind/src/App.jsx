
import { useState, useEffect, lazy, Suspense, memo } from 'react'

const About = lazy(() => import('./About'))

const Score = memo(function Score({ value }) {
  console.log('Score component rendered!')

  return (
    <div className="mt-4 rounded-lg bg-green-50 p-4">
      <h3 className="text-xl font-semibold text-green-700">
        Score: {value}
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        This child component uses React.memo.
      </p>
    </div>
  )
})

function App() {
  const [time, setTime] = useState(0)
  const [showAbout, setShowAbout] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((previousTime) => previousTime + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  console.log('App component rendered!')

  return (
    <div className="min-h-screen bg-[#F4F6F7] text-gray-800">
      <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-[#4B7BEC]">CodeSpace</h1>
        <span className="text-sm text-gray-600">Week 4 · Day 5</span>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="text-3xl font-bold">React Performance</h2>
        <p className="mt-2 text-gray-600">
          Explore rendering, memoization, and lazy loading.
        </p>

        <section className="mt-6 rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-semibold">Live Timer</h3>
          <p className="mt-3 text-3xl font-bold text-[#4B7BEC]">
            {time} seconds
          </p>
          <p className="mt-2 text-sm text-gray-500">
            The App re-renders whenever the timer updates.
          </p>

          <Score value={100} />
        </section>

        <section className="mt-6 rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-semibold">Lazy Loading Demo</h3>
          <button
            onClick={() => setShowAbout((previous) => !previous)}
            className="mt-4 rounded-lg bg-[#4B7BEC] px-5 py-2 text-white transition hover:bg-[#365FC4] active:scale-95"
          >
            {showAbout ? 'Hide About' : 'Load About Page'}
          </button>

          {showAbout && (
            <Suspense
              fallback={
                <p className="mt-4 text-gray-500">Loading About page...</p>
              }
            >
              <About />
            </Suspense>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 px-4 py-4 text-center text-white">
        Week 4 Day 5 | React Performance & Optimization
      </footer>
    </div>
  )
}

export default App
