import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, NoticesItem } from '../index';
import {
  selectIsLoading,
  selectNoticesFavorites,
  //   selectNoticesViewed,
} from '../../redux/auth/slice';

export const MyNotices = () => {
  const myNotices = useSelector(selectNoticesFavorites);
  //   const viewedNotices = useSelector(selectNoticesViewed);
  const isLoading = useSelector(selectIsLoading);
  const [activeTab, setActiveTab] = useState('favorites');
  //   const noticesToShow = activeTab === 'favorites' ? myNotices  : viewedNotices;
  return (
    <>
      {isLoading && <Loader size={30} />}
      <div>
        <div className="flex gap-[10px] mb-[20px] text-14px] leading-[1.29] tracking-[-0.03em]">
          <button
            onClick={() => setActiveTab('favorites')}
            className={` h-[42px] w-[123px] flex items-center justify-center text-my-black bg-my-white  rounded-[30px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark hover:text-my-white focus:text-my-white lg:h-[48px] lg:w-[142px] lg:mb-[32px] ${
              activeTab === 'favorites'
                ? 'bg-my-yellow-dark text-my-white'
                : 'text-my-black bg-my-white'
            }`}
          >
            My favorite pets{' '}
          </button>
          {/* <button
          onClick={() => setActiveTab('viewed')}
          className={` h-[42px] w-[123px] flex items-center justify-center text-my-black bg-my-white  rounded-[30px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark hover:text-my-white focus:text-my-white   ${
            activeTab === 'favorites'
              ? 'text-my-black bg-my-white' 
              : 'bg-my-yellow-dark text-my-white'
          }`}
        >
          Viewed
        </button> */}
        </div>
        {myNotices?.length === 0 ? (
          <p className="text-[14px] text-center leading-[1.29] tracking-[-0.02em] md:text-[16px] ">
            Oops,{' '}
            <span className="text-my-yellow mt-[60px]">
              looks like there aren&#39;t any furries
            </span>{' '}
            on our adorable page yet. Do not worry! View your pets on the
            &#39;&#39;find your favorite pet&#39;&#39; page and add them to your
            favorites.
          </p>
        ) : (
          <ul className=" flex flex-col  gap-[20px] md:flex-row md:flex-wrap  lg:gap-[24px] ">
            {myNotices?.map((item) => (
              <NoticesItem key={item._id} {...item} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
