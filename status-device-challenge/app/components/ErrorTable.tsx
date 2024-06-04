'use client';

import { TbFaceIdError } from 'react-icons/tb';

const ErrorTable = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80 text-gray-200">
      <TbFaceIdError size={140} className="mb-2" />
      <p className="text-2xl">No se encontraron dispositivos.</p>
    </div>
  );
};

export default ErrorTable;
