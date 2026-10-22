import { AlertCircle } from 'lucide-react';

export function ErrorMessage({ message }) {
  return (
    <div className="max-w-lg mx-auto my-12 p-6 rounded-2xl bg-[#fdf4ee] border border-[#f5cfbd] text-center shadow-xs">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fae5d9] text-[#c86227] mb-3">
        <AlertCircle size={24} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-[#3a281c] mb-1">
        Unable to Load Gallery
      </h3>
      <p className="text-sm text-[#7a5b48] mb-4">
        {message || 'Something went wrong while connecting to the image service.'}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c86227] text-white hover:bg-[#b0521e] transition-colors shadow-xs cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
