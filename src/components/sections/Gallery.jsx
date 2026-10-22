import { useState, useMemo, useCallback } from 'react';
import { useFetchPhotos } from '../../hooks/useFetchPhotos';
import { Loader } from '../common/Loader';
import { ErrorMessage } from '../common/ErrorMessage';
import { SearchBar } from './SearchBar';
import { GalleryGrid } from './GalleryGrid';

export function Gallery({ favourites, onToggleFavourite }) {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) {
      return photos;
    }
    const cleanSearch = searchTerm.toLowerCase().trim();
    return photos.filter((photo) =>
      photo.author?.toLowerCase().includes(cleanSearch)
    );
  }, [photos, searchTerm]);

  return (
    <section id="gallery-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {loading && <Loader />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#e5d9cf]">
            <p className="text-xs sm:text-sm font-medium text-[#7c6353]">
              Showing <span className="font-semibold text-[#2e2017]">{filteredPhotos.length}</span> of {photos.length} photos
              {searchTerm && (
                <span className="ml-1 text-[#9c8475]">
                  matching &ldquo;{searchTerm}&rdquo;
                </span>
              )}
            </p>
          </div>

          <GalleryGrid
            photos={filteredPhotos}
            favourites={favourites}
            onToggleFavourite={onToggleFavourite}
          />
        </>
      )}
    </section>
  );
}
