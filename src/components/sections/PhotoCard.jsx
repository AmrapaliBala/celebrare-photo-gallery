import { useState } from 'react';
import { Heart } from 'lucide-react';

export function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const displayImageUrl = `https://picsum.photos/id/${photo.id}/600/450`;

  return (
    <article className="group relative flex flex-col bg-[#ffffff] rounded-2xl overflow-hidden border border-[#eae0d7] shadow-xs hover:shadow-md transition-all duration-300">
      {/* Photo Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#f0e8e0]">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#ebdcd1] to-[#f4ebe3]" />
        )}
        <img
          src={displayImageUrl}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Heart Icon Button overlaying image */}
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove ${photo.author}'s photo from favourites`
              : `Add ${photo.author}'s photo to favourites`
          }
          title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          className={`absolute top-3 right-3 p-2.5 rounded-full transition-all duration-200 cursor-pointer backdrop-blur-md shadow-xs ${
            isFavourite
              ? 'bg-[#c86227] text-white shadow-sm scale-105'
              : 'bg-white/85 text-[#735d4f] hover:text-[#c86227] hover:bg-white hover:scale-110'
          }`}
        >
          <Heart
            size={18}
            strokeWidth={2.2}
            className={`transition-transform duration-200 ${
              isFavourite ? 'fill-current' : 'fill-none'
            }`}
          />
        </button>
      </div>

      {/* Card Info */}
      <div className="p-4 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9f8574] block">
            Author
          </span>
          <h3 className="text-sm md:text-base font-medium text-[#2d2118] truncate mt-0.5">
            {photo.author}
          </h3>
        </div>

        {isFavourite && (
          <span className="inline-flex items-center text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#faece4] text-[#c86227] border border-[#f3d3c2]">
            Liked
          </span>
        )}
      </div>
    </article>
  );
}
