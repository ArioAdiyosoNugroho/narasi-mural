import { SITE_MEDIA } from '../../data/siteMedia.js';

export default function CommissionSection({ onOpenCommission }) {
  return (
    <section
      id="custom"
      className="overflow-hidden rounded-[32px] border border-neutral-100 bg-[#1E1C1B] text-white shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:p-6">
          <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <div className="relative aspect-[16/10]">
              <img
                src={SITE_MEDIA.commission}
                alt="Artist painting in studio"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
                  Studio portrait
                </span>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Start with a mood board and end with a framed original tailored to your space.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8 md:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
            Bespoke work
          </p>
          <h2 className="font-condensed text-4xl font-bold uppercase leading-[0.95] tracking-wide text-white md:text-5xl">
            COMMISSION YOUR
            <br />
            ARTWORK?
          </h2>
          <p className="max-w-md text-xs leading-relaxed text-gray-300 md:text-sm">
            Our professional artists will turn your vision into reality on canvas. Submit your ideas,
            select your preferred medium, or collaborate directly with our London studio artists.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold">Private consult</p>
              <p className="mt-1 text-[11px] text-gray-300">One-to-one creative direction</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold">Material choice</p>
              <p className="mt-1 text-[11px] text-gray-300">Canvas, print, or mixed media</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold">Studio review</p>
              <p className="mt-1 text-[11px] text-gray-300">Refined by our gallery team</p>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenCommission}
              className="rounded-full bg-[#E8DDD0] px-7 py-3 text-xs font-semibold text-black shadow-md transition-all transform hover:scale-105 hover:bg-white"
              type="button"
            >
              Start Commission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
