import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <form className="w-full max-w-md space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
        <h1 className="text-3xl font-bold text-[rgb(var(--brand-primary))]">Barbutti Barbearia</h1>
        <input className="w-full rounded-xl bg-zinc-900 p-3" placeholder="Usuário" />
        <input className="w-full rounded-xl bg-zinc-900 p-3" placeholder="Senha" type="password" />
        <button className="w-full rounded-xl bg-[rgb(var(--brand-accent))] p-3 font-semibold">Entrar</button>
        <Link href="/primeiro-acesso" className="block text-center text-sm text-zinc-400">Primeiro acesso</Link>
      </form>
    </main>
  );
}
