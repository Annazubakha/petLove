import { NavLink } from 'react-router-dom';

import Img1 from '../../assets/img/not-found-img/img404_mobile@1x.png';
import Img2 from '../../assets/img/not-found-img/img404_mobile@2x.png';

import Img3 from '../../assets/img/not-found-img/img404_tablet@1x.png';
import Img4 from '../../assets/img/not-found-img/img404_tablet@2x.png';

import Img5 from '../../assets/img/not-found-img/img404_desktop@1x.png';
import Img6 from '../../assets/img//not-found-img/img404_desktop@2x.png';

const NotFoundPage = () => {
  return (
    <div className="container text-my-white ">
      <div className="bg-my-yellow rounded-[30px] h-[712px] flex items-center justify-center md:h-[878px] md:rounded-[60px] lg:h-[654px]">
        <div className="flex items-center flex-col justify-center gap-[20px]">
          <div className="flex text-[120px]  font-extrabold items-center h-[120px] md:text-[300px] md:h-[300px] md:mb-[20px] ">
            <p>4</p>{' '}
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
                alt="Cat's photo as 0"
              />
            </picture>{' '}
            <p>4</p>
          </div>
          <p className="text-[16px] leading-[1.25] tracking-[-0.03em] font-bold md:text-[24px] md:leading-[1.17]">
            Ooops! This page not found :&#x2768;{' '}
          </p>
          <NavLink
            to="/home"
            className={
              'bg-my-yellow-light h-[42px] w-[150px] text-my-yellow flex items-center justify-center rounded-[30px] text-[14px] leading-[1.29] tracking-[-0.03em] font-bold  hover:bg-my-yellow-light-hover  md:h-[48px] md:w-[162px] md:text-[16px] md:leading-[1.25]'
            }
          >
            To home page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
