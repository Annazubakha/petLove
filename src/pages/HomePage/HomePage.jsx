import { PetBlock } from '../../components';

import Img1 from '../../assets/img/content-img/content-img_mobile@1x.png';
import Img2 from '../../assets/img/content-img/content-img_mobile@2x.png';

import Img3 from '../../assets/img/content-img/content-img_tablet@1x.png';
import Img4 from '../../assets/img/content-img/content-img_tablet@2x.png';

import Img5 from '../../assets/img/content-img/content-img_desktop@1x.png';
import Img6 from '../../assets/img/content-img/content-img_desktop@2x.png';
import { DogLoader } from '../../components';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/slice';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <DogLoader />}
      <div className="container text-my-white ">
        <div className="bg-my-yellow px-[20px] pt-[60px] pb-[50px] flex flex-col gap-[24px] rounded-bl-[30px] rounded-br-[30px] md:pb-[44px] md:px-[32px] md:gap-[32px] md:rounded-bl-[60px] md:rounded-br-[60px] md:items-end md:pt-[112px] lg:flex-row lg:px-[64px] lg:gap-[73px] lg:pb-[32px] ">
          <h1 className="font-bold text-[50px]  leading-[0.96] md:text-[80px] tracking-[-0.03em] lg:text-[90px] lg:w-[760px] ">
            Take good <span className="text-my-white-40">care</span> of your
            small pets
          </h1>
          <p className="text-[14px]  leading-[1.29] tracking-[-0.03em] md:text-[18px]  md:leading-[1.22] md:w-[255px]">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <PetBlock
          Img1={Img1}
          Img2={Img2}
          Img3={Img3}
          Img4={Img4}
          Img5={Img5}
          Img6={Img6}
        />
      </div>
    </>
  );
};

export default HomePage;
