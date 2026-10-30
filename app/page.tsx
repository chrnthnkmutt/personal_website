export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24 text-center">
      <section className="max-w-2xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Website update
        </p>
        <h1 className="font-lora text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
          Under maintenance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
          Coming soon with a new version.
        </p>
      </section>
    </main>
  );
}
