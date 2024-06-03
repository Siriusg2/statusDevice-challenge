"use client";

import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setSelection, setWifi, toggleSOS } from '../redux/actions/actions';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const selectedSelection = useSelector((state: { filters: { selection: string } }) => state.filters.selection);
  const selectedSOS = useSelector((state: { filters: { sos: boolean } }) => state.filters.sos);
  const selectedWifi = useSelector((state: { filters: { wifi: boolean } }) => state.filters.wifi);
  const selectedSearch = useSelector((state: { filters: { search: string } }) => state.filters.search);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelection(e.target.value));
  };

  const handleSOSChange = () => {
    dispatch(toggleSOS());
  };

  const handleWifiChange = () => {
    dispatch(setWifi());
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex w-2/3 justify-between items-center p-4 bg-gray-900 rounded-lg shadow-lg max-w-4xl">
        <div className="flex items-center">
          {/* Dropdown de selección */}
          <select
            value={selectedSelection}
            onChange={handleSelectionChange}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="flex items-center">
          {/* Select de SOS */}
          <select
            value={selectedSOS ? 'activado' : 'desactivado'}
            onChange={handleSOSChange}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          >
            <option disabled>SOS</option>
            <option value="desactivado">Desactivado</option>
            <option value="activado">Activado</option>
          </select>
        </div>
        <div className="flex items-center">
          {/* Select de WIFI */}
          <select
            value={selectedWifi ? 'desactivado' : 'activado'}
            onChange={handleWifiChange}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          >
            <option disabled>WIFI</option>
            <option value="desactivado">Si</option>
            <option value="activado">No</option>
          </select>
        </div>
        <div className="flex items-center">
          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder="Id/Nombre/Propietario"
            value={selectedSearch}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
