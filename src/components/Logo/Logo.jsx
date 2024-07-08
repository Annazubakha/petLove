import { NavLink, useLocation } from 'react-router-dom';
import { useIconSizeHook } from '../../helpers';
import { Icon } from 'components';
export const Logo = () => {
  const location = useLocation();

  return (
    <NavLink
      to="/home"
      className={`${'flex flex-row font-bold items-center text-[20px] md:text-[28px]  leading-1 tracking-[-0.04em] '} ${
        location.pathname === '/home' ? 'text-my-white ' : 'text-my-black'
      }`}
    >
      petl
      <Icon
        id="heart"
        size={useIconSizeHook('heart')}
        className={
          location.pathname === '/home'
            ? 'stroke-my-white fill-my-white'
            : 'stroke-my-yellow fill-my-yellow '
        }
      />
      ve
    </NavLink>
  );
};
