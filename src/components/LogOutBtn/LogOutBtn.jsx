export const LogOutBtn = ({ toggleIsModalLogOut }) => {
  return (
    <button
      onClick={toggleIsModalLogOut}
      className="font-semibold text-[14px] leading-[1.29] tracking-[-0.03em] flex items-center justify-center w-[178px] h-[42px] text-my-yellow rounded-[30px] bg-my-yellow-light md:h-[50px]  bg-my-orange-light hover:bg-my-yellow-light-hover"
    >
      LOG OUT
    </button>
  );
};
