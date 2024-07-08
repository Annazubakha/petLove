import { NavLink, useLocation } from 'react-router-dom';
import { useWindowSizeHook } from '../../helpers';

export const AuthNav = () => {
  const size = useWindowSizeHook();
  const location = useLocation();
  return size.windowSize.innerWidth >= 768 ? (
    <ul className="hidden md:flex flex-col gap-[8px] font-semibold text-[14px] leading-[1.29] tracking-[-0.03em] md:flex-row">
      <li>
        <NavLink
          to="/login"
          className={`${'flex items-center justify-center w-[178px] h-[42px] text-my-white rounded-[30px] md:h-[50px] md:text-[16px] md:leading-[1.25] md:w-[119px] '} ${
            location.pathname === '/home'
              ? '  border-my-white-40 border-[1px] hover:text-my-yellow hover:bg-my-white hover:border-none'
              : ' bg-my-yellow hover:bg-my-yellow-dark '
          }`}
        >
          LOG IN
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={`${'flex items-center justify-center w-[178px] h-[42px] text-my-yellow rounded-[30px]  md:h-[50px] md:text-[16px] md:leading-[1.25]  lg:w-[149px]'} ${
            location.pathname === '/home'
              ? 'text-my-yellow bg-my-white hover:bg-my-yellow-light '
              : ' bg-my-yellow-light hover:bg-my-yellow-light-hover'
          }`}
        >
          REGISTRATION
        </NavLink>
      </li>
    </ul>
  ) : (
    ''
  );
};
