import { useWindowSizeHook } from './index';

export const useIconSizeHook = (id) => {
  const width = useWindowSizeHook().windowSize.innerWidth;
  const widthMobile = width < 768 ? true : false;
  let size;
  switch (id) {
    case 'burger':
    case 'close':
      size = widthMobile ? 32 : 36;
      break;
    case 'heart':
      size = widthMobile ? 17 : 23;
      break;
    case 'close-eye':
    case 'open-eye':
      size = widthMobile ? 18 : 22;
      break;
    case 'error':
    case 'success':
      size = widthMobile ? 18 : 22;
      break;
    case 'pagination-left':
    case 'pagination-right':
    case 'user':
    case 'male':
    case 'female':
    case 'gender':
      size = widthMobile ? 20 : 24;
      break;
    case 'paw':
      size = widthMobile ? 34 : 44;
      break;
    case 'bin':
      size = widthMobile ? 16 : 18;
      break;
    default:
      size = 18;
  }
  return size;
};
