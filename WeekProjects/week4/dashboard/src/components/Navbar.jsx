
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext)
  const location = useLocation()

  const pageTitles = {
    '/': 'Dashboard',
    '/users': 'Users',
    '/reports': 'Reports',
    '/settings': 'Settings',
  }

  const pageTitle = pageTitles[location.pathname] || 'Dashboard'

  return (
    <header className="flex items-center justify-between gap-4 bg-white dark:bg-slate-800 p-5 shadow-sm">
      <h1 className="text-xl font-bold text-slate-800 dark:text-white">
        {pageTitle}
      </h1>

      <button
        onClick={toggleTheme}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  )
}

export default Navbar
