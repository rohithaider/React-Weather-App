import HeartIcon from "../../assets/assets/heart.svg";
import RedHeartIcon from "../../assets/assets/heart-red.svg"
import { useContext, useState } from "react";
import { FavoriteContext } from "../../context";
export default function AddToFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const [isFavorite, toggleFavorite] = useState(false);

function handleFavorites(){
	toggleFavorite(!isFavorite)
}

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button onClick={handleFavorites} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favorite</span>
          <img src={isFavorite?RedHeartIcon:HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
