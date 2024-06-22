import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import { Icon } from 'components';
import { useIconSizeHook } from '../../helpers';
import { logoutThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

export const BurgerMenu = ({ toggleBurgerMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => navigate('/home'))
      .catch(() =>
        toast.error('Something went wrong. Reload page or try again late!')
      );
  };
  return (
    <div
      className={`${'bg-my-white fixed w-[218px] top-0 right-0 h-screen z-[1000] px-[20px] pb-[40px] flex flex-col items-center  pt-[236px]  md:w-[374px] md:px-[29px]  justify-between'} ${
        location.pathname === '/home'
          ? 'bg-my-white'
          : 'bg-my-yellow text-my-white'
      }`}
    >
      <ul className="flex flex-col gap-[10px]">
        <li>
          <NavLink
            to="/news"
            className={`${'header-link'} ${
              location.pathname === '/home'
                ? 'border-my-black-40 hover:border-my-yellow'
                : 'border-my-white-40 hover:border-my-white'
            }`}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notices"
            className={`${'header-link'} ${
              location.pathname === '/home'
                ? 'border-my-black-40 hover:border-my-yellow'
                : 'border-my-white-40 hover:border-my-white'
            }`}
          >
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${'header-link'} ${
              location.pathname === '/home'
                ? 'border-my-black-40 hover:border-my-yellow'
                : 'border-my-white-40 hover:border-my-white'
            }`}
            to="/friends"
          >
            Friends
          </NavLink>
        </li>
      </ul>

      {!isLoggedIn && (
        <ul className="flex flex-col gap-[8px] font-semibold text-[14px] leading-[1.29] tracking-[-0.03em] md:flex-row">
          <li>
            <NavLink
              to="/login"
              className={`${'flex items-center justify-center w-[178px] h-[42px] text-my-white rounded-[30px] md:h-[50px] md:text-[16px] md:leading-[1.25] md:w-[119px] '} ${
                location.pathname === '/home'
                  ? '  hover:bg-my-yellow-dark bg-my-yellow'
                  : ' border-my-white border-[1px] hover:text-my-yellow hover:bg-my-white hover:border-none'
              }`}
            >
              LOG IN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="flex items-center justify-center w-[178px] h-[42px] text-my-yellow rounded-[30px] bg-my-yellow-light md:h-[50px]  bg-my-orange-light hover:bg-my-yellow-light-hover"
            >
              REGISTRATION
            </NavLink>
          </li>
        </ul>
      )}
      {isLoggedIn && (
        <button
          onClick={handleLogOut}
          className="font-semibold text-[14px] leading-[1.29] tracking-[-0.03em] flex items-center justify-center w-[178px] h-[42px] text-my-yellow rounded-[30px] bg-my-yellow-light md:h-[50px]  bg-my-orange-light hover:bg-my-yellow-light-hover"
        >
          LOG OUT
        </button>
      )}
      <button
        onClick={toggleBurgerMenu}
        className="absolute top-[28px] right-[20px] flex items-center justify-center "
      >
        <Icon
          id="close"
          size={useIconSizeHook('close')}
          className={`${'pointer-events-none'} ${
            location.pathname === '/home'
              ? 'stroke-my-black'
              : ' stroke-my-white'
          }`}
        />
      </button>
    </div>
  );
};
