import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import { Icon, Nav, LogOutBtn } from 'components';
import { useIconSizeHook, useModal } from '../../helpers';
import { Modal } from '../Modal/Modal';
import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';

export const BurgerMenu = ({ toggleBurgerMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const [isModalLogOut, toggleIsModalLogOut] = useModal();

  return (
    <div
      className={`${'bg-my-white fixed w-[218px] top-0 right-0 h-screen z-[1000] px-[20px] pb-[40px] flex flex-col items-center  pt-[236px]  md:w-[374px] md:px-[29px]  justify-between'} ${
        location.pathname === '/home'
          ? 'bg-my-white'
          : 'bg-my-yellow text-my-white'
      }`}
    >
      <Nav />
      {!isLoggedIn && (
        <ul className="flex flex-col gap-[8px] font-semibold text-[14px] leading-[1.29] tracking-[-0.03em] md:flex-row">
          <li>
            <NavLink
              to="/login"
              className={`${'flex items-center justify-center w-[178px] h-[42px] text-my-white rounded-[30px] md:h-[50px] md:text-[16px] md:leading-[1.25] md:w-[119px] '} ${
                location.pathname === '/home'
                  ? '  hover:bg-my-yellow-dark bg-my-yellow'
                  : ' border-my-yellow-light border-[1px] hover:text-my-yellow hover:bg-my-yellow-light-hover hover:border-none'
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
      {isLoggedIn && <LogOutBtn toggleIsModalLogOut={toggleIsModalLogOut} />}
      {isModalLogOut && (
        <Modal toggleModal={toggleIsModalLogOut}>
          <ModalApproveAction toggleModal={toggleIsModalLogOut} />
        </Modal>
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
