import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Img1 from '../../assets/img/emoji/cat-emoji@1x.png';
import Img2 from '../../assets/img/emoji/cat-emoji@2x.png';
import { selectIsLoading } from '../../redux/auth/slice';
import { Loader } from '../Loader/Loader';
export const ModalApproveAction = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const handleLogOut = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => toggleModal(), navigate('/home'))
      .catch(() =>
        toast.error('Something went wrong. Reload page or try again late!')
      );
  };
  return (
    <div className="px-[28px] py-[40px] flex flex-col items-center w-[335px] md:w-[448px] md:px-[80px] md:py-[80px]">
      {' '}
      {isLoading && <Loader />}
      <div className="h-[80px] w-[80px] rounded-[50%] bg-my-yellow-light flex items-center justify-center mb-[20px]">
        <picture>
          <img
            srcSet={`${Img1} 1x, ${Img2} 2x`}
            type="image/png"
            alt="Cat emoji"
          />
        </picture>
      </div>
      <p className="font-bold text-[20px] leading-[1] tracking-[-0.03em] mb-[28px] md:text-[24px] md:leading-[1.17]">
        Already leaving?
      </p>
      <div className="flex gap-[8px]">
        <button
          onClick={handleLogOut}
          className="font-bold bg-my-yellow h-[42px] w-[137px] rounded-[30px] text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-dark
          md:h-[48px] md:w-[140px] md:text-[16px] md:leading-[1.25] "
        >
          Yes
        </button>
        <button
          onClick={toggleModal}
          className="font-bold h-[42px] w-[137px] rounded-[30px] bg-my-black-5 text-[14px] leading-[1.29] tracking-[-0.03em] hover:text-my-yellow-dark  md:h-[48px] md:w-[140px] md:text-[16px] md:leading-[1.25]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
