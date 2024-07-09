import { useEffect, useState } from 'react';
import { NewsList, SearchField, Title, Pagination } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsNews } from '../../redux/news/slice';
import { fetchNewsThunk } from '../../redux/news/operations';
import { toast } from 'react-toastify';

const NewsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { results } = useSelector(selectIsNews);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(
          fetchNewsThunk({ keyword: keyword, page: 1, limit: 6 })
        ).unwrap();
      } catch {
        toast.error('Something went wrong. Please, reload the page.');
      }
    };
    fetchData();
  }, [dispatch, keyword]);
  return (
    <div className="containerBig relative pb-[40px] md:pb-[80px]  ">
      <Title>News</Title>
      <SearchField setKeyword={setKeyword} />
      {results?.length > 0 ? (
        <>
          <NewsList results={results} />
          <Pagination />
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

export default NewsPage;
