import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoritePetThunk,
  deleteFavoritePetThunk,
  fetchUserInfoThunk,
} from '../../redux/auth/operations';
import { Icon, Rating } from '../index';
import { selectNoticesFavorites } from '../../redux/auth/slice';

export const ModalNotice = ({
  birthday,
  category,
  comment,
  imgURL,
  name,
  sex,
  popularity,
  title,
  species,
  _id,
}) => {
  const favorites = useSelector(selectNoticesFavorites);
  const isFavorite = favorites.some((item) => item._id === _id);
  const dispatch = useDispatch();

  const handleAddPet = async () => {
    try {
      await dispatch(addFavoritePetThunk(_id));
      await dispatch(fetchUserInfoThunk());
    } catch {
      toast.error('Someting went wrong. Please, try again.');
    }
  };
  const handleDeletePet = async () => {
    try {
      await dispatch(deleteFavoritePetThunk(_id));
      await dispatch(fetchUserInfoThunk());
    } catch {
      toast.error('Someting went wrong. Please, try again.');
    }
  };
  const handleFavorites = () => {
    if (isFavorite) {
      handleDeletePet();
    } else {
      handleAddPet();
    }
  };
  return (
    <div className="px-[28px] py-[40px] flex flex-col items-center w-[335px] md:w-[473px] md:px-[71px] md:py-[40px]">
      {' '}
      <div className="relative mb-[20px] md:mb-[16px]">
        <img
          src={imgURL}
          alt="Pet's photo"
          className="w-[120px] h-[120px] rounded-[50%] md:w-[150px] md:h-[150px]"
        />
        <p className="absolute top-0 left-[-20px] h-[32px] bg-my-yellow-light text-my-yellow text-[14px] leading-[1.33] tracking-[-0.02em] rounded-[30px] px-[14px] py-[8px]">
          {category}
        </p>
      </div>
      <p className="font-bold  text-[16px] leading-[1.25]  mb-[10px] md:text-[18px] md:leading-[1.33]">
        {title}
      </p>
      <div className="mb-[24px]  text-[14px] leading-[1.43] flex gap-[4px] items-center md:mb-[20px]">
        <Rating popularity={popularity} />
        {popularity}
      </div>
      <ul className="flex text-[10px] leading-[1.4] tracking-[-0.02em] text-my-black  justify-between mb-[18px] gap-[27px] ">
        <li className="notices_item_element">
          <span className="notices_item_element_span">Name</span>
          {name}
        </li>
        <li className="notices_item_element ">
          <span className="notices_item_element_span">Birthday</span>
          {birthday}
        </li>
        <li className="notices_item_element ">
          <span className="notices_item_element_span">Sex</span>
          {sex}
        </li>
        <li className="notices_item_element ">
          <span className="notices_item_element_span">Species</span>
          {species}
        </li>
      </ul>
      <p className="mb-[40px] text-my-black-second text-[14px] leading-[1.29] tracking-[-0.02em] ">
        {comment}
      </p>
      <div className="flex gap-[10px]">
        <button
          className={`${` flex items-center justify-center   bg-my-yellow h-[44px] w-[135px] rounded-[30px] text-my-white  leading-[1.25] tracking-[-0.03em] hover:bg-my-yellow-dark
          md:h-[48px] md:w-[160px] gap-[8px]`} ${
            isFavorite ? 'text-[14px]' : 'text-[16px]'
          }`}
          onClick={handleFavorites}
        >
          {isFavorite ? 'Remove from' : 'Add to'}
          <Icon
            id="heart"
            size={18}
            className={`${
              isFavorite
                ? 'fill-none stroke-my-yellow-light'
                : 'fill-none stroke-my-white'
            }`}
          />
        </button>
        <a
          href="mailto:11111@mail.com"
          className=" flex items-center justify-center h-[44px] w-[134px] rounded-[30px]  text-[16px] text-my-yellow bg-my-yellow-light leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-light-hover md:h-[48px] md:w-[160px] "
        >
          Contact
        </a>
      </div>
    </div>
  );
};
