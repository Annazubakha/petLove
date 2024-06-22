import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { registerSchema } from '../../schemas';
import { Icon, Loader } from 'components';
import { registerThunk } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/slice';
import { useIconSizeHook } from '../../helpers';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const passVisibility = (e) => {
    if (e.currentTarget.id === 'confirmpassword') {
      setShowPassConfirm((prevState) => !prevState);
    } else {
      setShowPass((prevState) => !prevState);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { confirmpassword, ...restData } = data;
      if (confirmpassword !== restData.password) {
        return;
      }
      const response = await dispatch(registerThunk(restData));
      if (response.error) {
        throw new Error();
      }
      toast.success('User was registered successfully.');
    } catch {
      toast.error('The email is already in use. Please, try again.');
    }
  };
  const closeEyeIconSize = useIconSizeHook('close-eye');
  const openEyeIconSize = useIconSizeHook('open-eye');
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px] mb-[12px] md:gap-[16px] md:mb-[16px] "
      >
        <div className="relative">
          <input type="text" {...register('name')} placeholder="Name" />
          <p className="input-error">{errors.name?.message}</p>
        </div>
        <div className="relative">
          <input type="email" {...register('email')} placeholder="Email" />
          <p className="input-error">{errors.email?.message}</p>
        </div>
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
          />
          <p className="input-error">{errors.password?.message}</p>
          <button
            type="button"
            className="absolute top-[12px] right-[12px] flex items-center justify-center md:top-[15px] md:right-[16px] "
            onClick={passVisibility}
          >
            {showPass ? (
              <Icon id="open-eye" size={openEyeIconSize} />
            ) : (
              <Icon id="close-eye" size={closeEyeIconSize} />
            )}
          </button>
        </div>
        <div className="relative">
          <input
            type={showPassConfirm ? 'text' : 'password'}
            {...register('confirmpassword')}
            placeholder="Confirm password"
          />
          <p className="input-error">{errors.confirmpassword?.message}</p>

          <button
            type="button"
            id="confirmpassword"
            className="absolute top-[12px] right-[12px] flex items-center justify-center md:top-[15px] md:right-[16px] "
            onClick={passVisibility}
          >
            {showPassConfirm ? (
              <Icon id="open-eye" size={openEyeIconSize} />
            ) : (
              <Icon id="close-eye" size={closeEyeIconSize} />
            )}
          </button>
        </div>
        <button
          className=" relative bg-my-yellow  h-[42px] text-my-white rounded-[30px] text-[14px] font-bold leading-[1.29] mt-[14px] hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:mt-[16px] md:h-[52px] md:text-[16px] md:leading-[1.25] "
          type="submit"
        >
          REGISTRATION
          {isLoading && <Loader size={10} />}
        </button>
      </form>
      <p className="text-[12px] leading-[1.17] text-center  text-my-black-50 md:text-[14px] md:leading-[1.43]">
        Already have an account?{' '}
        <NavLink
          to="/login"
          className="text-my-yellow font-bold hover:text-my-yellow-dark focus:text-my-yellow-dark underline"
        >
          Login
        </NavLink>
      </p>
    </>
  );
};
