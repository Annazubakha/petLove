import { formatedPhone, formatedWorkDays } from '../../helpers';

export const FriendsItem = ({
  email,
  address,
  phone,
  imageUrl,
  title,
  addressUrl,
  url,
  workDays,
}) => {
  const formatedDays = formatedWorkDays(workDays);
  const formatedPhoneNumber = formatedPhone(phone);
  return (
    <li className="bg-my-white rounded-[15px]  px-[20px] py-[40px] flex gap-[14px] relative md:gap-[16px] lg:gap-[20px] lg:w-[371px]">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt="Friend's logo"
          className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] "
        />
      </a>

      <div>
        <p className="text-[16px] font-bold leading-[1.25] mb-[14px] md:text-[20px] md:leading-[1.3] tracking:-[-0.04em] lg:mb-[20px]">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </p>
        <ul className="flex flex-col gap-[8px] text-[14px]  leading-[1.29] tracking-[-0.02em] w-[196px]">
          <li className="group">
            {email ? (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate group-hover:text-my-yellow"
              >
                <span className="text-my-black-50 group-hover:text-my-yellow">
                  Email:
                </span>{' '}
                {email}
              </a>
            ) : (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-my-yellow"
              >
                <span className="text-my-black-50 group-hover:text-my-yellow">
                  Email:
                </span>{' '}
                {title.includes('Lico') ? 'address only' : 'phone only'}
              </a>
            )}
          </li>
          <li className="group">
            {address ? (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="line-clamp-1 group-hover:text-my-yellow "
              >
                <span className="text-my-black-50 group-hover:text-my-yellow">
                  Address:
                </span>
                {address}
              </a>
            ) : (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-my-yellow"
              >
                <span className="text-my-black-50 group-hover:text-my-yellow">
                  Address:
                </span>{' '}
                website only
              </a>
            )}
          </li>
          <li className="group">
            {phone ? (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-my-yellow"
              >
                <span className="text-my-black-50 group-hover:text-my-yellow">
                  Phone:
                </span>{' '}
                {formatedPhoneNumber}
              </a>
            ) : (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-my-yellow"
              >
                <span className="text-my-black-50 group-hover:text-my-yellow">
                  Phone:
                </span>{' '}
                {title.includes('Lico') ? 'address only' : 'email only'}
              </a>
            )}
          </li>
        </ul>
      </div>
      <div className="absolute top-[12px] right-[12px] bg-my-yellow-light text-my-yellow w-[88px] h-[32px] flex items-center justify-center rounded-[30px] text-[13px] leading-[1.33] tracking-[-0.02em] md:text-[14px] md:leading-[1.25] md:w-[100px] md:h-[34px]">
        {formatedDays}
      </div>
    </li>
  );
};
