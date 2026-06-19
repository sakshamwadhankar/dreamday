const variants = {
  gold: 'bg-accent-subtle text-accent border-accent-border',
  success: 'bg-success-subtle text-success border-success/20',
  error: 'bg-error-subtle text-error border-error/20',
  info: 'bg-info-subtle text-info border-info/20',
  warning: 'bg-warning-subtle text-warning border-warning/20',
  neutral: 'bg-bg-surface-hover text-text-secondary border-border-subtle',
};

export default function Badge({ children, variant = 'gold', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-0.5 
        text-xs font-medium 
        rounded-full border
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
