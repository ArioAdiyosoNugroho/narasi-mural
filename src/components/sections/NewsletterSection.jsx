import { useState } from 'react';
import { Check } from 'lucide-react';
import { SITE_MEDIA } from '../../data/siteMedia.js';

export default function NewsletterSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (event) => {
    event.preventDefault();
    if (!newsletterEmail.trim()) {
      return;
    }

    setSubscribed(true);
  };

  return (
    <section className="grid gap-6 rounded-[32px] border border-neutral-100 bg-white p-6 shadow-sm lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
      <article className="overflow-hidden rounded-[28px] border border-neutral-100 bg-white shadow-sm">
        <div className="relative aspect-[16/10]">
          <img
            src={SITE_MEDIA.newsletter}
            alt="Gallery preview"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
              Private preview
            </span>
            <h3 className="mt-2 text-lg font-semibold leading-tight">
              First access to new works and invitation-only openings.
            </h3>
          </div>
        </div>
      </article>

      <div className="rounded-[28px] border border-neutral-100 bg-[#F7F4EF] p-8 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
          Collector circle
        </p>
        <h2 className="mt-3 font-condensed text-4xl font-bold uppercase tracking-normal text-dark-charcoal md:text-5xl">
          NEWSLETTER
        </h2>
        <p className="mt-4 text-xs text-gray-500 md:text-sm">
          Subscribe for new drops, exhibition invitations, and private viewing lists.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold text-dark-charcoal">Early access</p>
            <p className="mt-1 text-[11px] text-gray-500">See new releases first</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold text-dark-charcoal">Curator notes</p>
            <p className="mt-1 text-[11px] text-gray-500">Receive collection insights</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold text-dark-charcoal">Private previews</p>
            <p className="mt-1 text-[11px] text-gray-500">Access invitation-only events</p>
          </div>
        </div>

        {subscribed ? (
          <div className="mt-6 flex items-center space-x-2 rounded-full bg-emerald-50 p-4 text-xs font-semibold text-emerald-800">
            <Check className="h-4 w-4 text-emerald-600" />
            <span>Thank you! Your VIP gallery pass code is: LUMIEREVIP2026</span>
          </div>
        ) : (
          <form onSubmit={handleNewsletter} className="mt-6 flex max-w-md rounded-full bg-[#E6E0D8] p-1.5 shadow-inner">
            <input
              type="email"
              required
              placeholder="Your Email"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              className="flex-1 bg-transparent px-5 py-2 text-xs font-medium text-black outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-2.5 text-xs font-bold text-black shadow transition-all duration-300 hover:bg-black hover:text-white"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
