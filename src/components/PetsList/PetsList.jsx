import { useSelector } from 'react-redux';
import { PetsItem, Loader } from '../index';
import { selectUser, selectIsLoading } from '../../redux/auth/slice';

export const PetsList = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader size={30} />}
      {user.pets.length === 0 ? (
        <p className="mb-[20px] md:text-[18px]">
          You don&#39;t have any pets..
        </p>
      ) : (
        <ul className="flex flex-col gap-[14px] mb-[20px] md:flex-row md:flex-wrap">
          {user.pets?.map((pet) => (
            <PetsItem key={pet._id} {...pet} />
          ))}
        </ul>
      )}
    </>
  );
};
