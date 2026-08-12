import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { formatEuro } from '../../utils/currency.js';

export default function SearchModal({ isOpen, products, onAddToCollection, onClose }) {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [products, query]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 pt-20 backdrop-blur-sm">
      <div className="w-full max-w-xl space-y-4 rounded-3xl bg-white p-6 shadow-2xl" data-lenis-prevent>
        <div className="flex items-center justify-between">
          <h3 className="font-condensed text-xl font-bold uppercase">Search Artworks</h3>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100" type="button">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Type 'Abstract', 'Portrait', 'Contemporary'..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus
            className="w-full rounded-full bg-neutral-100 px-5 py-3 text-xs outline-none focus:ring-2 focus:ring-black"
          />
          <Search className="absolute right-4 top-3.5 h-4 w-4 text-gray-400" />
        </div>

        <div className="max-h-60 space-y-2 overflow-y-auto">
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl bg-neutral-50 p-4 text-center text-xs text-gray-500">
              No artworks match your search.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  onAddToCollection(product);
                  onClose();
                }}
                className="flex w-full items-center justify-between rounded-2xl p-2.5 text-left transition-colors hover:bg-neutral-50"
                type="button"
              >
                <span className="text-xs font-bold">{product.name}</span>
                <span className="rounded-full bg-[#E6E0D8] px-2.5 py-0.5 text-xs font-semibold">
                  {formatEuro(product.price)}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
