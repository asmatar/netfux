import { useDispatch } from 'react-redux';
import { removeFromMyList, addToMyList } from '../redux/favoriteReducer';
import { toast } from 'react-toastify';

export function useRemoveFromFavorite() {
  const dispatch = useDispatch();
  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFromMyList(id));
    toast.error('Remove from my favorite', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return handleRemoveFromFavorite;
}

export function useAddToFavorite() {
  const dispatch = useDispatch();
  
  const handleFavorite = (movie, type) => {
    dispatch(addToMyList({movie, type}),
    toast.success('Add to my favorite', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
    )
  }

  return handleFavorite;
}