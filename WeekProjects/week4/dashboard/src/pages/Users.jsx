
function Users() {
  const users = [
    { id: 1, name: 'Aman Sharma', email: 'aman@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Neha Verma', email: 'neha@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Ravi Patel', email: 'ravi@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Pooja Singh', email: 'pooja@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Karan Joshi', email: 'karan@example.com', role: 'Editor', status: 'Active' },
  ]

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
      <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
        User Management
      </h2>

      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
        View and manage your registered users.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-200 dark:border-slate-700"
              >
                <td className="p-3 font-medium text-slate-900 dark:text-white">
                  {user.name}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-300">
                  {user.email}
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-300">
                  {user.role}
                </td>
                <td className="p-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Users
