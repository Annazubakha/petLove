import { AddPet, PetsList } from '../index';

export const PetsBlock = () => {
  return (
    <>
      <div className="flex justify-between items-center md-[20px]">
        {' '}
        <p className="font-bold leading-[1.25]">My pets</p>
        <AddPet />
      </div>
      <PetsList />
    </>
  );
};
