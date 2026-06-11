import { connection } from "next/server";

export default async function Home() {
  await connection();

  const envVariables = Object.entries(process.env).sort(([leftKey], [rightKey]) =>
    leftKey.localeCompare(rightKey),
  );
  const renderedAt = new Date().toISOString();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-10 lg:px-16">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 sm:p-8">
          <p className="w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Testing homepage
          </p>
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Environment variables
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                All server-side environment variables available to this Next.js
                process are rendered here for testing.
              </p>
            </div>
            <dl className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <dt className="text-sm text-slate-400">Total variables</dt>
                <dd className="mt-2 text-3xl font-semibold">
                  {envVariables.length}
                </dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <dt className="text-sm text-slate-400">Rendered at</dt>
                <dd className="mt-2 font-mono text-sm text-cyan-200">
                  {renderedAt}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10 text-left">
              <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
                <tr>
                  <th className="px-5 py-4 font-semibold" scope="col">
                    Name
                  </th>
                  <th className="px-5 py-4 font-semibold" scope="col">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {envVariables.map(([name, value]) => (
                  <tr className="align-top" key={name}>
                    <th
                      className="w-1/3 px-5 py-4 font-mono text-sm font-semibold text-cyan-200"
                      scope="row"
                    >
                      {name}
                    </th>
                    <td className="px-5 py-4 font-mono text-sm leading-6 whitespace-pre-wrap break-all text-slate-200">
                      {value ?? ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
