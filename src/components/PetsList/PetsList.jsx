import { useSelector } from 'react-redux';
import { PetsItem, Loader } from '../index';
import { selectUser, selectIsLoading } from '../../redux/auth/slice';

export const PetsList = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader size={30} />}
      <ul className="flex flex-col gap-[14px] mb-[20px]">
        {user.pets?.map((pet) => (
          <PetsItem key={pet._id} {...pet} />
        ))}
      </ul>
    </>
  );
};
