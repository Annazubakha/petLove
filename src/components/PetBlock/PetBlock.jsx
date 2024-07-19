import { useLocation } from 'react-router-dom';
import { PetDecorationTab } from 'components';

export const PetBlock = ({
  className,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  name,
  birthday,
  description,
  petImg2,
  petImg1,
}) => {
  const location = useLocation();
  return (
    <div className="relative">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${Img5} 1x, ${Img6} 2x`}
          type="image/png"
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${Img3} 1x, ${Img4} 2x`}
          type="image/png"
        />
        <img
          className={className}
          srcSet={`${Img1} 1x, ${Img2} 2x`}
          type="image/png"
          alt="Content photo"
        />
      </picture>
      {location.pathname === '/add-pet' ? (
        ' '
      ) : (
        <PetDecorationTab
          name={name}
          birthday={birthday}
          description={description}
          petImg1={petImg1}
          petImg2={petImg2}
        />
      )}
    </div>
  );
};
