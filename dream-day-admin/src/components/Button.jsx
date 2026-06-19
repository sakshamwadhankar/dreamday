const variants = {
  primary:
    'bg-accent hover:bg-accent-hover text-bg-base font-semibold shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-gold)]',
  secondary:
    'bg-transparent border border-accent-border text-accent hover:bg-accent-subtle',
  ghost:
    'bg-transparent text-text-secondary hover:bg-bg-surface-hover hover:text-text-primary',
  danger:
    'bg-error-subtle text-error border border-transparent hover:border-error/30 hover:bg-error/15',
};

const sizes = {
  sm: 'text-xs px-3 py-1.5 gap-1.5',
  md: 'text-sm px-4 py-2 gap-2',
  lg: 'text-base px-6 py-2.5 gap-2',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  className = '',
  disabled,
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-[var(--radius-md)]
        transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
        disabled:opacity-50 disabled:pointer-events-none
        cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />}
      {children}
      {IconRight && <IconRight className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />}
    </button>
  );
}
