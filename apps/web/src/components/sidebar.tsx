import Link from 'next/link';

const links = [
  ['Dashboard', '/dashboard'],
  ['Agenda', '/agenda'],
  ['Agendamentos', '/agendamentos'],
  ['Clientes', '/clientes'],
  ['Barbeiros', '/barbeiros'],
  ['Funcionários', '/funcionarios'],
  ['Serviços', '/servicos'],
  ['Conversas', '/conversas'],
  ['Configurações', '/configuracoes'],
  ['Usuários', '/usuarios']
];

export function Sidebar() {
  return (
    <aside className="w-72 rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
      <img
        src="https://res.cloudinary.com/dk6okgt0a/image/upload/v1776542449/WhatsApp_Image_2026-04-17_at_21.09.05_sgbuvm.jpg"
        alt="Barbutti"
        className="mx-auto mb-6 h-24 w-24 rounded-full object-cover"
      />
      <nav className="space-y-2">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded-xl px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
