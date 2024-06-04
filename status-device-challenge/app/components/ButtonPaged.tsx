'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/actions/actions';

interface ButtonPagedProps {
  totalDevices: number;
  devicesPerPage: number;
}

const ButtonPaged: React.FC<ButtonPagedProps> = ({
  totalDevices,
  devicesPerPage,
}) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: { filters: { currentPage: number } }) => state.filters.currentPage,
  );

  const totalPages = Math.ceil(totalDevices / devicesPerPage);

  const handleClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(setCurrentPage(pageNumber));
    }
  };

  return (
    <div className="flex items-center justify-center mt-4 space-x-2">
      <button
        onClick={() => handleClick(currentPage - 1)}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-white'
        }`}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
        {currentPage}
      </button>
      <button
        onClick={() => handleClick(currentPage + 1)}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          currentPage === totalPages
            ? 'cursor-not-allowed text-gray-400'
            : 'text-white'
        }`}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonPaged;
