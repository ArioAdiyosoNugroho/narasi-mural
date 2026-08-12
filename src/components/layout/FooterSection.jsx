export default function FooterSection() {
  return (
    <footer className="mt-24 bg-[#1C1A19] px-6 pb-8 pt-16 text-white md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 border-b border-neutral-800 pb-14 text-xs md:grid-cols-4">
        <div className="space-y-4">
          <div className="inline-block border-2 border-white px-2.5 py-1 font-condensed text-2xl font-bold uppercase leading-tight tracking-wider">
            LUMIERE
            <div className="mt-0.5 border-t border-white pt-0.5 text-center text-[9px] font-normal tracking-[0.25em]">
              ART GALLERY
            </div>
          </div>
          <p className="max-w-xs text-[11px] leading-relaxed text-gray-400">
            Contemporary art gallery showcasing exceptional works from visionary artists worldwide.
            Based in London, Great Britain.
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

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-gray-200">More from Lumiere</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#about" className="transition hover:text-white">
                Virtual Tours
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                Gift Vouchers
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                Private Events
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 pt-8 text-[10px] text-gray-500 sm:flex-row sm:justify-between">
        <p>Copyright (c) 2026 Lumiere Art Gallery. All Rights Reserved.</p>
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
