import React, { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

const DEFAULT_NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Exhibitions', href: '#exhibitions' },
  { label: 'Artworks', href: '#artworks' },
  { label: 'Artists', href: '#artists' },
  { label: 'Contact', href: '#contact' },
];

export default function StickyNavbar({ 
  cartItemCount = 2, 
  onOpenSearch = () => {}, 
  onOpenCart = () => {},
  navLinks = DEFAULT_NAV_LINKS
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none px-4 pt-4 sm:px-8 sm:pt-5">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        
        {/* LOGO (LEFT) */}
        <div className="pointer-events-auto flex items-center">
          <a
            href="#home"
            className={`group flex items-center gap-2 font-serif font-black tracking-wider transition-all duration-300 ${
              isScrolled 
                ? 'text-neutral-900 dark:text-white text-lg sm:text-xl' 
                : 'text-white text-xl sm:text-2xl drop-shadow-md'
            }`}
          >
            <span className="uppercase tracking-[0.18em]">LUMIÈRE</span>
          </a>
        </div>

        {/* CENTER NAV PILL (DESKTOP) */}
        <nav
          className={`pointer-events-auto hidden md:flex items-center space-x-1 rounded-full px-3 py-1.5 transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 dark:bg-neutral-900/90 shadow-md backdrop-blur-md border border-neutral-200/60 dark:border-neutral-800'
              : 'bg-white shadow-xl border border-white/80'
          }`}
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.href || idx}
              href={link.href}
              className={`px-4 py-1.5 text-xs font-bold tracking-wide transition-all rounded-full ${
                isScrolled
                  ? 'text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  : 'text-neutral-900 hover:text-black hover:bg-neutral-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTION PILL (SEARCH & CART) */}
        <div className="pointer-events-auto flex items-center gap-2">
          <div
            className={`flex items-center space-x-1 rounded-full px-2 py-1 transition-all duration-300 ${
              isScrolled
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md'
                : 'bg-neutral-900 text-white shadow-xl'
            }`}
          >
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 transition-transform hover:scale-110 focus:outline-none rounded-full hover:bg-white/10 dark:hover:bg-black/10"
              title="Search"
              type="button"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Cart / Collection Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 transition-transform hover:scale-110 focus:outline-none rounded-full hover:bg-white/10 dark:hover:bg-black/10"
              title="Collection"
              type="button"
              aria-label="Collection"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 transition-transform md:hidden focus:outline-none rounded-full hover:bg-white/10 dark:hover:bg-black/10"
              type="button"
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN PANEL */}
      <div
        className={`pointer-events-auto transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-sm rounded-2xl bg-white/95 dark:bg-neutral-900/95 p-3 shadow-xl backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.href || idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
