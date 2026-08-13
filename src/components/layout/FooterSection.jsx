export default function FooterSection() {
  return (
    <footer className="mt-24 bg-[#1C1A19] px-6 pb-8 pt-16 text-white md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 border-b border-neutral-800 pb-14 text-xs md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex flex-col items-start font-condensed">
            <div className="flex items-center gap-1.5 text-2xl font-extrabold uppercase tracking-[0.15em] text-white">
              <span>XII</span>
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
              <span className="font-medium text-neutral-400">RA</span>
            </div>
            <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-neutral-500 mt-1">
              MURAL PROJECT
            </div>
          </div>
          <p className="max-w-xs text-[11px] leading-relaxed text-gray-400">
            Contemporary mural art project by class XII-RA. A showcase of creativity, expression, and collaboration.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-gray-200">Help & information</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="transition hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                Returns & Refunds
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-gray-200">About Lumiere</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="transition hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                Artist Submissions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 pt-8 text-[10px] text-gray-500 sm:flex-row sm:justify-between">
        <p>Copyright (c) 2026 Class XII-RA Mural Project. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#home" className="transition hover:text-white">
            Privacy & Cookies
          </a>
          <a href="#home" className="transition hover:text-white">
            Ts&Cs
          </a>
          <a href="#home" className="transition hover:text-white">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}
