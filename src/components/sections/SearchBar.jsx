import { Search } from 'lucide-react';

export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6">
      <div className="relative flex items-center">
        <span className="absolute left-4.5 text-[#a88d7d] pointer-events-none flex items-center">
          <Search size={19} strokeWidth={2.2} />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search photos by author name..."
          className="w-full pl-12 pr-4 py-3.5 bg-white/90 backdrop-blur-xs text-[#2b2118] placeholder-[#9c8475] rounded-full border border-[#e2d5cb] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#c86227]/40 focus:border-[#c86227] transition-all text-sm md:text-base font-normal"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => onSearchChange({ target: { value: '' } })}
            className="absolute right-4 text-xs uppercase tracking-wider text-[#9c8475] hover:text-[#c86227] transition-colors font-medium px-2 py-1 cursor-pointer"
            title="Clear search"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
