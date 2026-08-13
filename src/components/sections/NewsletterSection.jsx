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
    <section
      id="note"
      className="
        grid
        gap-6
        rounded-[32px]
        border
        border-neutral-100
        bg-white
        p-4
        shadow-sm
        sm:p-6
        lg:grid-cols-[0.92fr_1.08fr]
        lg:p-8
      "
    >
      {/* =========================
          IMAGE / PROJECT PREVIEW
      ========================== */}
      <article
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-neutral-100
          bg-[#F7F4EF]
          shadow-sm
          lg:h-full
        "
      >
        <div
          className="
            relative
            h-[260px]
            overflow-hidden
            sm:h-[360px]
            md:h-[440px]
            lg:h-full
            lg:min-h-[620px]
          "
        >
          <img
            src={SITE_MEDIA.newsletter}
            alt="XII-RA Mural Project"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/65
              via-black/10
              to-transparent
            "
          />

          {/* Content */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-5
              sm:p-7
              md:p-8
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/70
                sm:text-[10px]
              "
            >
              XII-RA · Mural Project
            </span>

            <h3
              className="
                mt-2
                max-w-md
                font-condensed
                text-2xl
                font-bold
                uppercase
                leading-[0.95]
                text-white
                sm:text-3xl
                md:text-4xl
              "
            >
              THINK WITH
              <br />
              PASSION.
            </h3>
          </div>
        </div>
      </article>

      {/* =========================
          ARTIST STATEMENT
      ========================== */}
      <article
        className="
          flex
          flex-col
          rounded-[28px]
          border
          border-neutral-100
          bg-[#F7F4EF]
          p-6
          shadow-sm
          sm:p-8
          md:p-10
          lg:p-12
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-gray-400
              sm:text-[10px]
            "
          >
            Artist Statement
          </p>

          <span
            className="
              text-[10px]
              font-medium
              tracking-[0.15em]
              text-gray-300
            "
          >
            04
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            mt-5
            max-w-xl
            font-condensed
            text-4xl
            font-bold
            uppercase
            leading-[0.9]
            tracking-tight
            text-dark-charcoal
            sm:text-5xl
            md:text-6xl
          "
        >
          A NOTE
          <br />
          FROM XII-RA.
        </h2>

        {/* Content */}
        <div
          className="
            mt-7
            max-w-2xl
            space-y-5
            text-sm
            leading-7
            text-gray-600
            sm:mt-8
            sm:text-base
            sm:leading-8
          "
        >
          <p>
            Mural ini menjadi ruang bagi kami untuk menuangkan cara pandang
            sebagai pelajar yang hidup di tengah perkembangan kreativitas dan
            teknologi.
          </p>

          <p>
            Bagi kami, menciptakan sebuah karya bukan hanya tentang hasil akhir.
            Setiap ide, keberanian untuk mencoba, dan proses mengerjakan sesuatu
            bersama menjadi bagian dari pengalaman yang membentuk karya ini.
          </p>

          <p>
            <strong className="font-semibold text-dark-charcoal">
              Think with Passion, Code with Vision.
            </strong>{' '}
            adalah pesan bahwa kreativitas membutuhkan keberanian untuk
            berpikir, sementara visi memberikan arah untuk mewujudkannya.
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            mt-auto
            grid
            grid-cols-2
            gap-6
            border-t
            border-neutral-200
            pt-6
            sm:mt-12
            sm:pt-7
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-400
              "
            >
              Created By
            </p>

            <p
              className="
                mt-1
                text-sm
                font-semibold
                text-dark-charcoal
                sm:text-base
              "
            >
              XII-RA
            </p>
          </div>

          <div className="text-right">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-400
              "
            >
              Project
            </p>

            <p
              className="
                mt-1
                text-sm
                font-semibold
                text-dark-charcoal
                sm:text-base
              "
            >
              Mural · 2026
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}