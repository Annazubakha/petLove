import { useLocation } from 'react-router-dom';

export const PetDecorationTab = ({
  name,
  birthday,
  description,
  petImg1,
  petImg2,
}) => {
  const location = useLocation();
  return (
    <div
      className={`${'hidden absolute bottom-[32px] left-[32px] w-[294px] h-[121px] bg-my-white rounded-[20px] p-[16px] text-[12px] tracking-[-0.02em] gap-[8px] leading-[1.17] lg:bottom-[97px] lg:left-[64px]'} ${
        location.pathname === '/home' ? 'md:hidden' : 'md:flex'
      }`}
    >
      <div className="h-[60px] w-[60px] bg-my-yellow-light flex items-center justify-center rounded-full">
        <img
          className=""
          srcSet={`${petImg1} 1x, ${petImg2} 2x`}
          type="image/png"
          alt="Pet emoji"
        />
      </div>
      <div className="flex flex-col gap-[8px] w-[194px] mt-[3px]">
        <div className=" flex items-center justify-between">
          <p className="text-my-yellow text-[16px] leading-[1.25] font-bold">
            {name}
          </p>
          <p>
            <span className="text-my-black-50">Birthday:</span> {birthday}
          </p>
        </div>
        <p className="text-my-black-80 ">{description}</p>
      </div>
    </div>
  );
};
