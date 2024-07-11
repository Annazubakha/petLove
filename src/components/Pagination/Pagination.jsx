import { useIconSizeHook } from '../../helpers';
import { Icon } from '../index';

export const Pagination = ({ setPage, totalPages, page }) => {
  const leftIcon = useIconSizeHook('pagination-left');
  const rightIcon = useIconSizeHook('pagination-right');

  const handleNextPage = () => {
    if (page === totalPages) {
      return;
    }
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleFirstPage = () => {
    setPage(1);
  };
  const handleLastPage = () => {
    setPage(totalPages);
  };

  const renderPageNumbers = () => {
    return totalPages === page ? (
      <>
        <button type="button" className="btn_pagination" disabled>
          ...
        </button>
        <button
          type="button"
          className="btn_pagination_number"
          onClick={handlePrevPage}
        >
          {page - 1}{' '}
        </button>
        <button
          type="button"
          className={`${'btn_pagination_number'} ${page ? 'active' : ''}`}
          disabled={page === totalPages}
        >
          {page}{' '}
        </button>
      </>
    ) : (
      <>
        <button
          type="button"
          className={`${'btn_pagination_number'} ${page ? 'active' : ''}`}
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          {page}{' '}
        </button>
        <button
          type="button"
          className="btn_pagination_number"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          {page + 1}{' '}
        </button>
        <button type="button" className="btn_pagination" disabled>
          ...
        </button>
      </>
    );
  };

  return (
    <div className="flex gap-[11px] font-bold items-center justify-center md:gap-[24px]">
      <div className="flex gap-[6px] md:gap-[8px]">
        <button
          className="btn_pagination_double"
          disabled={page === 1}
          onClick={handleFirstPage}
        >
          <Icon id="pagination-left" size={leftIcon} className="icon" />
          <Icon
            id="pagination-left"
            size={leftIcon}
            className="absolute top-[9px] left-[4px] icon md:top-[9.5px] "
          />
        </button>

        <button
          className="btn_pagination"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          <Icon id="pagination-left" size={leftIcon} className="icon" />
        </button>
      </div>
      <div className="flex gap-[10px] ">{renderPageNumbers()}</div>
      <div className="flex gap-[6px] md:gap-[8px]">
        <button
          className="btn_pagination"
          onClick={handleNextPage}
          disabled={totalPages === page}
        >
          <Icon id="pagination-right" size={rightIcon} className="icon" />
        </button>
        <button
          className="btn_pagination_double "
          onClick={handleLastPage}
          disabled={totalPages === page}
        >
          <Icon id="pagination-right" size={rightIcon} className="icon" />
          <Icon
            id="pagination-right"
            className="absolute top-[9px] right-[4px] icon md:top-[9.5px]"
            size={rightIcon}
          />
        </button>
      </div>
    </div>
  );
};
