import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const styles = {
  success: 'border-success/30 bg-success-subtle',
  error: 'border-error/30 bg-error-subtle',
  info: 'border-info/30 bg-info-subtle',
};

const iconColors = {
  success: 'text-success',
  error: 'text-error',
  info: 'text-info',
};

export default function Toast({ id, message, variant = 'success', duration = 4000, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    requestAnimationFrame(() => setVisible(true));

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const Icon = icons[variant];

  return (
    <div
      className={`
        pointer-events-auto
        flex items-center gap-3 
        min-w-[320px] max-w-[420px]
        px-4 py-3
        bg-bg-elevated border ${styles[variant]}
        rounded-[var(--radius-lg)] 
        shadow-[var(--shadow-lg)]
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
      `}
    >
      <Icon className={`w-5 h-5 shrink-0 ${iconColors[variant]}`} />
      <p className="text-sm text-text-primary flex-1">{message}</p>
      <button
        onClick={() => { setVisible(false); setTimeout(onClose, 300); }}
        className="w-6 h-6 flex items-center justify-center rounded text-text-muted hover:text-text-primary transition-colors shrink-0 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-[var(--radius-lg)] overflow-hidden">
        <div
          className={`h-full ${iconColors[variant].replace('text-', 'bg-')} opacity-40`}
          style={{ animation: `progressBar ${duration}ms linear forwards` }}
        />
      </div>
    </div>
  );
}
