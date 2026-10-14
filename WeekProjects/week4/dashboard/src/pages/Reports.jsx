
function Reports() {
  const reports = [
    { title: 'Monthly Sales Report', period: 'October 2026', status: 'Completed', icon: '📊' },
    { title: 'User Activity Report', period: 'October 2026', status: 'Completed', icon: '👥' },
    { title: 'Revenue Summary', period: 'October 2026', status: 'In Progress', icon: '💰' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Reports Overview
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Review your business performance reports.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((report) => (
          <div
            key={report.title}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
          >
            <div className="mb-4 text-3xl">{report.icon}</div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {report.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {report.period}
            </p>

            <span
              className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                report.status === 'Completed'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}
            >
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reports
