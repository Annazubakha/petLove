import { useForm } from 'react-hook-form';
import { Icon } from '../index';

export const SearchField = ({ setKeyword }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const query = watch('query', '');

  const onSubmit = ({ query }) => {
    setKeyword(query);
  };

  const handleClear = () => {
    setValue('query', '');
    setKeyword('');
  };

  return (
    <div className="mt-[20px] mb-[24px] relative md:absolute md:top-[16.5px] md:right-[32px] md:mt-0 md:mb-0 lg:right-[63px] ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className=" bg-transparent h-[42px] md:h-[48px] md:w-[230px]"
          placeholder="Search"
          name="query"
          {...register('query')}
        />
        <button
          type="submit"
          className="absolute top-[12px] right-[12px] flex items-center justify-center md:top-[15px] md:right-[15px] "
        >
          <Icon id="search" size={18} />
        </button>

        {query && (
          <button
            className="absolute top-[12px] right-[34px] flex items-center justify-center md:top-[15px] md:right-[39px]"
            onClick={handleClear}
          >
            <Icon size={18} id="close" className="stroke-my-black" />
          </button>
        )}
      </form>
    </div>
  );
};
