import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Icon } from '../index';
import { formattedBirthday, useIconSizeHook } from '../../helpers';
import { deletePetThunk } from '../../redux/auth/operations';

export const PetsItem = ({
  name,
  title,
  imgURL,
  species,
  sex,
  birthday,
  _id,
}) => {
  const text = formattedBirthday(birthday);

  const dispatch = useDispatch();
  const handleDeletePet = async () => {
    try {
      await dispatch(deletePetThunk(_id));
      toast.success('Pet was deleted successfully.');
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };
  return (
    <li className=" relative rounded-[20px]  p-[16px]  flex  gap-[14px] border-[1px] border-my-black-10">
      <img
        src={imgURL}
        alt="Pet's photo"
        className="rounded-full h-[66px] w-[66px]"
      />
      <div className="relative ">
        <h1 className="font-bold leading-[1.29] text-[14px] mb-[8px] text-my-black-second truncate ">
          {title}
        </h1>

        <ul className="flex text-[12px] leading-[1.17] tracking-[-0.02em] text-my-black  flex-wrap gap-[10px]  ">
          <li className="notices_item_element">
            <span className="notices_item_element_span">Name</span>
            {name}
          </li>
          <li className="notices_item_element ">
            <span className="notices_item_element_span">Birthday</span>
            {text}
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
      </div>
      <button
        type="sumbit"
        onClick={handleDeletePet}
        className="absolute top-[12px] right-[12px] bg-my-yellow-light hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover rounded-full w-[32px] h-[32px] flex items-center justify-center "
      >
        <Icon id="bin" size={useIconSizeHook('bin')} />
      </button>
    </li>
  );
};
