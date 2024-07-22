import { useModal } from '../../helpers';
import { ModalEditUser } from '../ModalEditUser/ModalEditUser';
import {
  EditUserBtn,
  Modal,
  Icon,
  PetsBlock,
  LogOutBtn,
  ModalApproveAction,
  MyNotices,
} from '../index';

export const UserCard = ({ user }) => {
  const [isModalEditUser, toggleIsModalEditUser] = useModal();
  const [isModalLogOut, toggleIsModalLogOut] = useModal();
  return (
    <>
      <div className="bg-my-white rounded-[30px] pt-[18px] px-[20px] pb-[40px] mb-[40px] md:p-[40px] md:mb-[32px]">
        <div className="flex justify-between">
          <div className="h-[38px] bg-my-yellow text-my-white text-[14px]tracking-[-0.03em] leading-[1.29] flex gap-[4px] rounded-[30px] px-[14px] items-center ">
            User <Icon id="user-white" size={18} />
          </div>
          <EditUserBtn toggleIsModalEditUser={toggleIsModalEditUser} />{' '}
        </div>
        <div className=" flex flex-col items-center justify-center gap-[8px] mb-[28px] md:mb-[20px]">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="User's avatar"
              className="h-[94px] w-[94px] rounded-[50%] md:h-[110px] md:w-[110px]"
            />
          ) : (
            <EditUserBtn toggleIsModalEditUser={toggleIsModalEditUser} />
          )}
          <button
            onClick={toggleIsModalEditUser}
            className="text-[12px] tracking-[-0.02em] leading-[1.33] md:text-[14px] md:leading-[1.29] "
          >
            Upload photo
          </button>
        </div>
        <p className="font-bold leading-[1.25] mb-[20px] md:text-[18px] md:leading-[1.33]">
          My information
        </p>
        <div className="flex flex-col gap-[10px] text-[14px] leading-[1.29] tracking-[-0.03em] md:text-[16px] md:leading-[1.25] md:flex-row md:flex-wrap mad:gap-[14px]">
          <div className="w-[100%] h-[42px] border-[1px] border-my-yellow rounded-[30px] pl-[12px] flex items-center md:w-[305px] md:pl-[16px] md:h-[52px]">
            {user.name}
          </div>
          <div className="w-[100%] h-[42px] border-[1px] border-my-yellow rounded-[30px] pl-[12px] flex items-center md:w-[305px] md:pl-[16px] md:h-[52px]">
            {user.email}
          </div>
          <div
            className={`${'w-[100%] h-[42px] border-[1px] rounded-[30px] pl-[12px] mb-[40px] flex items-center md:w-[305px] md:pl-[16px] md:h-[52px]'} ${
              user.phone ? 'border-my-yellow ' : ' border-my-black-15 '
            }`}
          >
            {user.phone || '+380'}
          </div>
        </div>
        <PetsBlock />
        <LogOutBtn toggleIsModalLogOut={toggleIsModalLogOut} />
      </div>
      {isModalEditUser && (
        <Modal toggleModal={toggleIsModalEditUser}>
          <ModalEditUser toggleModal={toggleIsModalEditUser} user={user} />
        </Modal>
      )}
      {isModalLogOut && (
        <Modal toggleModal={toggleIsModalLogOut}>
          <ModalApproveAction toggleModal={toggleIsModalLogOut} />
        </Modal>
      )}
      <MyNotices />
    </>
  );
};
