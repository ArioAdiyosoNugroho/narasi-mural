import { Sparkles } from 'lucide-react';

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 rounded-2xl bg-[#1E1C1B] px-5 py-3 text-sm text-white shadow-2xl animate-bounce">
      <Sparkles className="h-4 w-4 text-amber-300" />
      <span>{message}</span>
    </div>
  );
}
