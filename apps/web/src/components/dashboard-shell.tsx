import { ReactNode } from 'react';
import { Sidebar } from './sidebar';

export function DashboardShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="grid min-h-screen grid-cols-1 gap-6 p-6 lg:grid-cols-[288px_1fr]">
      <Sidebar />
      <section className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6">
        <h1 className="mb-6 text-3xl font-bold text-[rgb(var(--brand-primary))]">{title}</h1>
        {children}
      </section>
    </main>
  );
}
