import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { EXHIBITIONS } from '../../data/galleryData.js';

export default function BlogSection({ onOpenPost, onOpenArchive }) {
  const [blogIndex, setBlogIndex] = useState(0);

  const visiblePosts = Array.from(
    { length: Math.min(2, EXHIBITIONS.length) },
    (_, offset) => EXHIBITIONS[(blogIndex + offset) % EXHIBITIONS.length]
  );

  return (
    <section id="blog" className="space-y-8">
      <h2 className="font-condensed text-4xl font-bold uppercase tracking-normal text-dark-charcoal md:text-5xl">
        EXHIBITIONS
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col items-center gap-5 rounded-3xl border border-neutral-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-28 w-full flex-shrink-0 rounded-2xl object-cover sm:w-36"
            />
            <div className="w-full flex-1 space-y-3">
              <h3 className="text-xs font-bold leading-snug text-dark-charcoal md:text-sm">
                {post.title}
              </h3>
              <div className="my-1 w-full border-b border-gray-100"></div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-bold text-gray-500">{post.date}</span>
                <button
                  onClick={() => onOpenPost(post)}
                  className="rounded-full border border-gray-300 px-4 py-1.5 text-[10px] font-semibold transition-all hover:bg-black hover:text-white"
                  type="button"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={onOpenArchive}
          className="rounded-full bg-[#1E1C1B] px-7 py-3 text-xs font-semibold text-white transition-all hover:bg-black"
          type="button"
        >
          All Exhibitions
        </button>

        <div className="flex space-x-2">
          <button
            onClick={() => setBlogIndex((prev) => (prev - 1 + EXHIBITIONS.length) % EXHIBITIONS.length)}
            className="rounded-full border border-gray-300 p-2.5 text-dark-charcoal transition-all hover:bg-white"
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setBlogIndex((prev) => (prev + 1) % EXHIBITIONS.length)}
            className="rounded-full bg-[#1E1C1B] p-2.5 text-white transition-all hover:bg-black"
            type="button"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
