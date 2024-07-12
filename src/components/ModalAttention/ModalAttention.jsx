import { useNavigate } from 'react-router-dom';

import Img1 from '../../assets/img/emoji/dog-emoji@1x.png';
import Img2 from '../../assets/img/emoji/dog-emoji@2x.png';

export const ModalAttention = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };
  const handleRegistration = () => {
    navigate('/register');
  };

  return (
    <div className="px-[20px] py-[40px] flex flex-col items-center w-[335px] md:w-[466px] md:px-[60px] md:py-[60px]">
      {' '}
      <div className="h-[80px] w-[80px] rounded-[50%] bg-my-yellow-light flex items-center justify-center mb-[20px] ">
        <picture>
          <img
            srcSet={`${Img1} 1x, ${Img2} 2x`}
            type="image/png"
            alt="Dog emoji"
          />
        </picture>
      </div>
      <p className="font-bold text-my-yellow text-[20px] leading-[1] tracking-[-0.03em] mb-[20px] md:text-[24px] md:leading-[1.17]">
        Attention
      </p>
      <p className="text-[14px] leading-[1.29] tracking-[-0.02em] text-center mb-[24px]">
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className="flex gap-[8px]">
        <button
          onClick={handleLogIn}
          className="font-bold bg-my-yellow h-[42px] w-[137px] rounded-[30px] text-my-white text-[14px] leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-dark
          md:h-[48px] md:w-[140px] md:text-[16px] md:leading-[1.25] "
        >
          Log In
        </button>
        <button
          onClick={handleRegistration}
          className="font-bold h-[42px] w-[137px] rounded-[30px]  text-[14px] text-my-yellow bg-my-yellow-light leading-[1.29] tracking-[-0.03em] hover:bg-my-yellow-light-hover md:h-[48px] md:w-[140px] md:text-[16px] md:leading-[1.25]"
        >
          Registration
        </button>
      </div>
    </div>
  );
};
