"use client";

const Filters = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex w-2/3 justify-between items-center p-4 bg-gray-900 rounded-lg shadow-lg max-w-4xl">
        {/* Dropdown de selección */}
        <select className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        {/* Select de SOS */}
        <select className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none">
          <option disabled>SOS</option>
          <option value="desactivado">Desactivado</option>
          <option value="activado">Activado</option>
        </select>

        {/* Select de WIFI */}
        <select className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none">
          <option disabled>WIFI</option>
          <option value="desactivado">Si</option>
          <option value="activado">No</option>
        </select>

        {/* Campo de búsqueda */}
        <input
          type="text"
          placeholder="Id/Nombre/Propietario"
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Filters;
