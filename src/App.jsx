import { useReducer, useCallback } from 'react';
import {favouritesReducer,initFavourites,FAVOURITES_ACTIONS,} from './reducers/favouritesReducer';
import { Header } from './components/layout/Header';
import { Gallery } from './components/sections/Gallery';

function App() {
  const [favourites, dispatch] = useReducer(favouritesReducer, undefined, initFavourites);
  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: FAVOURITES_ACTIONS.TOGGLE_FAVOURITE, payload: photoId });
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f2ed] text-[#2b2118] selection:bg-[#c86227]/20 selection:text-[#c86227]">
      <Header favouritesCount={favourites.length} />

      <main>
        <Gallery favourites={favourites} onToggleFavourite={handleToggleFavourite}/>
      </main>

      <footer className="border-t border-[#e5d8cd] py-8 text-center text-xs text-[#8f7869] bg-[#f2eae1]/50">
        <p>Celebrare Frontend Internship Assignment &bull; React + Vite + Tailwind</p>
      </footer>
    </div>
  );
}

export default App;
