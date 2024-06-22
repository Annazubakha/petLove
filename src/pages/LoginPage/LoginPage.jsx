import { PetBlock, LoginForm, Title } from '../../components';
import petImg1 from '../../assets/img/login-img/login-img_mobile@1x.png';
import petImg2 from '../../assets/img/login-img/login-img_mobile@2x.png';

import petImg3 from '../../assets/img/login-img/login-img_tablet@1x.png';
import petImg4 from '../../assets/img/login-img/login-img_tablet@2x.png';

import petImg5 from '../../assets/img/login-img/login-img_desktop@1x.png';
import petImg6 from '../../assets/img/login-img/login-img_desktop@2x.png';

import petEmoji1 from '../../assets/img/emoji/dog-emoji@1x.png';
import petEmoji2 from '../../assets/img/emoji/dog-emoji@2x.png';

const LoginPage = () => {
  return (
    <div className="container text-my-black lg:flex lg:gap-[32px]">
      <PetBlock
        Img1={petImg1}
        Img2={petImg2}
        Img3={petImg3}
        Img4={petImg4}
        Img5={petImg5}
        Img6={petImg6}
        name={'Rich'}
        birthday={'21.09.2020'}
        description={
          'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!'
        }
        petImg1={petEmoji1}
        petImg2={petEmoji2}
        className={'mb-[10px] md:mb-[16px] lg:mb-0'}
      />
      <div className="px-[20px] py-[60px] md:px-[140px] md:py-[71px] lg:px-[84px] lg:py-[118px] lg:h-[654px] bg-my-white rounded-[30px] md:rounded-[60px]">
        <Title>Log in</Title>
        <p className="mb-[24px] text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.22] md:mb-[32px] ">
          Welcome! Please enter your credentials to <br className="md:hidden" />{' '}
          login to
          <br className="hidden md:block" /> the platform:
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
