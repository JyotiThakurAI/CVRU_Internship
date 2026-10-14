
function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Settings
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Manage your profile and dashboard preferences.
        </p>
      </div>

      <section className="max-w-2xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
        <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
          Profile Information
        </h3>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Admin User"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="admin@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Role
            </label>
            <input
              type="text"
              value="Administrator"
              readOnly
              className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300"
            />
          </div>

          <button
            type="button"
            onClick={() => window.alert('Demo only: settings are not saved.')}
            className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </form>
      </section>
    </div>
  )
}

export default Settings
