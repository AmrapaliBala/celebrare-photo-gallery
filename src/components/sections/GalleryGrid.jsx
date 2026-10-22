import { PhotoCard } from './PhotoCard';
export function GalleryGrid({ photos, favourites, onToggleFavourite }) {
  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white/50 rounded-2xl border border-dashed border-[#dcd1c7] max-w-lg mx-auto">
        <p className="text-[#644d3e] font-medium text-base mb-1">
          No photographs matched your search.
        </p>
        <p className="text-xs text-[#9c8475]">
          Try typing a different author name or clear the search input.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}
