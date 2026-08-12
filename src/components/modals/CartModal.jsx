import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { formatEuro } from '../../utils/currency.js';

export default function CartModal({
  isOpen,
  cart,
  cartItemCount,
  cartTotal,
  onClose,
  onUpdateQty,
  onCheckout,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div
        className="flex h-full w-full max-w-md flex-col justify-between bg-white p-6 shadow-2xl animate-in slide-in-from-right duration-300"
        data-lenis-prevent
      >
        <div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wider">
              Collection ({cartItemCount})
            </h3>
            <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100" type="button">
              <X className="h-5 w-5" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="space-y-3 py-20 text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-gray-300" />
              <p className="text-xs text-gray-500">Your collection list is currently empty.</p>
            </div>
          ) : (
            <div className="my-4 max-h-[60vh] divide-y divide-gray-100 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 p-1">
                    <img src={item.artworkUrl} alt={item.name} className="h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold">{item.name}</h4>
                    <p className="text-[10px] text-gray-500">{formatEuro(item.price)}</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-full bg-neutral-100 px-2 py-1">
                    <button onClick={() => onUpdateQty(item.id, -1)} className="p-1 hover:text-red-500" type="button">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => onUpdateQty(item.id, 1)} className="p-1 hover:text-green-600" type="button">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="space-y-4 border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between text-sm font-bold">
              <span>Subtotal</span>
              <span>{formatEuro(cartTotal)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full rounded-full bg-[#1E1C1B] py-3.5 text-xs font-semibold text-white transition-all hover:bg-black"
              type="button"
            >
              Submit Inquiry ({formatEuro(cartTotal)})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
