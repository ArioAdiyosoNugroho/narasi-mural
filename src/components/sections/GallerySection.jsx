import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';import { ArrowUpRight, X } from 'lucide-react';

import {
  GALLERY_ACTIVITIES,
  GALLERY_ACTIVITY_CATEGORIES,
} from '../../data/galleryData.js';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities =
    selectedCategory === 'All'
      ? GALLERY_ACTIVITIES
      : GALLERY_ACTIVITIES.filter(
          (activity) => activity.category === selectedCategory
        );

  const getActivityImage = (activity) =>
    activity.image ?? GALLERY_ACTIVITIES[0]?.image ?? '';

  const closeModal = () => {
    setSelectedActivity(null);
  };

  useEffect(() => {
    if (!selectedActivity) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Lock both <html> and <body> — some app shells scroll the
    // documentElement instead of body, so locking only body left
    // the page scrollable behind the modal.
    const lockTargets = [document.documentElement, document.body];
    const previousOverflows = lockTargets.map((el) => el.style.overflow);

    document.addEventListener('keydown', handleKeyDown);
    lockTargets.forEach((el) => {
      el.style.overflow = 'hidden';
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      lockTargets.forEach((el, i) => {
        el.style.overflow = previousOverflows[i];
      });
    };
  }, [selectedActivity]);

  return (
    <>
      <section id="gallery" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
              Mural Documentation
            </p>

            <h2 className="mt-3 font-condensed text-4xl font-bold uppercase leading-[0.9] tracking-tight text-[#1E1C1B] sm:text-5xl md:text-6xl">
              THE MAKING
              <br />
              <span className="text-neutral-400">OF THE MURAL.</span>
            </h2>

            <p className="mt-4 max-w-xl text-xs leading-6 text-neutral-500 sm:text-sm">
              Dokumentasi perjalanan pembuatan mural, mulai dari persiapan
              dinding, pengembangan konsep, proses pengecatan, hingga karya
              selesai.
            </p>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {GALLERY_ACTIVITY_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`
                  shrink-0 rounded-full px-4 py-2
                  text-[10px] font-semibold uppercase tracking-[0.15em]
                  transition-all duration-300
                  ${
                    isActive
                      ? 'bg-[#1E1C1B] text-white'
                      : 'border border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300 hover:text-[#1E1C1B]'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredActivities.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredActivities.map((activity, index) => (
              <article
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className="
                  group cursor-pointer overflow-hidden
                  rounded-[28px]
                  border border-neutral-100
                  bg-white
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F4EF]">
                  <img
                    src={getActivityImage(activity)}
                    alt={activity.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  <span
                    className="
                      absolute left-4 top-4
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      bg-white/90
                      text-[9px]
                      font-semibold
                      text-[#1E1C1B]
                      backdrop-blur-sm
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="
                      absolute right-4 top-4
                      rounded-full
                      bg-white/90
                      px-3 py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#1E1C1B]
                      backdrop-blur-sm
                    "
                  >
                    {activity.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                        {activity.title}
                      </h3>
                    </div>

                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/30
                        bg-white/10
                        text-white
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover:rotate-45
                        group-hover:bg-white
                        group-hover:text-[#1E1C1B]
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs leading-6 text-neutral-500">
                    {activity.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                      View documentation
                    </span>

                    <ArrowUpRight
                      className="
                        h-3.5 w-3.5
                        text-neutral-400
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                      strokeWidth={1.8}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-neutral-100 bg-white p-10 text-center">
            <p className="text-sm text-neutral-500">
              Belum ada dokumentasi untuk kategori ini.
            </p>
          </div>
        )}

        <div className="border-t border-neutral-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-6 text-neutral-500 sm:text-sm">
              Setiap foto merekam bagian dari proses. Dari sebuah ide sederhana
              hingga menjadi karya mural yang dapat dilihat dan dinikmati
              bersama.
            </p>

            <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              <span>XII-RA</span>
              <span className="h-px w-8 bg-neutral-300" />
              <span>Mural Project</span>
            </div>
          </div>
        </div>
      </section>

{selectedActivity &&
  createPortal(
    <div
      className="
        fixed inset-0 z-[99999]
        flex h-[100dvh] w-screen
        items-center justify-center
        overflow-hidden
        bg-black/95
        p-0
        backdrop-blur-sm
        overscroll-none
      "
      onClick={closeModal}
    >

      {/* Close button */}
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close image"
        className="
          absolute right-4 top-4 z-[110]
          flex h-11 w-11
          items-center justify-center
          rounded-full
          bg-white/90
          text-[#1E1C1B]
          shadow-xl
          backdrop-blur-md
          transition-all duration-300
          hover:rotate-90
          hover:bg-white
          active:scale-95
          sm:right-6 sm:top-6
        "
      >
        <X className="h-5 w-5" strokeWidth={2} />
      </button>

      {/* Fullscreen image area */}
      <div
        className="
          relative
          flex h-full w-full
          items-center justify-center
          overflow-hidden
          animate-[modalIn_0.35s_ease-out]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Image */}
        <img
          src={getActivityImage(selectedActivity)}
          alt={selectedActivity.title}
          className="
            block
            h-auto
            max-h-full
            w-auto
            max-w-full
            select-none
            object-contain
          "
          draggable="false"
        />

        {/* Bottom gradient */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-52
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-transparent
          "
        />

        {/* Information */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            z-10
            p-5
            text-white
            sm:p-8
            md:p-10
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >
            {selectedActivity.category} - XII-RA Mural Project
          </p>

          <h3
            className="
              mt-2
              font-condensed
              text-2xl
              font-bold
              uppercase
              leading-none
              sm:text-4xl
              md:text-5xl
            "
          >
            {selectedActivity.title}
          </h3>

          <p
            className="
              mt-3
              max-w-2xl
              text-xs
              leading-5
              text-white/65
              sm:text-sm
              sm:leading-6
            "
          >
            {selectedActivity.description}
          </p>
        </div>
      </div>
    </div>,
    document.body
  )}

      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(10px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}