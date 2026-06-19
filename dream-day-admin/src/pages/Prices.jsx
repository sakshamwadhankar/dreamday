import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Save } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import FormField, { Input } from '../components/FormField';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../hooks/useToast';

export default function Prices() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  useEffect(() => {
    async function fetchPrices() {
      try {
        const docRef = doc(db, 'content', 'packages');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && Object.keys(docSnap.data()).includes('royalStage')) {
          setPrices(docSnap.data());
        } else {
          setPrices({
            royalStage: 80000,
            entranceArch: 30000,
            saffronMandap: 50000,
            haldiSwing: 20000,
            ledWall: 40000,
            ambientLight: 25000,
            cateringToggle: 800
          });
        }
      } catch (err) {
        console.error("Error fetching prices:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPrices();
  }, []);

  const handleChange = (key, value) => {
    setPrices(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await setDoc(doc(db, 'content', 'packages'), prices);
      toast.success('Prices updated successfully!');
    } catch (err) {
      toast.error('Error saving prices: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingSpinner message="Loading prices..." />;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN').format(val);
  };

  const labels = {
    royalStage: 'Royal Stage Backdrop Setup',
    entranceArch: 'Luxury Entrance Arch Decor',
    saffronMandap: 'Traditional Saffron Mandap Setup',
    haldiSwing: 'Haldi Ceremonial Swing & Props',
    ledWall: 'High-Def LED Stage Wall Display',
    ambientLight: 'Venue Ambient Uplighting & Truss',
    cateringToggle: 'Premium Gourmet Catering'
  };

  return (
    <div>
      <PageHeader title="Package Pricing" subtitle="Manage pricing for all your event packages" />

      <form onSubmit={handleSave} className="max-w-2xl space-y-4">
        <div className="stagger-children space-y-3">
          {Object.entries(prices).map(([key, value]) => (
            <div 
              key={key} 
              className="bg-bg-surface border border-border-subtle rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-card)] flex flex-col sm:flex-row sm:items-center gap-4 hover:border-border-default transition-colors duration-200 group"
            >
              {/* Gold left accent */}
              <div className="hidden sm:block w-[3px] h-8 bg-accent rounded-full shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
              
              {/* Package name */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary">{labels[key] || key}</p>
                <p className="text-xs text-text-muted mt-0.5">₹{formatCurrency(value)}</p>
              </div>

              {/* Price input */}
              <div className="w-full sm:w-44 shrink-0">
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-text-muted">₹</span>
                  <Input
                    type="number"
                    value={value}
                    onChange={(e) => handleChange(key, Number(e.target.value))}
                    className="pl-7"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Button type="submit" icon={Save} disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </div>
  );
}
