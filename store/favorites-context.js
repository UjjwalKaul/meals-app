import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((prevState) => {
      return [...prevState, id];
    });
  }

  function removeFavorite(id) {
    setFavoriteMealIds((prevState) => {
      return prevState.filter((itemId) => {
        return itemId !== id;
      });
    });
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
