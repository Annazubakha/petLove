import { Icon } from '../Icon/Icon';

export const Rating = ({ popularity }) => {
  const filledStars = Math.min(popularity, 5);

  return (
    <div className="flex gap-[4px]">
      {[...Array(5)].map((_, index) => (
        <Icon
          id="star"
          size={16}
          key={index}
          className={`${
            index < filledStars
              ? 'stroke-[#FFC531] fill-[#FFC531]'
              : 'fill-my-black-5 stroke-my-black-5'
          }`}
        />
      ))}
    </div>
  );
};
