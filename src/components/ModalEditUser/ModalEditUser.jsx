import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserInfoSchema } from '../../schemas';
import { UserUpdateThunk } from '../../redux/user/operations';
import { Icon, Loader } from '../index';
import { selectIsLoading } from '../../redux/user/slice';

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
    <div className="py-[40px] px-[20px] w-[335px]">
      <p className="font-bold text-[20px] mb-[20px]">Edit information</p>
      <div className=" flex flex-col items-center justify-center gap-[8px] mb-[28px]">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="User's avatar"
            className="h-[80px] w-[80px] rounded-[50%]"
          />
        ) : (
          <div className="bg-my-yellow-light h-[80px] w-[80px] rounded-[50%] flex items-center justify-center ">
            <Icon id="user" size={40} />
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px] mb-[12px] md:gap-[16px] md:mb-[16px] "
      >
        <div className="relative flex  gap-[8px]">
          <input
            type="text"
            {...register('avatar')}
            placeholder="Avatar link"
            defaultValue={user.avatar || ''}
            className="truncate pr-[20px]"
          />
          <button
            className="bg-my-yellow-light flex gap-[8px] items-center justify-center h-[42px] min-w-[126px] rounded-[30px] text-[12px]  leading-[1.33]  hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover md:mt-[48px] md:h-[52px] md:text-[16px] md:leading-[1.25]"
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
          className="bg-my-yellow  h-[42px] text-my-white rounded-[30px] text-[14px] font-bold leading-[1.29] mt-[11px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:mt-[48px] md:h-[52px] md:text-[16px] md:leading-[1.25]"
          type="submit"
        >
          Go to profile
          {isLoading && <Loader size={10} />}
        </button>
      </form>
    </div>
  );
};
