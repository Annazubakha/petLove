import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { addPetSchema } from '../../schemas';
import { toast } from 'react-toastify';
import { Icon, Loader } from '../index';
import { selectIsLoading } from '../../redux/auth/slice';
import { addPetThunk } from '../../redux/auth/operations';
import { convertPetBirthday, useIconSizeHook } from '../../helpers';
import { selectIsSpecies } from '../../redux/notices/slice';
import 'react-datepicker/dist/react-datepicker.css';

export const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const species = useSelector(selectIsSpecies);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedGender, setSelectedGerder] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const handleGoBack = () => {
    navigate('/profile');
  };
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(addPetSchema),
  });

  const onSubmit = async (data) => {
    const formatedBirthday = convertPetBirthday(data.birthday);
    const formattedData = {
      ...data,
      birthday: formatedBirthday,
    };
    try {
      console.log(formattedData);
      await dispatch(addPetThunk(formattedData));
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
    setValue('species', type);
    closeDropdown();
  };
  const handleGender = (gender) => {
    setSelectedGerder(gender);
    setValue('sex', gender);
  };
  return (
    <div className="bg-my-white rounded-[30px] pt-[28px] px-[20px] pb-[20px] md:py-[40px] md:px-[136px] lg:py-[50px] lg:px-[54px] lg:w-[529px]">
      <h1 className="mb-[24px] font-bold text-[28px] tracking-[-0.03em] md:text-[32px] md:mb-[40px] ">
        Add my pet /{' '}
        <span className="text-[14px] leading-[1.29] text-my-gray md:text-[16px] md:leading-[1.25]">
          Personal details
        </span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px] md:gap-[18px]  relative  "
      >
        <div className="relative flex gap-[8px] md:absolute top-[-22px]">
          <div>
            {' '}
            <input
              type="radio"
              name="female"
              id="female"
              {...register('sex')}
              placeholder="Enter URL"
              className="hidden"
              onChange={() => handleGender('female')}
            />
            <label
              htmlFor="female"
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer md:w-[40px] md:h-[40px] ${
                selectedGender === 'female'
                  ? 'bg-my-red-icon '
                  : 'bg-my-red-icon bg-opacity-10'
              }`}
            >
              <Icon
                id="female"
                size={useIconSizeHook('female')}
                className={`${
                  selectedGender === 'female'
                    ? 'stroke-my-white'
                    : 'stroke-my-red-icon'
                }`}
              />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="male"
              id="male"
              {...register('sex')}
              className="hidden"
              onChange={() => handleGender('male')}
            />
            <label
              htmlFor="male"
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer md:w-[40px] md:h-[40px] ${
                selectedGender === 'male'
                  ? 'bg-my-blue-icon  '
                  : 'bg-my-blue-icon bg-opacity-10'
              }`}
            >
              <Icon
                id="male"
                size={useIconSizeHook('male')}
                className={`${
                  selectedGender === 'male'
                    ? 'stroke-my-white'
                    : 'stroke-my-blue-icon'
                }`}
              />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="multiple"
              id="multiple"
              {...register('sex')}
              className="hidden "
              onChange={() => handleGender('multiple')}
            />
            <label
              htmlFor="multiple"
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer md:w-[40px] md:h-[40px] ${
                selectedGender === 'multiple'
                  ? ' bg-my-yellow'
                  : 'bg-my-yellow-light'
              }`}
            >
              <Icon
                id="gender"
                size={useIconSizeHook('gender')}
                className={`${
                  selectedGender === 'multiple'
                    ? 'stroke-my-white'
                    : 'stroke-my-yellow'
                }`}
              />
            </label>
          </div>
          <p className="input-error">{errors.sex?.message}</p>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="w-[68px] h-[68px] rounded-[50%] bg-my-yellow-light flex justify-center items-center md:w-[86px] md:h-[86px]">
            <Icon id="paw" size={useIconSizeHook('paw')} />
          </div>
        </div>
        <div className="relative flex  gap-[8px]">
          <input
            type="text"
            {...register('imgURL')}
            placeholder="Enter URL"
            className={`${'truncate pr-[20px] md:h-[42px]'} ${
              touchedFields.imgURL ? 'border-my-yellow border-[1px] ' : ''
            }`}
          />
          <button
            className="bg-my-yellow-light flex gap-[8px] items-center justify-center h-[42px] min-w-[126px] rounded-[30px] text-[12px]  leading-[1.33]  hover:bg-my-yellow-light-hover focus:bg-my-yellow-light-hover   md:text-[14px] md:leading-[1.29] md:m-w-[146px]"
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

        <div className="flex gap-[8px] md:gap-[12px]">
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
                  maxDate={new Date()}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  className={`${'md:w-[210px]'} ${
                    touchedFields.title ? 'border-my-yellow border-[1px] ' : ''
                  }`}
                />
              )}
            />
            <label htmlFor="birthday">
              <Icon
                id="calendar"
                size={18}
                className="absolute top-[12px] right-[12px] md:top-[16px] md:right-[16px]"
              />
            </label>
            <p className="input-error">{errors.birthday?.message}</p>
          </div>
          <div className="relative ">
            <input
              type="text"
              {...register('species')}
              placeholder="Type of pet"
              className={`${'capitalize md:w-[210px]'} ${
                touchedFields.species ? 'border-my-yellow border-[1px]' : ''
              }`}
              onClick={() => toggleDropdown('type')}
              defaultValue={selectedType || ''}
            />
            <p className="input-error">{errors.species?.message}</p>

            <Icon
              id="dropdown"
              size={18}
              className="absolute top-[12px] right-[12px] pointer-events-none md:top-[16px] md:right-[16px]"
            />

            {isOpen === 'type' && (
              <ul className=" overflow-y-auto  custom-scrollbar z-10 bg-my-white w-[100%] h-[78px] rounded-[15px] border-[1px] border-my-black-15 absolute top-[46px] p-[12px] flex flex-col gap-[8px] text-[14px] text-my-black-60 md:text-[16px] md:leading-[1.25] md:w-[210px] md:p-[14px] md:top-[54px] md:h-[142px]">
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
            className="bg-my-black-5 h-[42px] w-[100px]  rounded-[30px] text-[14px] font-bold leading-[1.29]  hover:bg-my-black-15 focus:bg-my-yellow-dark  md:h-[52px] md:text-[16px] md:leading-[1.25] md:w-[170px]"
            type="button"
            onClick={handleGoBack}
          >
            Back
          </button>
          <button
            className="bg-my-yellow  h-[42px]  w-[100px]  text-my-white rounded-[30px] text-[14px] font-bold leading-[1.29]  hover:bg-my-yellow-dark focus:bg-my-yellow-dark  md:h-[52px] md:text-[16px] md:leading-[1.25] md:w-[170px]"
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
