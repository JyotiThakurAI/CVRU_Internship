
function App() {
  const courses = [
    {
      title: 'React Training',
      description: 'Learn React with hands-on examples and real projects.',
    },
    {
      title: 'Tailwind CSS',
      description: 'Create beautiful and responsive user interfaces.',
    },
    {
      title: 'UI Design',
      description: 'Learn consistent colors, spacing, and component design.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F4F6F7] text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-[#4B7BEC]">CodeSpace</h1>
        <span className="text-sm font-medium text-gray-600">
          Week 4 · Day 4
        </span>
      </nav>

      {/* Page heading */}
      <header className="px-6 py-10 text-center">
        <h2 className="text-3xl font-bold">Advanced Tailwind CSS</h2>
        <p className="mt-3 text-gray-600">
          Interactive components with consistent styling.
        </p>
      </header>

      {/* Reusable cards */}
      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.title}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-[#4B7BEC]">
              {course.title}
            </h3>

            <p className="mt-3 text-gray-600">{course.description}</p>

            <label className="mt-5 block text-sm font-medium" htmlFor={`email-${course.title}`}>
              Email address
            </label>

            <input
              id={`email-${course.title}`}
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:ring-2 focus:ring-[#4B7BEC]"
            />

            <button
              type="button"
              className="mt-4 rounded-lg bg-[#4B7BEC] px-4 py-2 text-white transition-all duration-300 hover:bg-[#365FC4] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4B7BEC] focus:ring-offset-2"
            >
              Read More
            </button>
          </article>
        ))}
      </main>

      {/* Custom palette preview */}
      <section className="px-6 pb-10 text-center">
        <h3 className="mb-4 text-xl font-bold">Our Color Palette</h3>

        <div className="mx-auto flex max-w-md flex-wrap justify-center gap-3">
          <div className="rounded-lg bg-[#4B7BEC] px-4 py-3 text-white">
            Primary
          </div>
          <div className="rounded-lg bg-[#A55EEA] px-4 py-3 text-white">
            Secondary
          </div>
          <div className="rounded-lg bg-[#20BF6B] px-4 py-3 text-white">
            Accent
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 px-4 py-4 text-center text-white">
        <p>Week 4 Day 4 | React + Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
