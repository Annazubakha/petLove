import { useEffect, useState } from 'react';
import { SearchField, Title, Pagination, NoticesList } from '../../components';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import {
  selectIsLoading,
  selectIsNotices,
  selectIsPage,
  selectIsTotalPages,
  setPage,
} from '../../redux/notices/slice';
import { fetchNoticesThunk } from '../../redux/notices/operation';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectIsPage);
  const notices = useSelector(selectIsNotices);
  console.log(notices);
  const totalPages = useSelector(selectIsTotalPages);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchNoticesThunk({ keyword: keyword, page })).unwrap();
      } catch {
        toast.error('Something went wrong. Please, reload the page.');
      }
    };
    fetchData();
  }, [dispatch, keyword, page]);

  const handlePageChange = (newPage) => {
    dispatch(setPage({ page: newPage }));
  };
  return (
    <div className="containerBig relative pb-[40px] md:pb-[80px]  ">
      <Title>Find your favorite pet</Title>
      <SearchField setKeyword={setKeyword} />

      {notices?.length > 0 ? (
        <>
          <NoticesList notices={notices} />
          {totalPages !== 1 && (
            <Pagination
              setPage={handlePageChange}
              totalPages={totalPages}
              page={page}
            />
          )}
        </>
      ) : !isLoading ? (
        <p className="text-[14px] text-center md:text-[28px] mt-[20px] ">
          There aren&#39;t any news according to your query. Please, try another
          one.
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default NoticesPage;
