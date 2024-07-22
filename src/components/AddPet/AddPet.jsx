import { useNavigate } from 'react-router-dom';
import { Icon } from '../index';

export const AddPet = () => {
  const navigate = useNavigate();
  const handeClickBtn = () => {
    navigate('/add-pet');
  };
  return (
    <button
      onClick={handeClickBtn}
      className="bg-my-yellow w-[103px] h-[38px] rounded-[30px] text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] flex gap-[4px] items-center justify-center hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:w-[118px] md:h-[40px]  "
    >
      Add pet
      <Icon id="plus" size={18} />
    </button>
  );
};
