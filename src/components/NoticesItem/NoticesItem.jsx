import { Icon } from '../index';

export const NoticesItem = ({
  birthday,
  category,
  comment,
  imgURL,
  name,
  sex,
  popularity,
  title,
  species,
}) => {
  return (
    <li className="rounded-[16px] bg-my-white p-[24px]  ">
      <img
        src={imgURL}
        alt="Pet's photo"
        className="rounded-[16px] mb-[24px]"
      />

      <div className="relative mb-[8px]">
        <h1 className="font-bold leading-[1.25] text-my-black-second ">
          {title}
        </h1>
        <p className="absolute right-[24px] top-0 flex gap-[4px] text-[14px] leading-[1.29]">
          <Icon id="star" size={16} /> {popularity}
        </p>
      </div>
      <ul className="flex text-[10px] leading-[1.4] tracking-[-0.02em] text-my-black  justify-between mb-[16px]">
        <li className="notices_item_element">
          <span className="notices_item_element_span">Name</span>
          {name}
        </li>
        <li className="notices_item_element ">
          <span className="notices_item_element_span">Birthday</span>
          {birthday}
        </li>
        <li className="notices_item_element ">
          <span className="notices_item_element_span">Sex</span>
          {sex}
        </li>
        <li className="notices_item_element ">
          <span className="notices_item_element_span">Species</span>
          {species}
        </li>
        <li className="notices_item_element ">
          <span className="notices_item_element_span">Caterogy</span>
          {category}
        </li>
      </ul>
      <p className="mb-[24px] text-my-black-second text-[14px] leading-[1.29] tracking-[-0.02em]">
        {comment}
      </p>
      <div className="flex gap-[10px]">
        <button>Learn more</button>
        <button className="">Fav</button>
      </div>
    </li>
  );
};
