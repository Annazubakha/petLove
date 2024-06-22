import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon, BurgerMenu } from 'components';
import { useIconSizeHook } from '../../helpers';
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleBurgerMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="container pt-[10px] ">
      <div
        className={`${'  text-[20px] flex justify-between items-center pt-[18px] pb-[20px]  md:pb-[32px]  rounded-tr-[30px] rounded-tl-[30px] md:pt-[22px] lg:pt-[16px] lg:px-[32px] '} ${
          location.pathname === '/home' ? 'bg-my-yellow px-[20px]' : ' '
        }`}
      >
        <NavLink
          to="/"
          className={`${'flex flex-row font-bold items-center text-[20px] md:text-[28px]'} ${
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
                : 'stroke-my-yellow fill-my-yellow'
            }
          />
          ve
        </NavLink>
        <ul className="hidden lg:flex  gap-[10px]">
          <li>
            <NavLink
              to="/news"
              className={`${'header-link'} ${
                location.pathname === '/home'
                  ? 'border-my-white-40 hover:border-my-white text-my-white '
                  : 'border-my-black-15 hover:border-my-yellow text-my-black '
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
                  ? 'border-my-white-40 hover:border-my-white text-my-white '
                  : 'border-my-black-15 hover:border-my-yellow text-my-black '
              }`}
            >
              Find pet
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${'header-link'} ${
                location.pathname === '/home'
                  ? 'border-my-white-40 hover:border-my-white text-my-white '
                  : 'border-my-black-15 hover:border-my-yellow text-my-black '
              }`}
              to="/friends"
            >
              Friends
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-[16px]">
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
          <button onClick={toggleBurgerMenu} className="lg:hidden">
            <Icon
              id="burger"
              size={useIconSizeHook('burger')}
              className={`${
                location.pathname === '/home'
                  ? 'stroke-my-white'
                  : 'stroke-my-black'
              }`}
            />
          </button>
        </div>
        {isMobileMenuOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
      </div>
    </div>
  );
};

// "container font-manrope text-[20px] flex justify-between pt-[24px] pb-[20px] items-center h-[40px]"
