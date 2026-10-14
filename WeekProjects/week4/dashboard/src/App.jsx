
import { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  const { darkMode } = useContext(ThemeContext)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (

    <div
      className={`min-h-screen ${
        darkMode
          ? 'dark bg-slate-900 text-white'
          : 'bg-slate-100 text-slate-900'
      }`}
    >

      <div className="flex min-h-screen">
        <Sidebar
          mobileOpen={mobileOpen}
          closeMobile={closeMobile}
        />

        <div className="min-w-0 flex-1">
          <Navbar
            onMenuClick={() => setMobileOpen((open) => !open)}
          />

          <main className="p-4 sm:p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
