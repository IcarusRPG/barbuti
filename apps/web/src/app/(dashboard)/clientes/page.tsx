import { DashboardShell } from '@/components/dashboard-shell';

export default function Page() {
  return (
    <DashboardShell title="Clientes">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-zinc-300">
        Módulo de clientes pronto para evolução com CRUD, filtros e integrações.
      </div>
    </DashboardShell>
  );
}
