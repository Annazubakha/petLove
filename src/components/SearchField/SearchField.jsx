import { useForm } from 'react-hook-form';
import { Icon } from '../index';
import { useLocation } from 'react-router-dom';

export const SearchField = ({ setKeyword, setPage }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const query = watch('query', '');
  const location = useLocation();
  const onSubmit = ({ query }) => {
    setKeyword(query);
    setPage(1);
  };

  const handleClear = () => {
    setValue('query', '');
    setKeyword('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <input
        type="text"
        className={
          location.pathname === '/news'
            ? 'bg-transparent h-[42px] md:h-[48px] md:w-[230px] '
            : 'bg-my-white border-none placeholder:text-my-black mb-[12px]'
        }
        placeholder="Search"
        name="query"
        {...register('query')}
      />
      <button
        type="submit"
        className="absolute top-[12px] right-[12px] flex items-center justify-center md:top-[14px] "
      >
        <Icon id="search" size={18} />
      </button>

      {query && (
        <button
          className="absolute top-[12px] right-[33px] flex items-center justify-center md:top-[14px] "
          onClick={handleClear}
        >
          <Icon size={18} id="close" className="stroke-my-black" />
        </button>
      )}
    </form>
  );
};
