import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { addPetSchema } from '../../schemas';
import { toast } from 'react-toastify';
import { Icon, Loader } from '../index';
import { useNavigate } from 'react-router-dom';
import { selectIsLoading } from '../../redux/user/slice';
import { addPetThunk } from '../../redux/user/operations';
import { useIconSizeHook } from '../../helpers';
import { selectIsSpecies } from '../../redux/notices/slice';
import { fetchNoticesSpeciesThunk } from '../../redux/notices/operation';
import 'react-datepicker/dist/react-datepicker.css';
export const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const species = useSelector(selectIsSpecies);
  const [selectedType, setSelectedType] = useState('');
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    const getSpecies = async () => {
      try {
        await dispatch(fetchNoticesSpeciesThunk());
      } catch {
        toast.error('Something went wrong.');
      }
    };
    getSpecies();
  });
  const handleGoBack = () => {
    navigate('/profile');
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(addPetSchema),
  });
  const onSubmit = async (data) => {
    try {
      await dispatch(addPetThunk(data));
      toast.success('Pet was added successful.');
      navigate('/profile');
    } catch {
      toast.error('Something went wrong. Please, try again.');
    }
  };
  const toggleDropdown = (dropdown) => {
    setIsOpen((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleSelectedType = (type) => {
    setSelectedType(type);
    closeDropdown();
  };
  //   const closeEyeIconSize = useIconSizeHook('close-eye');
  //   const openEyeIconSize = useIconSizeHook('open-eye');
  //   const errorIconSize = useIconSizeHook('error');
  //   const successIconSize = useIconSizeHook('success');
  return (
    <div className="bg-my-white rounded-[30px] pt-[28px] px-[20px] pb-[20px]">
      <h1 className="mb-[24px] font-bold text-[28px] tracking-[-0.03em] ">
        Add my pet /{' '}
        <span className="text-[14px] leading-[1.29] text-my-gray">
          Personal details
        </span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px] mb-[12px] md:gap-[16px] md:mb-[16px] "
      >
        <div className="relative flex  gap-[8px]">
          <div>
            {' '}
            <input
              type="radio"
              name="female"
              id="female"
              {...register('sex')}
              placeholder="Enter URL"
              //   className="w-[32px] h-[32px] border-none outline-none "
              className="hidden peer"
            />
            <label
              htmlFor="female"
              //   className="bg-my-red-icon bg-opacity-10 w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute top-0"
              className={`w-[32px] h-[32px] bg-my-red-icon bg-opacity-10 rounded-[50%] flex items-center justify-center cursor-pointer ${
                touchedFields.female && 'checked:bg-[#F43F5E]'
              }`}
            >
              <Icon
                id="female"
                size={useIconSizeHook('female')}
                className="stroke-my-red-icon peer:checked:stroke-my-white"
              />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="male"
              id="male"
              {...register('sex')}
              className="w-[32px] h-[32px] border-none outline-none "
            />
            <label
              htmlFor="male"
              className="bg-my-blue-icon bg-opacity-10 w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute top-0"
            >
              <Icon
                id="male"
                size={useIconSizeHook('male')}
                className="stroke-my-blue-icon"
              />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="multiple"
              id="multiple"
              {...register('sex')}
              className="w-[32px] h-[32px] border-none outline-none "
            />
            <label
              htmlFor="multiple"
              className="bg-my-yellow-light bg-opacity-10 w-[32px] h-[32px] rounded-[50%] flex items-center justify-center absolute top-0"
            >
              <Icon
                id="gender"
                size={useIconSizeHook('gender')}
                className="stroke-my-yellow"
              />
            </label>
          </div>
          <p className="input-error">{errors.sex?.message}</p>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="w-[68px] h-[68px] rounded-[50%] bg-my-yellow-light flex justify-center items-center">
            <Icon id="paw" size={useIconSizeHook('paw')} />
          </div>
        </div>
        <div className="relative flex  gap-[8px]">
          <input
            type="text"
            {...register('imgURL')}
            placeholder="Enter URL"
            className={`${'truncate pr-[20px]'} ${
              touchedFields.imgURL ? 'border-my-yellow border-[1px]' : ''
            }`}
          />
          <button
            className="bg-my-yellow-light flex gap-[8px] items-center justify-center h-[42px] min-w-[126px] rounded-[30px] text-[12px]  leading-[1.33]  hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover md:mt-[48px] md:h-[52px] md:text-[16px] md:leading-[1.25]"
            type="submit"
          >
            Upload photo
            <Icon id="update-user-photo" size={18} />
          </button>
          <p className="input-error">{errors.imgURL?.message}</p>
        </div>
        <div className="relative">
          <input
            type="text"
            {...register('title')}
            placeholder="Title"
            className={` ${
              touchedFields.title ? 'border-my-yellow border-[1px]' : ''
            }`}
          />
          <p className="input-error">{errors.title?.message}</p>
        </div>
        <div className="relative">
          <input
            type="text"
            {...register('name')}
            placeholder="Pet's name"
            className={` ${
              touchedFields.title ? 'border-my-yellow border-[1px]' : ''
            }`}
          />
          <p className="input-error">{errors.name?.message}</p>
        </div>

        <div className="flex gap-[8px]">
          <div className="relative">
            <Controller
              control={control}
              name="birthday"
              render={({ field }) => (
                <DatePicker
                  placeholderText="00.00.0000"
                  dateFormat="dd.MM.yyyy"
                  value={field.value}
                  selected={field.value}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                />
              )}
            />
            <label htmlFor="birthday">
              <Icon
                id="calendar"
                size={18}
                className="absolute top-[12px] right-[12px]"
              />
            </label>
            <p className="input-error">{errors.birthday?.message}</p>
          </div>
          <div className="relative  ">
            <input
              type="text"
              {...register('species')}
              placeholder="Type of pet"
              className={`${'capitalize '} ${
                touchedFields.species ? 'border-my-yellow border-[1px]' : ''
              }`}
              onClick={() => toggleDropdown('type')}
              defaultValue={selectedType || ''}
            />
            <p className="input-error">{errors.species?.message}</p>

            <Icon
              id="dropdown"
              size={18}
              className="absolute top-[12px] right-[12px] pointer-events-none"
            />

            {isOpen === 'type' && (
              <ul className=" overflow-y-auto  custom-scrollbar z-10 bg-my-white w-[100%] h-[78px] rounded-[15px] border-[1px] border-my-black-15 absolute top-[46px] p-[12px] flex flex-col gap-[8px] text-[14px] text-my-black-60 md:text-[16px] md:leading-[1.25] md:w-[190px] md:p-[14px] md:top-[54px]">
                {species.map((type) => (
                  <li
                    key={type}
                    className={`${'dropdown_list_item'} ${
                      selectedType === type && 'active_item'
                    }`}
                    onClick={() => {
                      handleSelectedType(type);
                    }}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex gap-[8px]  mt-[21px] pl-[107px]">
          <button
            className="bg-my-black-5 h-[42px] w-[100px]  rounded-[30px] text-[14px] font-bold leading-[1.29]  hover:bg-my-black-15 focus:bg-my-yellow-dark md:mt-[48px] md:h-[52px] md:text-[16px] md:leading-[1.25]"
            type="button"
            onClick={handleGoBack}
          >
            Back
          </button>
          <button
            className="bg-my-yellow  h-[42px]  w-[100px]  text-my-white rounded-[30px] text-[14px] font-bold leading-[1.29]  hover:bg-my-yellow-dark focus:bg-my-yellow-dark md:mt-[48px] md:h-[52px] md:text-[16px] md:leading-[1.25]"
            type="submit"
          >
            Submit
            {isLoading && <Loader size={10} />}
          </button>
        </div>
      </form>
    </div>
  );
};
