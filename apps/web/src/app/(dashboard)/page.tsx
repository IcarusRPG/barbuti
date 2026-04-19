import { DashboardShell } from '@/components/dashboard-shell';
import { kpis } from '@/lib/mock';

export default function DashboardPage() {
  return (
    <DashboardShell title="Painel Administrativo">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map(([title, value]) => (
          <article key={title} className="rounded-2xl border border-zinc-700 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">{title}</p>
            <p className="mt-2 text-2xl font-bold">{value}</p>
          </article>
        ))}
      </div>
    </DashboardShell>
  );
}
