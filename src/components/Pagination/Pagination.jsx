import { useIconSizeHook } from '../../helpers';
import { Icon } from '../index';

export const Pagination = () => {
  const leftIcon = useIconSizeHook('pagination-left');
  const rightIcon = useIconSizeHook('pagination-right');
  return (
    <div className="flex">
      <div className="flex gap-[6px]">
        <button className="btn_pagination_double">
          <Icon id="pagination-left" size={leftIcon} />
          <Icon
            id="pagination-left"
            size={leftIcon}
            className="absolute top-[9px] left-[4px]"
          />
        </button>

        <button className="btn_pagination">
          <Icon id="pagination-left" size={leftIcon} />
        </button>
      </div>
      <div className="flex gap-[6px]">
        <button className="btn_pagination">
          <Icon id="pagination-right" size={rightIcon} />
        </button>
        <button className="btn_pagination_double ">
          <Icon id="pagination-right" size={rightIcon} />
          <Icon
            id="pagination-right"
            className="absolute top-[9px] right-[4px]"
            size={rightIcon}
          />
        </button>
      </div>
    </div>
  );
};
