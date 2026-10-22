import { Heart } from 'lucide-react';

export function Header({ favouritesCount }) {
  return (
    <header className="pt-12 pb-6 md:pt-16 md:pb-8 relative overflow-hidden">
      {/* Decorative warm ambient glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#ead8cb]/40 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eee3d8] border border-[#dfd0c3] text-[#93542f] text-xs font-semibold tracking-wider uppercase mb-4">
          <span>Photo Exhibition</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c86227]" />
          <span>Picsum Collection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#2e2017] tracking-tight leading-tight">
          Timeless Moments,{' '}
          <span className="italic text-[#c86227]">Captured.</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[#7c6353] leading-relaxed">
          Explore curated photographs from world-class creators. Search your favorite authors and save timeless prints to your collection.
        </p>

        {/* Favourites summary badge */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#7a6456] bg-white/70 px-3 py-1 rounded-full border border-[#e2d5cb]">
          <Heart size={14} className="text-[#c86227] fill-[#c86227]" />
          <span>
            {favouritesCount} {favouritesCount === 1 ? 'photo' : 'photos'} saved in favourites
          </span>
        </div>
      </div>
    </header>
  );
}
