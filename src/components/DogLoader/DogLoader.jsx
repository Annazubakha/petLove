import { Loader } from '../index';

export const DogLoader = () => {
  return (
    <div className="container fixed top-0 right-0  w-full h-full z-10 bg-image bg-cover flex items-center justify-center">
      <Loader size={35} />
    </div>
  );
};
