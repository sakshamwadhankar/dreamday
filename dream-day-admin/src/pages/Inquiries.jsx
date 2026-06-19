import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Mail, Calendar, Users, Package } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Badge from '../components/Badge';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setInquiries(list);
      } catch (err) {
        console.error("Error fetching inquiries:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchInquiries();
  }, []);

  if (loading) return <LoadingSpinner message="Loading inquiries..." />;

  return (
    <div>
      <PageHeader 
        title="Leads & Inquiries" 
        subtitle={`${inquiries.length} total inquiries received`}
      >
        <Badge variant="gold">{inquiries.length} Total</Badge>
      </PageHeader>

      <div className="bg-bg-surface border border-border-subtle rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] overflow-hidden animate-slide-up">
        {inquiries.length === 0 ? (
          <EmptyState
            icon={Mail}
            title="No inquiries yet"
            description="When clients submit inquiries through your website, they will appear here."
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-bg-surface-hover border-b border-border-subtle">
                  <th className="px-6 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Event Date
                    </span>
                  </th>
                  <th className="px-6 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      Guests
                    </span>
                  </th>
                  <th className="px-6 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5" />
                      Packages
                    </span>
                  </th>
                  <th className="px-6 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq, index) => (
                  <tr 
                    key={inq.id} 
                    className="border-b border-border-subtle/50 hover:bg-bg-surface-hover/50 transition-colors duration-150"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-text-primary">{inq.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-text-secondary">{inq.email}</div>
                      {inq.phone && (
                        <div className="text-text-muted text-xs mt-0.5">{inq.phone}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-text-secondary">{inq.date || '—'}</td>
                    <td className="px-6 py-4 text-text-secondary">{inq.guests || '—'}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {inq.packages && inq.packages.map(pkg => (
                          <Badge key={pkg} variant="gold">{pkg}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-muted text-xs">
                      {inq.createdAt?.toDate 
                        ? inq.createdAt.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                        : '—'
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
