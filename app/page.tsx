const demoStats = [
  { label: "Interactive flows", value: "12" },
  { label: "Reusable blocks", value: "48" },
  { label: "Demo-ready screens", value: "8" },
];

const demoCards = [
  {
    title: "Product tour",
    description:
      "Walk through onboarding, dashboard setup, and the first success moment.",
    tag: "Guided",
  },
  {
    title: "Analytics snapshot",
    description:
      "Showcase real-time charts, KPI summaries, and team performance views.",
    tag: "Data",
  },
  {
    title: "Checkout flow",
    description:
      "Preview a polished conversion path with plan selection and payment steps.",
    tag: "Commerce",
  },
  {
    title: "Team workspace",
    description:
      "Demo collaboration, activity feeds, comments, and shared project boards.",
    tag: "Collab",
  },
];

const demoTimeline = [
  "Choose a template",
  "Customize the content",
  "Present the live demo",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-10 lg:px-16">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur">
          <span className="font-semibold text-white">Demo Studio</span>
          <a
            className="rounded-full bg-cyan-400 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-300"
            href="#demos"
          >
            Browse demos
          </a>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
                New demo library
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Show more product demos from the homepage.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Give visitors a fast way to discover polished product tours,
                analytics views, checkout examples, and team collaboration
                scenarios from one focused demo hub.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-slate-200"
                href="#demos"
              >
                View demo catalog
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                href="#preview"
              >
                See live preview
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {demoStats.map((stat) => (
                <div
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  key={stat.label}
                >
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-cyan-950/40"
            id="preview"
          >
            <div className="rounded-[1.5rem] bg-slate-900 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Live demo preview</p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Launch dashboard
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-300">
                  Online
                </span>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-cyan-400 p-5 text-slate-950">
                  <p className="text-sm font-medium">Featured conversion demo</p>
                  <p className="mt-3 text-4xl font-semibold">34% lift</p>
                  <p className="mt-2 text-sm">
                    Simulated uplift from a guided checkout experience.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Active viewers</p>
                    <p className="mt-3 text-3xl font-semibold">1,284</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Completion rate</p>
                    <p className="mt-3 text-3xl font-semibold">92%</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-4">
                  <p className="mb-4 text-sm font-medium text-slate-300">
                    Demo setup steps
                  </p>
                  <div className="space-y-3">
                    {demoTimeline.map((item, index) => (
                      <div className="flex items-center gap-3" key={item}>
                        <span className="flex size-8 items-center justify-center rounded-full bg-white/10 text-sm">
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" id="demos">
          {demoCards.map((demo) => (
            <article
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/10"
              key={demo.title}
            >
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {demo.tag}
              </span>
              <h2 className="mt-6 text-2xl font-semibold">{demo.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">
                {demo.description}
              </p>
              <a
                className="mt-6 inline-flex font-semibold text-cyan-200 transition hover:text-cyan-100"
                href="#preview"
              >
                Preview demo
              </a>
            </article>
          ))}
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Ready for visitors
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                More demos, less guessing.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-200">
              The homepage now highlights multiple demo paths immediately, so a
              visitor can pick the story that matches their use case and jump
              into a focused preview without hunting through documentation.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
