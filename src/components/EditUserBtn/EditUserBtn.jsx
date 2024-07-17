import { Icon } from '../index';

export const EditUserBtn = ({ toggleIsModalEditUser }) => {
  return (
    <button
      onClick={toggleIsModalEditUser}
      className="bg-my-yellow-light h-[38px] w-[38px] rounded-[50%] flex items-center justify-center hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover"
    >
      <Icon id="pencil" size={18} />
    </button>
  );
};
