import { useEffect, useState } from 'react';
import { SITE_MEDIA } from '../../data/siteMedia.js';
import mural from '../../assets/img/mural.jpeg'
import {
  ArrowDownRight,
  Expand,
  X,
} from 'lucide-react';

export default function AboutSection() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Close modal with ESC + lock page scroll
  useEffect(() => {
    if (!isImageOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsImageOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isImageOpen]);

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-[#F7F4EF] px-6 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16 lg:py-32 br-10 rounded-2xl"
      >
        <div className="mx-auto max-w-7xl">

          {/* =========================================
              HEADER
          ========================================== */}
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
                Artwork narrative
              </p>

              <h2 className="mt-3 max-w-3xl font-condensed text-5xl font-bold uppercase leading-[0.88] tracking-tight text-[#1E1C1B] sm:text-6xl md:text-7xl">
                THE STORY
                <br />
                BEHIND THE
                <br />
                <span className="text-neutral-400">MURAL.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 pb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
              <span>01</span>
              <span className="h-px w-10 bg-neutral-300" />
              <span>Artwork</span>
            </div>
          </div>

          {/* =========================================
              FULL LANDSCAPE MURAL
          ========================================== */}
          <article className="group overflow-hidden rounded-[28px] bg-white shadow-sm sm:rounded-[32px]">

            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              className="
                relative
                block
                w-full
                cursor-zoom-in
                text-left
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#1E1C1B]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#F7F4EF]
              "
              aria-label="Open mural artwork in fullscreen"
            >
              <div className="relative aspect-[1600/853] overflow-hidden">

                {/* MURAL IMAGE */}
                <img
                  src={SITE_MEDIA.about}
                  alt="XII-RA mural artwork"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.015]
                  "
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* =================================
                    BOTTOM INFORMATION
                ================================= */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">

                  <div className="text-white">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/65">
                      Featured artwork
                    </p>

                    <h3 className="mt-1 text-sm font-medium sm:text-base">
                      XII-RA Mural Project
                    </h3>
                  </div>

                  {/* Expand Button */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-black/20
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-white
                      group-hover:text-[#1E1C1B]
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Expand className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </div>
                </div>

                {/* Small top hint */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-3
                    py-1.5
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                    opacity-0
                    backdrop-blur-md
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    sm:right-7
                    sm:top-7
                  "
                >
                  View artwork
                </div>

              </div>
            </button>
          </article>

          {/* =========================================
              INTRODUCTION
          ========================================== */}
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
                About the work
              </p>

              <h3 className="mt-4 font-condensed text-3xl font-bold uppercase leading-[0.95] text-[#1E1C1B] sm:text-4xl">
                RAIH LAH
                <br />
                IMPIAN.
              </h3>
            </div>

            <div className="max-w-3xl space-y-4 text-sm leading-7 text-neutral-600 md:text-[15px]">
              <p>
                Mural ini menggambarkan semangat pelajar untuk berani bermimpi,
                mengembangkan kreativitas, dan memanfaatkan teknologi sebagai
                bagian dari perjalanan menuju masa depan.
              </p>

              <p>
                Komposisi mural dibuat dalam bentuk landscape untuk menunjukkan
                sebuah perjalanan visual. Setiap karakter, objek, dan simbol
                menggambarkan berbagai kemungkinan yang dapat dicapai ketika
                seseorang berani memiliki impian dan terus mengembangkannya
                melalui pengetahuan, kreativitas, dan teknologi.
              </p>
            </div>
          </div>

          {/* =========================================
              VISUAL ELEMENTS
          ========================================== */}
          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">

            {/* LEFT */}
            <article className="rounded-[28px] bg-[#E8DDD0] p-7 sm:p-9 md:p-10">
              <div className="flex items-start justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  Visual language
                </p>

                <span className="text-xs text-neutral-400">
                  02
                </span>
              </div>

              <h3 className="mt-8 max-w-md font-condensed text-3xl font-bold uppercase leading-[0.95] text-[#1E1C1B] sm:text-4xl">
                EVERY ELEMENT
                <br />
                TELLS A STORY.
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-600">

                <div>
                  <p className="font-semibold text-[#1E1C1B]">
                    Dunia dan lingkungan
                  </p>

                  <p className="mt-1">
                    Bumi dan tanaman di bagian tengah menjadi simbol kehidupan,
                    keberlanjutan, dan tanggung jawab generasi muda terhadap
                    masa depan.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#1E1C1B]">
                    Teknologi
                  </p>

                  <p className="mt-1">
                    Laptop, kode program, angka, dan berbagai simbol digital
                    merepresentasikan perkembangan teknologi serta dunia
                    pemrograman yang menjadi bagian dari kehidupan generasi
                    sekarang.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#1E1C1B]">
                    Para pelajar
                  </p>

                  <p className="mt-1">
                    Karakter-karakter yang mengelilingi bumi menggambarkan
                    generasi muda dengan berbagai potensi, minat, dan cita-cita
                    yang saling berkontribusi untuk menciptakan masa depan.
                  </p>
                </div>

              </div>
            </article>

            {/* RIGHT */}
            <article className="rounded-[28px] bg-[#1E1C1B] p-7 text-white sm:p-9 md:p-10">
              <div className="flex items-start justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
                  Core message
                </p>

                <span className="text-xs text-white/30">
                  03
                </span>
              </div>

              <h3 className="mt-8 max-w-md font-condensed text-3xl font-bold uppercase leading-[0.95] sm:text-4xl">
                DENGAN
                <br />
                KREATIF.
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-7 text-white/65">

                <p>
                  Tulisan{' '}
                  <span className="font-semibold text-white">
                    "RAIH LAH IMPIAN"
                  </span>{' '}
                  menjadi ajakan untuk tidak takut memiliki cita-cita dan terus
                  berusaha untuk mencapainya.
                </p>

                <p>
                  Sementara itu, pesan{' '}
                  <span className="font-semibold text-white">
                    "DENGAN KREATIF"
                  </span>{' '}
                  menekankan bahwa kreativitas merupakan salah satu kemampuan
                  penting untuk menghadapi perubahan dan menemukan solusi baru.
                </p>

                <p>
                  Keduanya menjadi satu pesan utama: impian membutuhkan
                  keberanian untuk dimulai dan kreativitas untuk diwujudkan.
                </p>

              </div>
            </article>
          </div>

          {/* =========================================
              ARTWORK DETAILS
          ========================================== */}
          <div className="mt-6 grid grid-cols-2 gap-5 rounded-[28px] bg-white p-7 shadow-sm sm:grid-cols-4 sm:p-9">

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                Format
              </p>

              <p className="mt-2 text-xs font-semibold text-[#1E1C1B]">
                Landscape Mural
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                Theme
              </p>

              <p className="mt-2 text-xs font-semibold text-[#1E1C1B]">
                Dreams & Creativity
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                Elements
              </p>

              <p className="mt-2 text-xs font-semibold text-[#1E1C1B]">
                People · Earth · Technology
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                Project
              </p>

              <p className="mt-2 text-xs font-semibold text-[#1E1C1B]">
                XII-RA Mural
              </p>
            </div>

          </div>

          {/* =========================================
              CLOSING STATEMENT
          ========================================== */}
          <div className="mt-20 border-t border-neutral-200 pt-10 text-center md:mt-28 md:pt-14">
            <p className="mx-auto max-w-4xl font-condensed text-3xl font-bold uppercase leading-[0.92] tracking-tight text-[#1E1C1B] sm:text-4xl md:text-5xl">
              "Think with Passion,
              <br />
              Code with Vision."
            </p>

            <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              XII-RA · Mural Project
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          FULLSCREEN ARTWORK MODAL
      ====================================================== */}
      {isImageOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
          className="flex h-screen w-screen items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="XII-RA Mural Artwork"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsImageOpen(false);
            }
          }}
        >
          {/* MODAL WRAPPER */}
          <div
            className="
              relative
              flex
              w-full
              max-w-5xl
              flex-col
              items-center
              animate-[artworkModalIn_400ms_cubic-bezier(0.16,1,0.3,1)]
            "
          >
            {/* =========================================
                ARTWORK FRAME
                Tinggi dibatasi viewport agar tidak overflow
            ========================================== */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#111] shadow-2xl sm:rounded-3xl">

              {/* BACKGROUND BLUR
                  Pakai style inline agar pasti cover full area,
                  tidak bergantung pada tinggi container yang belum terbentuk
              */}
              <img
                src={SITE_MEDIA.about}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(1.1)',
                  opacity: 0.25,
                  filter: 'blur(20px)',
                }}
              />

              {/* DARK OVERLAY */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.4)',
                }}
              />

              {/* ACTUAL ARTWORK
                  Gambar ini yang menentukan tinggi container (flow normal).
                  max-h-[80vh] agar tidak melebihi tinggi layar.
              */}
              <div className="relative flex items-center justify-center p-4 sm:p-6">
                <img
                  src={SITE_MEDIA.about}
                  alt="XII-RA Mural Artwork"
                  className="
                    block
                    max-h-[75vh]
                    w-auto
                    max-w-full
                    rounded-lg
                    object-contain
                    shadow-2xl
                    sm:rounded-xl
                  "
                />
              </div>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setIsImageOpen(false)}
                aria-label="Close artwork"
                title="Close"
                className="
                  absolute
                  right-3
                  top-3
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white
                  hover:text-black
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  sm:right-4
                  sm:top-4
                  sm:h-11
                  sm:w-11
                "
              >
                <X className="h-5 w-5" />
              </button>

              {/* ARTWORK LABEL */}
              <div
                className="
                  absolute
                  bottom-3
                  left-1/2
                  z-20
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-2
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                  backdrop-blur-xl
                  sm:bottom-4
                  sm:px-5
                  sm:py-2.5
                "
              >
                XII-RA · Mural Project
              </div>
            </div>

            {/* MODAL INFO */}
            <div className="mt-3 flex w-full items-center justify-between px-1 text-white/40">
              <p className="text-[9px] uppercase tracking-[0.25em]">
                Featured Artwork
              </p>

              <p className="hidden text-[9px] uppercase tracking-[0.2em] sm:block">
                Click outside or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          MODAL ANIMATION
      ========================================== */}
      <style>{`
        @keyframes artworkModalIn {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(12px);
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