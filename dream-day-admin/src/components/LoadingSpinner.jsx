export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="w-10 h-10 border-2 border-border-subtle border-t-accent rounded-full animate-spin" />
      <p className="mt-4 text-sm text-text-muted">{message}</p>
    </div>
  );
}
