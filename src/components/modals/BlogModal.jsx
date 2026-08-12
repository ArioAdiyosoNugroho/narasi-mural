import { X } from 'lucide-react';

export default function BlogModal({ post, onClose }) {
  if (!post) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl space-y-4 overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8" data-lenis-prevent>
        <div className="flex items-start justify-between">
          <div>
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700">
              {post.category}
            </span>
            <h3 className="mt-2 font-condensed text-2xl font-bold uppercase text-dark-charcoal">
              {post.title}
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              {post.date} • {post.readTime}
            </p>
          </div>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100" type="button">
            <X className="h-5 w-5" />
          </button>
        </div>

        <img src={post.image} alt="Exhibition Cover" className="my-4 h-56 w-full rounded-2xl object-cover" />

        <div className="space-y-3 text-xs leading-relaxed text-gray-600 md:text-sm">
          <p>{post.excerpt}</p>
          <p>
            Our exhibitions are carefully curated to provide an immersive experience that connects
            collectors with the artists&apos; vision. Each show features artist talks, guided tours, and
            exclusive preview events for our collector&apos;s circle members. The gallery provides
            comprehensive documentation including certificates of authenticity, condition reports,
            and provenance documentation for every artwork.
          </p>
        </div>

        <div className="flex justify-end border-t border-gray-100 pt-4">
          <button
            onClick={onClose}
            className="rounded-full bg-[#1E1C1B] px-6 py-2.5 text-xs font-bold text-white"
            type="button"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
