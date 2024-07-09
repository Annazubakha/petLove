import { formatedDateNews } from '../../helpers';

export const NewsItem = ({ date, imgUrl, text, title, url }) => {
  const formatedDate = formatedDateNews(date);
  return (
    <li className=" rounded-[15px]  flex flex-col md:w-[340px] md:h-[476px] lg:w-[361px]  ">
      <img
        src={imgUrl}
        alt="News' photo"
        className="w-[335px] h-[190px] rounded-[15px] mb-[20px] md:mb-[28px]  md:h-[226px] lg:w-[361px]"
      />

      <h1 className="mb-[12px] font-bold leading-[1.25] tracking-[-0.03em] md:mb-[14px] md:text-[20px] md:leading-[1.3]">
        {title}
      </h1>

      <p className="mb-[19px]  leading-[1.29] tracking-[-0.02em] text-[14px] md:mb-[28px] md:text-[16px] md:leading-[1.25]  line-clamp-4  ">
        {text}
      </p>
      <div className="flex justify-between leading-[1.29] tracking-[-0.02em] text-[14px] md:text-[16px] md:leading-[1.25] md:pb-[28px] md:mt-auto">
        {' '}
        <p className="text-my-black-50 ">{formatedDate}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-my-yellow  underline hover:text-my-yellow-dark"
        >
          Read more
        </a>
      </div>
    </li>
  );
};
