export const FAVOURITES_ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
};

const STORAGE_KEY = 'celebrare_favourite_photos';

export function initFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error('Failed to load favourites from localStorage:', err);
    return [];
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case FAVOURITES_ACTIONS.TOGGLE_FAVOURITE: {
      const photoId = action.payload;
      const isFav = state.includes(photoId);
      const updated = isFav
        ? state.filter((id) => id !== photoId)
        : [...state, photoId];

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save favourites to localStorage:', err);
      }

      return updated;
    }
    default:
      return state;
  }
}
