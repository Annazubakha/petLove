import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/news/slice';
import { Loader, NewsItem } from '../index';

export const NewsList = ({ news }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader size={30} />}
      <ul className=" flex justify-center flex-col gap-[24px] mb-[44px] md:mb-[60px] md:gap-x-[20px] md:gap-y-[32px] md:flex-row md:flex-wrap  lg:gap-x-[35px] lg:gap-y-[40px]">
        {news?.map((item) => (
          <NewsItem key={item._id} {...item} />
        ))}
      </ul>
    </>
  );
};
