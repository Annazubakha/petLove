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
  // selectIsSex,
  // selectIsSpecies,
} from '../../redux/notices/slice';
import { Icon, SearchField } from '../index';

export const NoticesFilters = ({ setKeyword, setPage, setCategory }) => {
  const caterogies = useSelector(selectIsCategories);
  // const sex = useSelector(selectIsSex);
  // const species = useSelector(selectIsSpecies);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
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
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
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
  return (
    <div className="bg-my-yellow-light p-[20px] rounded-[30px] mb-[40px] mt-[40px]">
      <SearchField setKeyword={setKeyword} setPage={setPage} />
      <div className="relative">
        <button className="dropwown" onClick={toggleDropdown}>
          {selectedCategory || 'Category'}
          <Icon id="dropdown" size={18} />
        </button>
        {isOpen && (
          <ul
            className="bg-my-white w-[143px] rounded-[15px] absolute top-[46px] p-[12px] flex flex-col gap-[8px] text-[14px] text-my-black-60"
            onMouseLeave={closeDropdown}
          >
            <li
              onClick={() => {
                setCategory(''), setPage(1), setSelectedCategory('');
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

      <ul className="flex flex-wrap gap-[10px]">
        <li className="item_filter">Popular</li>
        <li className="item_filter">Unpopular</li>
        <li className="item_filter">Cheap</li>
        <li className="item_filter">Expensive</li>
      </ul>
    </div>
  );
};
