import { useSelector } from 'react-redux';
import { Loader, NoticesItem } from '../index';
import { selectIsLoading } from '../../redux/notices/slice';

export const NoticesList = ({ notices }) => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader size={30} />}
      <ul className=" flex flex-col mb-[44px] gap-[20px] md:flex-row md:flex-wrap md:mb-[60px] lg:gap-x-[32px] lg:gap-y-[40px] ">
        {notices?.map((item) => (
          <NoticesItem key={item._id} {...item} />
        ))}
      </ul>
    </>
  );
};
