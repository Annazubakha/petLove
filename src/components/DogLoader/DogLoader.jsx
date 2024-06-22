import Img1 from '../../assets/img/bg-img/bg_mobile@1x.png';
import Img2 from '../../assets/img/bg-img/bg_mobile@2x.png';

import Img3 from '../../assets/img/bg-img/bg_tablet@1x.png';
import Img4 from '../../assets/img/bg-img/bg_tablet@2x.png';

import Img5 from '../../assets/img/bg-img/bg_desktop@1x.png';
import Img6 from '../../assets/img/bg-img/bg_desktop@2x.png';

export const DogLoader = () => {
  return (
    <div className="container relative">
      <div className="absolute top-[-60px] right-0 md:top-[-54px] lg:top-[-198px]">
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
            srcSet={`${Img1} 1x, ${Img2} 2x`}
            type="image/png"
            alt="Content photo"
          />
        </picture>
      </div>
    </div>
  );
};
