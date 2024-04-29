import React from "react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPageCount: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPageCount,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  if (totalPageCount <= 0) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        className="page-button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {[...Array(totalPageCount)].map((_, index) => (
        <button
          key={index + 1}
          className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="page-button"
        disabled={currentPage === totalPageCount}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
