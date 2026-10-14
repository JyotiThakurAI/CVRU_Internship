
import { NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Users', path: '/users' },
  { name: 'Reports', path: '/reports' },
  { name: 'Settings', path: '/settings' },
]

function Sidebar() {
  return (
    <aside className="hidden md:block w-64 shrink-0 min-h-screen bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">AdminPanel</h2>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
