import { useState } from 'react';
import { ARTWORKS, GALLERY_CATEGORIES } from '../../data/galleryData.js';
import { formatEuro } from '../../utils/currency.js';

export default function GallerySection({ onAddToCollection }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArtworks = ARTWORKS.filter((artwork) => {
    return selectedCategory === 'All' || artwork.category === selectedCategory;
  });

  return (
    <section id="gallery" className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-condensed text-4xl font-bold uppercase tracking-normal text-dark-charcoal md:text-5xl">
            GALLERY COLLECTION
          </h2>
          <p className="mt-1 text-xs text-gray-500">Curated contemporary artworks for collectors</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs transition-all ${
                selectedCategory === category
                  ? 'bg-dark-charcoal font-semibold text-white shadow'
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredArtworks.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-neutral-100 bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
            No artworks found for this category.
          </div>
        ) : (
          filteredArtworks.slice(0, 4).map((artwork) => (
            <article
              key={artwork.id}
              className="group overflow-hidden rounded-[28px] border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F4EF]">
                <img
                  src={artwork.artworkUrl}
                  alt={artwork.name}
                  className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"></div>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-dark-charcoal backdrop-blur-sm">
                  {artwork.category}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                  Original piece
                </span>
              </div>

              <div className="space-y-3 p-5">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-dark-charcoal transition-colors group-hover:text-amber-800">
                    {artwork.name}
                  </h3>
                  <p className="text-xs text-gray-500">Curated gallery edition</p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-dark-charcoal">{formatEuro(artwork.price)}</span>
                  <button
                    onClick={() => onAddToCollection(artwork)}
                    className="rounded-full bg-[#1E1C1B] px-4 py-2 text-[11px] font-semibold text-white transition-all hover:bg-black"
                    type="button"
                  >
                    Add to Collection
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="flex justify-center pt-6">
        <button
          onClick={() => setSelectedCategory('All')}
          className="rounded-full bg-[#1E1C1B] px-8 py-3 text-xs font-semibold text-white shadow-md transition-all transform hover:scale-105 hover:bg-black"
          type="button"
        >
          View All Artworks
        </button>
      </div>
    </section>
  );
}
