

import React, { useState } from 'react';
import { PaginationProps } from '@/interfaces/interface'; 
import {MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight} from "react-icons/md"


const Pagination: React.FC<PaginationProps> = ({ devices, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDevices = devices.slice(startIndex, endIndex);
  console.log(currentDevices)

  return (
    <div className=' m-4 justify-center  items-center text-center bg-red-500'>
      {/* Renderiza los dispositivos */}
      {currentDevices.map((device) => (
        <div key={device.id}>
          {device.name} (Owner: {device.owner})
        </div>
      ))}

      {/* Botones de paginación */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdOutlineKeyboardDoubleArrowLeft className='text-gray-900 size-10'/>
      </button>
      <span className='bg-white rounded-full w-2 h-2 text-gray-950 p-2'>10</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={endIndex >= devices.length}
      >
        <MdOutlineKeyboardDoubleArrowRight className='text-gray-900 size-10'/>
      </button>
    </div>
  );
};

export default Pagination;
