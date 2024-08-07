import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Icon,
  BurgerMenu,
  Nav,
  Logo,
  AuthNav,
  LogOutBtn,
  Modal,
  ModalApproveAction,
  UserBar,
} from 'components';
import { useIconSizeHook, useModal, useWindowSizeHook } from '../../helpers';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/slice';
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const size = useWindowSizeHook();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [isModalLogOut, toggleIsModalLogOut] = useModal();
  const toggleBurgerMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="container pt-[10px] ">
      <div
        className={`${'  text-[20px] flex justify-between items-center pt-[18px] pb-[20px]  md:pb-[32px]  rounded-tr-[30px] rounded-tl-[30px] md:pt-[22px] lg:pt-[16px] '} ${
          location.pathname === '/home'
            ? 'bg-my-yellow px-[20px]'
            : '  lg:px-[32px]'
        }`}
      >
        <Logo />
        {size.windowSize.innerWidth >= 1280 && <Nav />}
        <div className="flex gap-[12px]">
          {!isLoggedIn && size.windowSize.innerWidth >= 768 && <AuthNav />}
          {isLoggedIn && size.windowSize.innerWidth >= 1280 && (
            <LogOutBtn toggleIsModalLogOut={toggleIsModalLogOut} />
          )}
          {isLoggedIn && <UserBar user={user} />}
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
        {isModalLogOut && (
          <Modal toggleModal={toggleIsModalLogOut}>
            <ModalApproveAction toggleModal={toggleIsModalLogOut} />
          </Modal>
        )}
      </div>
    </div>
  );
};
