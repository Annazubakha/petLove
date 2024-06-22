import { useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
export const Loader = ({ size }) => {
  const location = useLocation();
  const pageForLoaderColor =
    location.path === '/register' || location.path === 'login'
      ? '#fff'
      : '#F6B83D';
  return (
    <div
      className={`${'  transform-translate-y-1/2  flex items-center justify-center  z-[1001] '} ${
        pageForLoaderColor
          ? 'top-0 bg-my-black-50 w-full h-full fixed right-0'
          : 'right-[10px] top-[33%] md:top-[35%] md:right-[12px]  absolute'
      }`}
    >
      <BeatLoader color={pageForLoaderColor} size={size} />
    </div>
  );
};
