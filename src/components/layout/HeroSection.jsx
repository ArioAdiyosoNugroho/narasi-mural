export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col justify-between bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url('https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&q=80&w=1800')",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 text-xs font-medium uppercase tracking-widest text-gray-200">
            <span className="font-bold text-white">London</span>, Great Britain
          </div>

          <h1 className="font-condensed text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl">
            CONTEMPORARY ART
            <br />
            WITH A UNIQUE{' '}
            <span className="inline-block -rotate-1 rounded-sm bg-white px-3 py-0.5 text-black">
              VISION
            </span>
          </h1>

          <div className="pt-6">
            <a
              href="#gallery"
              className="inline-block rounded-full bg-[#E8DDD0] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:text-sm"
            >
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
