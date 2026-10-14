
import StatCard from '../components/StatCard'

function Dashboard() {
  const stats = [
    { title: 'Total Users', value: '2,450', change: '+12.5% this month', icon: '👥' },
    { title: 'Total Revenue', value: '₹85,400', change: '+8.2% this month', icon: '💰' },
    { title: 'Total Orders', value: '1,240', change: '+5.4% this month', icon: '📦' },
    { title: 'Growth', value: '24.8%', change: '+3.1% this month', icon: '📈' },
  ]

  const sales = [
    { month: 'Jan', height: '40%' },
    { month: 'Feb', height: '65%' },
    { month: 'Mar', height: '50%' },
    { month: 'Apr', height: '80%' },
    { month: 'May', height: '60%' },
    { month: 'Jun', height: '95%' },
  ]

  return (
    <div className="space-y-6">
      <div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Welcome Back!
      </h2>

      <p className="mt-1 text-slate-600 dark:text-slate-400">
        Here is your business overview.
      </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <section className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
        <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
          Monthly Sales
        </h3>

        <div className="flex h-64 items-end justify-around gap-4 border-b border-slate-200 dark:border-slate-600">
          {sales.map((item) => (
            <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div
                style={{ height: item.height }}
                className="w-full max-w-12 rounded-t-lg bg-indigo-500 transition hover:bg-indigo-700"
                title={`${item.month} sales`}
              />
              <span className="pb-2 text-sm text-slate-500 dark:text-slate-400">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
