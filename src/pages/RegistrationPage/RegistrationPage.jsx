import { PetBlock, RegisterForm, Title } from '../../components';
import petImg1 from '../../assets/img/register-img/register-img_mobile@1x.png';
import petImg2 from '../../assets/img/register-img/register-img_mobile@2x.png';

import petImg3 from '../../assets/img/register-img/register-img_tablet@1x.png';
import petImg4 from '../../assets/img/register-img/register-img_tablet@2x.png';

import petImg5 from '../../assets/img/register-img/register-img_desktop@1x.png';
import petImg6 from '../../assets/img/register-img/register-img_desktop@2x.png';

import petEmoji1 from '../../assets/img/emoji/cat-emoji@1x.png';
import petEmoji2 from '../../assets/img/emoji/cat-emoji@2x.png';

const RegistrationPage = () => {
  return (
    <div className="container text-my-black  lg:flex lg:gap-[32px] ">
      <PetBlock
        Img1={petImg1}
        Img2={petImg2}
        Img3={petImg3}
        Img4={petImg4}
        Img5={petImg5}
        Img6={petImg6}
        name={'Jack'}
        birthday={'18.10.2021'}
        description={
          'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.'
        }
        petImg1={petEmoji1}
        petImg2={petEmoji2}
        className={'mb-[10px] md:mb-[16px] lg:mb-0'}
      />
      <div className="px-[20px] py-[27px] md:px-[140px] md:py-[30px] lg:px-[84px] lg:py-[77px] lg:h-[654px] bg-my-white rounded-[30px] md:rounded-[60px]">
        <Title>Registration</Title>
        <p className="mb-[20px] text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.22] md:mb-[32px]">
          Thank you for your interest in our platform.
        </p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
