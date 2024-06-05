import React from "react";
import { PaginationProps } from "@/interfaces/interface";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex bg-gray-700 justify-center items-center space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="text-gray-900"
      >
        <MdOutlineKeyboardDoubleArrowLeft size={24} />
      </button>
      <span className="bg-white rounded-full w-10 h-10 flex justify-center items-center text-gray-950 p-2">
        {currentPage}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="text-gray-900"
      >
        <MdOutlineKeyboardDoubleArrowRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;
