import { useLocation, useNavigate } from 'react-router-dom';
import { useIconSizeHook } from '../../helpers';
import { Icon } from '../index';

export const UserBar = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const iconUser = useIconSizeHook('user');
  const handleNavigate = () => {
    navigate('/profile');
  };
  return (
    <div className="flex gap-[8px] items-center justify-center">
      <button
        onClick={handleNavigate}
        className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-my-yellow-light hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover md:w-[50px] md:h-[50px]"
      >
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="User's photo"
            className="w-[40px] h-[40px] rounded-[50%]"
          />
        ) : (
          <Icon id="user" size={iconUser} />
        )}
      </button>
      <p
        className={`${'hidden md:block text-[20px] font-bold'} ${
          location.pathname === '/home' ? 'text-my-white' : 'text-my-black'
        }`}
      >
        {user?.name}
      </p>
    </div>
  );
};
