import * as React from 'react';

export function StatCard({ title, value }: { title: string; value: string | number }) {
  return React.createElement(
    'div',
    { className: 'rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-lg' },
    React.createElement('p', { className: 'text-sm text-zinc-400' }, title),
    React.createElement('p', { className: 'mt-2 text-2xl font-semibold text-white' }, value)
  );
}
