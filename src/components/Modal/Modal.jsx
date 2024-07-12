import ReactDOM from 'react-dom';
import { Icon } from 'components';

import { useEffect } from 'react';
const modalRoot =
  document.getElementById('modalRoot') || document.createElement('div');
modalRoot.id = 'modalRoot';
document.body.appendChild(modalRoot);

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <div
      onClick={handleClickOnBackdrop}
      className="z-[1501] bg-my-black-30 flex justify-center items-center fixed w-[100vw] h-[100vh] left-0 top-0"
    >
      <div className="relative bg-my-white rounded-[30px]">
        <button
          className="absolute top-[20px] right-[20px]"
          type="button"
          onClick={toggleModal}
        >
          <Icon id="close" size={24} className="stroke-my-black" />
        </button>
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

//  w-[335px] px-[20px] py-[40px] md:px-[80px] md:py-[80px]
