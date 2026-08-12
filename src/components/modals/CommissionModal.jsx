import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { COMMISSION_SWATCHES } from '../../data/galleryData.js';

export default function CommissionModal({ isOpen, onClose, onSubmitSuccess }) {
  const [customText, setCustomText] = useState('YOUR ARTWORK');
  const [customColor, setCustomColor] = useState(COMMISSION_SWATCHES[0]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    setSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8" data-lenis-prevent>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-condensed text-2xl font-bold uppercase">COMMISSION ARTWORK</h3>
            <p className="text-xs text-gray-500">Preview your custom commission concept</p>
          </div>
          <button onClick={handleClose} className="rounded-full p-1 hover:bg-gray-100" type="button">
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="space-y-4 py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-bold">Commission Request Submitted!</h4>
            <p className="mx-auto max-w-sm text-xs text-gray-500">
              Our London artists will review your commission concept and contact you within 24 hours to
              discuss details.
            </p>
            <button
              onClick={handleClose}
              className="rounded-full bg-[#1E1C1B] px-6 py-2.5 text-xs font-bold text-white"
              type="button"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl bg-[#F3EFEA] p-8">
              <div
                className="flex h-72 w-24 flex-col items-center justify-between rounded-full border-4 border-white p-3 text-center shadow-2xl transition-all"
                style={{ backgroundColor: customColor }}
              >
                <div className="mt-2 h-3 w-3 rounded-full bg-black/40"></div>
                <span className="break-all px-1 font-condensed text-xs font-bold uppercase tracking-widest text-black">
                  {customText || 'YOUR ARTWORK'}
                </span>
                <div className="mb-2 h-3 w-3 rounded-full bg-black/40"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-gray-700">Artwork Title / Theme</label>
                <input
                  type="text"
                  value={customText}
                  onChange={(event) => setCustomText(event.target.value)}
                  className="w-full rounded-full border border-gray-200 px-4 py-2 text-xs outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-gray-700">Canvas Base Color</label>
                <div className="flex space-x-2">
                  {COMMISSION_SWATCHES.map((color) => (
                    <button
                      key={color}
                      onClick={() => setCustomColor(color)}
                      className="h-7 w-7 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: color }}
                      type="button"
                      aria-label={`Choose color ${color}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-4 w-full rounded-full bg-[#1E1C1B] py-3 text-xs font-bold text-white transition-all hover:bg-black"
                type="button"
              >
                Submit Commission Request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
