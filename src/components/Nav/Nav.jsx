import { NavLink, useLocation } from 'react-router-dom';
import { useWindowSizeHook } from '../../helpers';

export const Nav = () => {
  const size = useWindowSizeHook();
  const location = useLocation();
  return size.windowSize.innerWidth >= 1280 ? (
    <ul className="hidden lg:flex  gap-[10px]">
      <li>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `header-link ${
              isActive
                ? "after:content-['You_are_here']  after:text-my-yellow after:absolute after:text-[14px] after:bottom-[-20px] border-my-yellow"
                : location.pathname === '/home'
                ? 'border-my-white-40 hover:border-my-white text-my-white '
                : 'border-my-black-15 hover:border-my-yellow text-my-black '
            }`
          }
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/notices"
          className={({ isActive }) =>
            `header-link ${
              isActive
                ? "after:content-['You_are_here']  after:text-my-yellow after:absolute after:text-[14px] after:bottom-[-20px] border-my-yellow"
                : location.pathname === '/home'
                ? 'border-my-white-40 hover:border-my-white text-my-white '
                : 'border-my-black-15 hover:border-my-yellow text-my-black '
            }`
          }
        >
          Find pet
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `header-link ${
              isActive
                ? "after:content-['You_are_here']  after:text-my-yellow after:absolute after:text-[14px] after:bottom-[-20px] border-my-yellow"
                : location.pathname === '/home'
                ? 'border-my-white-40 hover:border-my-white text-my-white '
                : 'border-my-black-15 hover:border-my-yellow text-my-black '
            }`
          }
          to="/friends"
        >
          Friends
        </NavLink>
      </li>
    </ul>
  ) : (
    <ul className="flex flex-col gap-[20px]">
      <li>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `header-link ${
              isActive
                ? "after:content-['You_are_here']  after:text-my-white after:absolute after:text-[12px] after:bottom-[-15px] border-my-white"
                : location.pathname === '/home'
                ? 'border-my-black-40 hover:border-my-yellow'
                : 'border-my-white-40 hover:border-my-white'
            }`
          }
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/notices"
          className={({ isActive }) =>
            `header-link ${
              isActive
                ? "after:content-['You_are_here']  after:text-my-white after:absolute after:text-[12px] after:bottom-[-15px] border-my-white"
                : location.pathname === '/home'
                ? 'border-my-black-40 hover:border-my-yellow'
                : 'border-my-white-40 hover:border-my-white'
            }`
          }
        >
          Find pet
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `header-link ${
              isActive
                ? "after:content-['You_are_here']  after:text-my-white after:absolute after:text-[12px] after:bottom-[-15px] border-my-white"
                : location.pathname === '/home'
                ? 'border-my-black-40 hover:border-my-yellow'
                : 'border-my-white-40 hover:border-my-white'
            }`
          }
          to="/friends"
        >
          Friends
        </NavLink>
      </li>
    </ul>
  );
};
