export default function StatCard({ icon: Icon, label, value, trend, tintClass = 'text-accent bg-accent-subtle' }) {
  return (
    <div className="group bg-bg-surface border border-border-subtle rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-card)] hover:border-border-default hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center ${tintClass}`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend !== undefined && (
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            trend >= 0 
              ? 'text-success bg-success-subtle' 
              : 'text-error bg-error-subtle'
          }`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-text-primary tracking-tight">{value}</p>
        <p className="text-sm text-text-secondary mt-1">{label}</p>
      </div>
    </div>
  );
}
