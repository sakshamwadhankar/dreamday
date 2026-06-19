export default function FormField({ label, error, children, className = '' }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-1.5">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-xs text-error">{error}</p>
      )}
    </div>
  );
}

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`
        w-full px-3.5 py-2.5 
        bg-bg-input border border-border-default 
        rounded-[var(--radius-md)] 
        text-sm text-text-primary placeholder-text-muted
        focus:border-border-focus focus:ring-1 focus:ring-accent/30
        outline-none transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    />
  );
}

export function Select({ className = '', children, ...props }) {
  return (
    <select
      className={`
        w-full px-3.5 py-2.5 
        bg-bg-input border border-border-default 
        rounded-[var(--radius-md)] 
        text-sm text-text-primary
        focus:border-border-focus focus:ring-1 focus:ring-accent/30
        outline-none transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  );
}

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`
        w-full px-3.5 py-2.5 
        bg-bg-input border border-border-default 
        rounded-[var(--radius-md)] 
        text-sm text-text-primary placeholder-text-muted
        focus:border-border-focus focus:ring-1 focus:ring-accent/30
        outline-none transition-all duration-200 resize-y
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    />
  );
}
