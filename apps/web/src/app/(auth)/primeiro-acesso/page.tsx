export default function FirstAccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <form className="w-full max-w-md space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
        <h1 className="text-2xl font-bold">Definir nova senha</h1>
        <input className="w-full rounded-xl bg-zinc-900 p-3" placeholder="Nova senha" type="password" />
        <input className="w-full rounded-xl bg-zinc-900 p-3" placeholder="Confirmar senha" type="password" />
        <button className="w-full rounded-xl bg-[rgb(var(--brand-accent))] p-3 font-semibold">Salvar</button>
      </form>
    </main>
  );
}
