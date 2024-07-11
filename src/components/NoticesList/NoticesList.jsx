import { useSelector } from 'react-redux';
import { Loader, NoticesItem } from '../index';
import { selectIsLoading } from '../../redux/notices/slice';

export const NoticesList = ({ notices }) => {
  const isLoading = useSelector(selectIsLoading);
  console.log(notices);
  return (
    <>
      {isLoading && <Loader size={30} />}
      <ul className=" flex flex-col">
        {notices?.map((item) => (
          <NoticesItem key={item._id} {...item} />
        ))}
      </ul>
    </>
  );
};
