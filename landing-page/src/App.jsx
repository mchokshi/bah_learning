const features = [
  {
    title: "Fast Setup",
    description: "Start quickly with a lightweight React and Tailwind stack."
  },
  {
    title: "Responsive Layout",
    description: "Looks great on desktop, tablet, and mobile screens."
  },
  {
    title: "Clean Design",
    description: "Modern styling with utility classes and simple structure."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-semibold">LaunchPad</h1>
        <button className="rounded-lg border border-slate-500 px-4 py-2 text-sm hover:bg-slate-800">
          Contact
        </button>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              New Release
            </p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Build Better Landing Pages in Minutes
            </h2>
            <p className="mt-5 max-w-xl text-slate-300">
              A basic starter template using React and Tailwind CSS to help you
              launch your next idea quickly and beautifully.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 hover:bg-cyan-400">
                Get Started
              </button>
              <button className="rounded-lg border border-slate-600 px-5 py-3 font-medium hover:bg-slate-900">
                Learn More
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl">
            <p className="text-sm text-slate-400">Trusted by teams worldwide</p>
            <div className="mt-5 space-y-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-800"
                >
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
