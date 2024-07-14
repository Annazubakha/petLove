import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  fetchNoticesCategiriesThunk,
  fetchNoticesSexThunk,
  fetchNoticesSpeciesThunk,
} from '../../redux/notices/operation';
import {
  selectIsCategories,
  selectIsSex,
  selectIsSpecies,
} from '../../redux/notices/slice';
import { Icon, SearchField } from '../index';

export const NoticesFilters = ({
  setKeyword,
  setPage,
  setCategory,
  setGender,
  setType,
}) => {
  const caterogies = useSelector(selectIsCategories);
  const sex = useSelector(selectIsSex);
  const species = useSelector(selectIsSpecies);
  const [isOpen, setIsOpen] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchNoticesCategiriesThunk()).unwrap();
        await dispatch(fetchNoticesSexThunk()).unwrap();
        await dispatch(fetchNoticesSpeciesThunk()).unwrap();
      } catch {
        toast.error('Something went wrong. Please, reload the page.');
      }
    };
    fetchData();
  }, [dispatch]);

  const toggleDropdown = (dropdown) => {
    setIsOpen((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleSelectedCategory = (category) => {
    setCategory(category);
    setPage(1);
    setSelectedCategory(category);
    closeDropdown();
  };
  const handleSelectedGender = (gender) => {
    setGender(gender);
    setPage(1);
    setCategory('');
    setSelectedGender(gender);
    closeDropdown();
  };
  const handleSelectedType = (type) => {
    setType(type);
    setPage(1);
    setSelectedType(type);
    closeDropdown();
  };
  const handleResetFilters = () => {
    setType('');
    setPage(1);
    setGender('');
    setCategory('');
    setKeyword('');
    setSelectedGender('');
    setSelectedCategory('');
    setSelectedType('');
    document.querySelector('input[name="query"]').value = '';
  };
  return (
    <div className="bg-my-yellow-light p-[20px] rounded-[30px] mb-[40px] mt-[40px] flex flex-col gap-[12px] md:flex-row md:gap-[16px] md:flex-wrap md:px-[32px] md:py-[40px]">
      <SearchField setKeyword={setKeyword} setPage={setPage} />
      <div className="flex justify-between md:gap-[16px]">
        <div className="relative">
          <button
            className="dropwown"
            onClick={() => toggleDropdown('category')}
          >
            {selectedCategory || 'Category'}
            <Icon id="dropdown" size={18} />
          </button>
          {isOpen === 'category' && (
            <ul className="z-10 bg-my-white w-[143px] rounded-[15px] absolute top-[46px] p-[12px] flex flex-col gap-[8px] text-[14px] text-my-black-60 md:text-[16px] md:p-[14px] md:w-[170px] md:top-[54px] ">
              <li
                onClick={() => {
                  setCategory(''),
                    setPage(1),
                    setSelectedCategory(''),
                    closeDropdown();
                }}
                className={`${'dropdown_list_item'} ${
                  selectedCategory === '' && 'active_item'
                }`}
              >
                Show all
              </li>
              {caterogies.map((category) => (
                <li
                  key={category}
                  className={`${'dropdown_list_item'} ${
                    selectedCategory === category && 'active_item'
                  }`}
                  onClick={() => {
                    handleSelectedCategory(category);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative">
          <button className="dropwown" onClick={() => toggleDropdown('gender')}>
            {selectedGender || 'By gender'}
            <Icon id="dropdown" size={18} />
          </button>
          {isOpen === 'gender' && (
            <ul className="z-10 bg-my-white w-[143px] rounded-[15px] absolute top-[46px] p-[12px] flex flex-col gap-[8px] text-[14px] text-my-black-60 md:text-[16px] md:p-[14px] md:w-[170px] md:top-[54px]">
              <li
                onClick={() => {
                  setSelectedGender('');
                  closeDropdown();
                }}
                className={`${'dropdown_list_item'} ${
                  selectedGender === '' && 'active_item'
                }`}
              >
                Show all
              </li>
              {sex.map((gender) => (
                <li
                  key={gender}
                  className={`${'dropdown_list_item'} ${
                    selectedGender === gender && 'active_item'
                  }`}
                  onClick={() => {
                    handleSelectedGender(gender);
                  }}
                >
                  {gender}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="relative  ">
        <button
          className="dropdown_type "
          onClick={() => toggleDropdown('type')}
        >
          {selectedType || 'By Type'}
          <Icon id="dropdown" size={18} />
        </button>
        {isOpen === 'type' && (
          <ul className=" overflow-y-auto  custom-scrollbar z-10 bg-my-white w-[100%] h-[216px] rounded-[15px] absolute top-[46px] p-[12px] flex flex-col gap-[8px] text-[14px] text-my-black-60 md:text-[16px] md:leading-[1.25] md:w-[190px] md:p-[14px] md:top-[54px]">
            <li
              onClick={() => {
                setType(''), setPage(1), setSelectedType('');
                closeDropdown();
              }}
              className={`${'dropdown_list_item'} ${
                selectedType === '' && 'active_item'
              }`}
            >
              Show all
            </li>
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

      <ul className=" relative flex flex-wrap gap-[10px] mt-[28px] before:h-[1px] before:w-[100%]  before:bg-my-black-10 before:absolute before:top-[-20px] md:before:w-[640px] lg:before:w-[1089px]">
        <li className="item_filter">Popular</li>
        <li className="item_filter">Unpopular</li>
        <li className="item_filter">Cheap</li>
        <li className="item_filter">Expensive</li>
      </ul>
      <button
        type="button"
        onClick={handleResetFilters}
        className="bg-my-yellow text-[14px] text-my-white h-[42px] rounded-[30px] hover:bg-my-yellow-dark md:text-[16px] md:w-[150px] md:h-[48px] md:mt-[28px]"
      >
        Reset all filters
      </button>
    </div>
  );
};
