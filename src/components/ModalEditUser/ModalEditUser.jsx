import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserInfoSchema } from '../../schemas';
import { UserUpdateThunk } from '../../redux/auth/operations';
import { Icon, Loader } from '../index';
import { selectIsLoading } from '../../redux/auth/slice';
export const ModalEditUser = ({ user, toggleModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserInfoSchema),
  });
  const cleanData = (data) => {
    const cleanedData = {};
    for (const key in data) {
      if (data[key] !== null && data[key] !== '') {
        cleanedData[key] = data[key];
      }
    }
    return cleanedData;
  };

  const onSubmit = async (data) => {
    const cleanedData = cleanData(data);
    try {
      await dispatch(UserUpdateThunk(cleanedData));
      toast.success('Information was updated successful.');
      toggleModal();
    } catch {
      toast.error('Something went wrong. Please, try again.');
    }
  };

  return (
    <div className="py-[40px] px-[20px] w-[335px] md:w-[480px] md:p-[50px] ">
      <p className="font-bold text-[20px] mb-[20px] md:text-[18px] md:leading-[1.33]">
        Edit information
      </p>
      <div className=" flex  items-center justify-center  mb-[28px] md:mb-[12px]">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="User's avatar"
            className="h-[80px] w-[80px] rounded-[50%] md:h-[86px] md:w-[86px]"
          />
        ) : (
          <div className="bg-my-yellow-light h-[80px] w-[80px] rounded-[50%] flex items-center justify-center  md:h-[86px] md:w-[86px]">
            <Icon id="user" size={40} />
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px]  md:gap-[14px]  "
      >
        <div className="relative flex  gap-[8px] md:mb-[4px]">
          <input
            type="text"
            {...register('avatar')}
            placeholder="Avatar link"
            defaultValue={user.avatar || ''}
            className="truncate pr-[20px] md:h-[42px]"
          />
          <button
            className="bg-my-yellow-light flex gap-[8px] items-center justify-center h-[42px] min-w-[126px] rounded-[30px] text-[12px]  leading-[1.33]  hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover   md:text-[14px] md:leading-[1.29] md:h-[42px]"
            type="submit"
          >
            Upload photo
            <Icon id="update-user-photo" size={18} />
          </button>
          <p className="input-error">{errors.avatar?.message}</p>
        </div>
        <div className="relative">
          <input type="text" {...register('name')} defaultValue={user.name} />
          <p className="input-error">{errors.name?.message}</p>
        </div>
        <div className="relative">
          <input
            type="email"
            {...register('email')}
            defaultValue={user.email}
          />
          <p className="input-error">{errors.email?.message}</p>
        </div>
        <div className="relative">
          <input
            type="text"
            {...register('phone')}
            defaultValue={user.phone || ''}
            placeholder="Enter your phone"
          />
          <p className="input-error">{errors.phone?.message}</p>
        </div>
        <button
          className="bg-my-yellow  h-[42px] text-my-white rounded-[30px] text-[14px] font-bold leading-[1.29] mt-[11px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:mt-[26px] md:h-[52px] md:text-[16px] md:leading-[1.25]"
          type="submit"
        >
          Save
          {isLoading && <Loader size={10} />}
        </button>
      </form>
    </div>
  );
};
