import { Loader2 } from 'lucide-react';

/**
 * Common Loader / Spinner component.
 * Requirement 2: Show a loading spinner while fetching.
 */
export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="relative mb-4 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-3 border-[#e8ded6] border-t-[#c86227] animate-spin" />
        <Loader2 className="absolute text-[#c86227]/70 animate-pulse" size={20} />
      </div>
      <p className="text-[#6e5849] font-medium tracking-wide text-sm">
        Curating gallery photographs...
      </p>
      <span className="text-xs text-[#a08a7b] mt-1">Fetching from Picsum Photos</span>
    </div>
  );
}
