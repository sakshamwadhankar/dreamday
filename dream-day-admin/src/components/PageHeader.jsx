export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="mb-8 animate-slide-up flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>
        )}
      </div>
      {children && (
        <div className="flex items-center gap-3 shrink-0">
          {children}
        </div>
      )}
    </div>
  );
}
