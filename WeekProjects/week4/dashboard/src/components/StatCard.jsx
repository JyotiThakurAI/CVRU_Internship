
function StatCard({ title, value, change, icon }) {
  return (
    
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {title}
        </p>

        <span className="text-2xl">{icon}</span>
      </div>

      <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
        {value}
      </h2>

      <p className="mt-2 text-sm font-medium text-emerald-600">
        {change}
      </p>
    </div>
  )
}

export default StatCard
