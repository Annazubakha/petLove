import { useSelector } from 'react-redux';
import { Icon, Modal, ModalAttention } from '../index';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import { useModal } from '../../helpers';

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
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalAttention, toggleIsModalAttention] = useModal();
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
            <Icon id="star" size={16} /> {popularity}
          </p>
        </div>
        <ul className="flex text-[10px] leading-[1.4] tracking-[-0.02em] text-my-black  justify-between mb-[16px] ">
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
          <li className="notices_item_element ">
            <span className="notices_item_element_span">Caterogy</span>
            {category}
          </li>
        </ul>
        <p className="mb-[24px] text-my-black-second text-[14px] leading-[1.29] tracking-[-0.02em] md:mb-[32px]">
          {comment}
        </p>

        <div className="flex gap-[10px] md:mt-auto ">
          <button
            onClick={
              isLoggedIn ? toggleIsModalAttention : toggleIsModalAttention
            }
            className="bg-my-yellow w-[231px] h-[46px] rounded-[30px] flex items-center justify-center text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-dark md:h-[48px] lg:w-[257px]"
          >
            Learn more
          </button>
          <button
            onClick={
              isLoggedIn ? toggleIsModalAttention : toggleIsModalAttention
            }
            className="bg-my-yellow-light w-[46px] h-[46px] rounded-[30px] flex items-center justify-center hover:bg-my-yellow-light-hover md:h-[48px] md:w-[48px]"
          >
            <Icon id="heart" size={18} className="fill-none stroke-my-yellow" />
          </button>
        </div>
      </li>
      {isModalAttention && (
        <Modal toggleModal={toggleIsModalAttention}>
          <ModalAttention />
        </Modal>
      )}
    </>
  );
};