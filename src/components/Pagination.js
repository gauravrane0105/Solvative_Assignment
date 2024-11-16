import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, limit, onLimitChange }) => {
  // Handle Next and Previous button states
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <div className="pagination">
        {/* Previous Button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1} // Disable if on the first page
          className="prev-next-btn"
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages} // Disable if on the last page
          className="prev-next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
