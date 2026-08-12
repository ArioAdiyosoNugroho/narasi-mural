import { SITE_MEDIA } from '../../data/siteMedia.js';

export default function AboutSection() {
  return (
    <section id="about" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <article className="rounded-[32px] border border-neutral-100 bg-white p-8 shadow-sm md:p-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
          Curated experience
        </p>
        <h2 className="mt-3 font-condensed text-4xl font-bold uppercase tracking-normal text-dark-charcoal md:text-5xl">
          OUR GALLERY
        </h2>
        <div className="mt-5 space-y-4 text-xs leading-relaxed text-neutral-600 md:text-sm">
          <p>
            Lumiere Art Gallery carries a curated selection of contemporary artworks from emerging and
            established artists worldwide. From abstract expressionism to photography and digital
            installations, we select pieces that bring calm, character, and depth into a room.
          </p>
          <p>
            Whether you are a first-time collector or a seasoned connoisseur, our expert team can
            guide you through paintings, sculptures, and mixed media works. Every acquisition comes
            with authentication, provenance documentation, and thoughtful installation support.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-100 bg-[#F7F4EF] p-4">
            <div className="text-2xl font-bold text-dark-charcoal">120+</div>
            <p className="mt-1 text-[11px] text-gray-500">Artworks in rotation</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 bg-[#F7F4EF] p-4">
            <div className="text-2xl font-bold text-dark-charcoal">24h</div>
            <p className="mt-1 text-[11px] text-gray-500">Collector response time</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 bg-[#F7F4EF] p-4">
            <div className="text-2xl font-bold text-dark-charcoal">Global</div>
            <p className="mt-1 text-[11px] text-gray-500">Shipping and installation</p>
          </div>
        </div>
      </article>

      <div className="grid gap-4">
        <article className="overflow-hidden rounded-[32px] border border-neutral-100 bg-white shadow-sm">
          <div className="relative aspect-[16/10]">
            <img
              src={SITE_MEDIA.about}
              alt="Gallery installation"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                Featured installation
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-tight">
                A calm, editorial display for painting, photography, and mixed media.
              </h3>
            </div>
          </div>
        </article>

        <article className="rounded-[28px] border border-neutral-100 bg-[#1E1C1B] p-6 text-white shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">Curatorial note</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-200">
            We design each room like a magazine spread: spacious, tactile, and built to let the work
            lead.
          </p>
        </article>
      </div>
    </section>
  );
}
