import Button from './Button';

export default function EmptyState({ icon: Icon, title, description, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center animate-fade-in">
      {Icon && (
        <div className="w-16 h-16 rounded-full bg-bg-surface-hover flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-text-muted" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-text-primary mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-text-secondary max-w-md">{description}</p>
      )}
      {actionLabel && onAction && (
        <div className="mt-5">
          <Button onClick={onAction}>{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}
