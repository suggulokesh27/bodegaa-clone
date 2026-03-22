// context/FavouriteContext.tsx

import { addToFavouriteService, removeFavouriteService } from "@/services";
import { createContext, useContext, useState } from "react";


const FavouriteContext = createContext<any>(null);

export const FavouriteProvider = ({ children }: any) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  const toggleFavourite = async (productId: string) => {
    const isFav = favourites.includes(productId);

    try {
      if (isFav) {
        await removeFavouriteService(productId);
        setFavourites((prev) => prev.filter((id) => id !== productId));
      } else {
        await addToFavouriteService(productId);
        setFavourites((prev) => [...prev, productId]);
      }
    } catch (error) {
      console.log("Favourite error", error);
    }
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => useContext(FavouriteContext);