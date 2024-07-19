import { PetBlock, AddPetForm } from '../../components';
import petImg1 from '../../assets/img/add-pet/img@1x_mobile.png';
import petImg2 from '../../assets/img/add-pet/img@2x_mobile.png';

import petImg3 from '../../assets/img/add-pet/img@1x_tablet.png';
import petImg4 from '../../assets/img/add-pet/img@2x_tablet.png';

import petImg5 from '../../assets/img/add-pet/img@1x_desktop.png';
import petImg6 from '../../assets/img/add-pet/img@2x_desktop.png';
const AddPetPage = () => {
  return (
    <div className="containerBig lg:flex lg:gap-[32px]">
      <PetBlock
        Img1={petImg1}
        Img2={petImg2}
        Img3={petImg3}
        Img4={petImg4}
        Img5={petImg5}
        Img6={petImg6}
        className={'mb-[10px] md:mb-[16px] lg:mb-0'}
      />

      <AddPetForm />
    </div>
  );
};

export default AddPetPage;
