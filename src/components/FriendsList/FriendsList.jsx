import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FriendsItem, Loader } from 'components';
import { fetchFriendsThunk } from '../../redux/friends/operations';
import { selectIsFriends, selectIsLoading } from '../../redux/friends/slice';

export const FriendsList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectIsFriends);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchFriendsThunk()).unwrap();
      } catch {
        toast.error('Something went wrong. Please, reload the page.');
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader size={30} />}
      <ul className="flex flex-col gap-[20px] py-[40px] md:flex-row md:flex-wrap  md:py-[44px] lg:py-[60px] lg:gap-y-[28px] lg:gap-x-[20px] ">
        {friends?.map((friend) => (
          <FriendsItem key={friend._id} {...friend} />
        ))}
      </ul>
    </>
  );
};
