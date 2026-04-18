export default function PublicBookingPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
        <h1 className="text-3xl font-bold text-[rgb(var(--brand-primary))]">Agendar atendimento</h1>
        <p className="mt-2 text-zinc-300">Escolha barbeiro, serviço, data e horário em poucos passos.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {['Unidade', 'Barbeiro', 'Serviço', 'Data', 'Horário'].map((field) => (
            <select key={field} className="rounded-xl bg-zinc-900 p-3 text-zinc-200">
              <option>{field}</option>
            </select>
          ))}
        </div>
        <button className="mt-6 rounded-xl bg-[rgb(var(--brand-accent))] px-6 py-3 font-semibold">Confirmar</button>
      </section>
    </main>
  );
}
