import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Icon, Modal, ModalAttention, ModalNotice } from '../index';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import { formattedBirthday, useIconSizeHook, useModal } from '../../helpers';
import {
  deleteFavoritePetThunk,
  fetchUserInfoThunk,
} from '../../redux/auth/operations';

export const NoticesItem = ({
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
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalAttention, toggleIsModalAttention] = useModal();
  const [isModalNotice, toggleIsModalNotice] = useModal();
  const location = useLocation();
  const dispatch = useDispatch();
  const iconSize = useIconSizeHook('bin');
  const isProfilePage = location.pathname === '/profile';

  const handleDeleteFavoritePet = async () => {
    try {
      await dispatch(deleteFavoritePetThunk(_id));
      await dispatch(fetchUserInfoThunk());
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };
  return (
    <>
      <li className="rounded-[16px] bg-my-white p-[24px] md:w-[342px] flex flex-col lg:w-[363px]">
        <img
          src={imgURL}
          alt="Pet's photo"
          className="rounded-[16px] mb-[24px]"
        />

        <div className="relative mb-[8px]">
          <h1 className="font-bold leading-[1.25] text-my-black-second md:text-[18px]">
            {title}
          </h1>
          <p className="absolute right-0 top-0 flex items-center gap-[4px] text-[14px] leading-[1.29] md:leading-[1.43]  ">
            <Icon
              id="star"
              size={16}
              className="stroke-[#FFC531] fill-[#FFC531]"
            />{' '}
            {popularity}
          </p>
        </div>
        <ul className="flex text-[10px] leading-[1.4] tracking-[-0.02em] text-my-black  justify-between mb-[16px] ">
          <li className="notices_item_element">
            <span className="notices_item_element_span">Name</span>
            {name}
          </li>
          <li className="notices_item_element ">
            <span className="notices_item_element_span">Birthday</span>
            {formattedBirthday(birthday) || ''}
          </li>
          <li className="notices_item_element ">
            <span className="notices_item_element_span">Sex</span>
            {sex}
          </li>
          <li className="notices_item_element ">
            <span className="notices_item_element_span">Species</span>
            {species}
          </li>
          <li className="notices_item_element ">
            <span className="notices_item_element_span">Caterogy</span>
            {category}
          </li>
        </ul>
        <p className="mb-[24px] text-my-black-second text-[14px] leading-[1.29] tracking-[-0.02em] md:mb-[32px]">
          {comment}
        </p>

        <div className="flex gap-[10px] md:mt-auto relative">
          <button
            onClick={isLoggedIn ? toggleIsModalNotice : toggleIsModalAttention}
            className={`${'bg-my-yellow w-[231px]  rounded-[30px] flex items-center justify-center text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-dark  lg:w-[257px] '} ${
              isProfilePage ? '   h-[44px]' : '  h-[46px] md:h-[48px]'
            }`}
          >
            Learn more
          </button>
          {isProfilePage ? (
            <button
              type="sumbit"
              onClick={handleDeleteFavoritePet}
              className={`${' bg-my-yellow-light hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover rounded-full  flex items-center justify-center '} ${
                isProfilePage
                  ? '  w-[44px] h-[44px]'
                  : 'absolute top-[12px] right-[12px] w-[32px] h-[32px]'
              }`}
            >
              <Icon id="bin" size={iconSize} />
            </button>
          ) : (
            <button
              onClick={
                isLoggedIn ? toggleIsModalNotice : toggleIsModalAttention
              }
              className="bg-my-yellow-light w-[46px] h-[46px] rounded-[30px] flex items-center justify-center hover:bg-my-yellow-light-hover md:h-[48px] md:w-[48px]"
            >
              <Icon
                id="heart"
                size={18}
                className="fill-none stroke-my-yellow"
              />
            </button>
          )}
        </div>
      </li>
      {isModalAttention && (
        <Modal toggleModal={toggleIsModalAttention}>
          <ModalAttention />
        </Modal>
      )}
      {isModalNotice && (
        <Modal toggleModal={toggleIsModalNotice}>
          <ModalNotice
            birthday={birthday}
            comment={comment}
            imgURL={imgURL}
            name={name}
            sex={sex}
            popularity={popularity}
            title={title}
            species={species}
            category={category}
            _id={_id}
          />
        </Modal>
      )}
    </>
  );
};
