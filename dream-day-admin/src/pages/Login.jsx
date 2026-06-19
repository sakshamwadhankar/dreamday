import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Crown, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md animate-scale-in relative">
        {/* Gold top accent line */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-t-[var(--radius-xl)]" />
        
        {/* Card */}
        <div className="bg-bg-surface border border-border-subtle rounded-b-[var(--radius-xl)] rounded-t-none shadow-[var(--shadow-lg)] p-8">
          {/* Brand */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-accent-subtle border border-accent-border flex items-center justify-center mx-auto mb-4">
              <Crown className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Dream Day</h1>
            <p className="text-sm text-text-secondary mt-1">Administration Portal</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-3 bg-error-subtle border border-error/20 rounded-[var(--radius-md)] text-sm text-error animate-slide-up">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
              <input
                id="login-email"
                type="email"
                required
                className="w-full px-3.5 py-2.5 bg-bg-input border border-border-default rounded-[var(--radius-md)] text-sm text-text-primary placeholder-text-muted focus:border-border-focus focus:ring-1 focus:ring-accent/30 outline-none transition-all duration-200"
                placeholder="admin@dreamday.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Password</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full px-3.5 py-2.5 pr-10 bg-bg-input border border-border-default rounded-[var(--radius-md)] text-sm text-text-primary placeholder-text-muted focus:border-border-focus focus:ring-1 focus:ring-accent/30 outline-none transition-all duration-200"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              id="login-submit"
              disabled={loading}
              type="submit"
              className={`
                w-full py-2.5 mt-2
                bg-accent hover:bg-accent-hover text-bg-base 
                font-semibold text-sm
                rounded-[var(--radius-md)] 
                transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                cursor-pointer
                ${!loading ? 'hover:shadow-[var(--shadow-gold)]' : ''}
              `}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-bg-base/30 border-t-bg-base rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
