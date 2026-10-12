
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const courses = [
    { title: 'HTML', description: 'Structure web pages.' },
    { title: 'CSS', description: 'Style web pages.' },
    { title: 'React', description: 'Build user interfaces.' },
    { title: 'Tailwind CSS', description: 'Create responsive designs.' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">    
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-6 py-4 shadow">
        <h1 className="text-xl font-bold text-blue-600">CodeSpace</h1>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-14 z-10 w-full flex-col gap-3 bg-white p-5 md:static md:flex md:w-auto md:flex-row md:p-0`}
        >
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#courses" className="hover:text-blue-600">Courses</a>
          <a href="#footer" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Heading */}
      <header id="home" className="px-6 py-10 text-center">
        <h2 className="text-3xl font-bold">Learn Web Development</h2>
        <p className="mt-3 text-gray-600">
          Explore technologies and improve your skills.
        </p>
      </header>

      {/* Course Cards */}
      <main id="courses" className="mx-auto w-full max-w-5xl flex-1 px-6 pb-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-lg bg-white p-5 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-blue-600">
                {course.title}
              </h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-gray-800 px-4 py-4 text-center text-white">
        <p>Week 4 Day 3 | React + Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
