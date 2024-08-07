import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  fetchNoticesCategiriesThunk,
  fetchNoticesSexThunk,
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
  setPopularity,
  setPrice,
}) => {
  const caterogies = useSelector(selectIsCategories);
  const sex = useSelector(selectIsSex);
  const species = useSelector(selectIsSpecies);
  const [isOpen, setIsOpen] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isCheap, setIsCheap] = useState(false);
  const [isExpensive, setIsExpensive] = useState(false);
  const [isPopular, setIsPopular] = useState(false);
  const [isUnpopular, setIsUnpopular] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchNoticesCategiriesThunk()).unwrap();
        await dispatch(fetchNoticesSexThunk()).unwrap();
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
    setPopularity(null);
    setPrice(null);
    setIsUnpopular(false);
    setIsPopular(false);
    setIsExpensive(false);
    setIsCheap(false);
    document.querySelector('input[name="query"]').value = '';
  };

  const handleDeleteFilter = (filter) => {
    switch (filter) {
      case 'popular':
        setPopularity(null);
        setIsPopular(false);
        break;
      case 'unpopular':
        setPopularity(null);
        setIsUnpopular(false);
        break;
      case 'cheap':
        setPrice(null);
        setIsCheap(false);
        break;

      case 'expensive':
        setPrice(null);
        setIsExpensive(false);
        break;

      default:
        setPrice(null);
        setPopularity(null);
        setIsUnpopular(false);
        setIsPopular(false);
        setIsExpensive(false);
        setIsCheap(false);
    }
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

      <ul className="relative flex flex-wrap gap-[10px] mt-[28px] before:h-[1px] before:w-[100%]  before:bg-my-black-10 before:absolute before:top-[-20px] md:before:content-none lg:before:w-[1089px] md:mt-0 lg:mt-[28px]  lg:before:content-[''] ">
        <li
          className={` ${isPopular ? ' item_filter_active ' : 'item_filter'}`}
        >
          <button
            onClick={() => {
              setPopularity(false), setIsPopular(true), setIsUnpopular(false);
            }}
          >
            Popular
          </button>
          {isPopular && (
            <button onClick={() => handleDeleteFilter('popular')}>
              <Icon id="delete-filter" size={18} />
            </button>
          )}
        </li>
        <li
          className={` ${isUnpopular ? ' item_filter_active ' : 'item_filter'}`}
        >
          <button
            onClick={() => {
              setPopularity(true), setIsUnpopular(true), setIsPopular(false);
            }}
          >
            Unpopular
          </button>
          {isUnpopular && (
            <button onClick={() => handleDeleteFilter('unpopular')}>
              <Icon id="delete-filter" size={18} />
            </button>
          )}
        </li>
        <li
          className={` ${isExpensive ? ' item_filter_active ' : 'item_filter'}`}
        >
          <button
            onClick={() => {
              setPrice(false), setIsExpensive(true), setIsCheap(false);
            }}
          >
            Expensive
          </button>
          {isExpensive && (
            <button onClick={() => handleDeleteFilter('expensive')}>
              <Icon id="delete-filter" size={18} />
            </button>
          )}
        </li>
        <li className={` ${isCheap ? ' item_filter_active ' : 'item_filter'}`}>
          <button
            onClick={() => {
              setPrice(true), setIsCheap(true), setIsExpensive(false);
            }}
          >
            Cheap
          </button>
          {isCheap && (
            <button onClick={() => handleDeleteFilter('cheap')}>
              <Icon id="delete-filter" size={18} />
            </button>
          )}
        </li>
      </ul>
      <button
        type="button"
        onClick={handleResetFilters}
        className="bg-my-yellow text-[14px] text-my-white h-[42px] rounded-[30px] hover:bg-my-yellow-dark md:text-[16px] md:w-[150px] md:h-[48px] md:mt-0 lg:mt-[28px]"
      >
        Reset all filters
      </button>
    </div>
  );
};
