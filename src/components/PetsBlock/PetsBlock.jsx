import { AddPet, PetsList } from '../index';

export const PetsBlock = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-[20px]">
        {' '}
        <p className="font-bold leading-[1.25] md:text-[18px] md:leading-[1.33]">
          My pets
        </p>
        <AddPet />
      </div>
      <PetsList />
    </>
  );
};
