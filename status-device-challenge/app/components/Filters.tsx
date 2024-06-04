'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setWifi, toggleSOS } from '../redux/actions/actions';
import { FaWifi } from 'react-icons/fa';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const selectedSOS = useSelector(
    (state: { filters: { sos: boolean | null } }) => state.filters.sos,
  );
  const selectedWifi = useSelector(
    (state: { filters: { wifi: boolean | null } }) => state.filters.wifi,
  );
  const selectedSearch = useSelector(
    (state: { filters: { search: string } }) => state.filters.search,
  );

  const handleSOSChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'null') {
      dispatch(toggleSOS(null));
    } else if (value === 'desactivado') {
      dispatch(toggleSOS(false));
    } else if (value === 'activado') {
      dispatch(toggleSOS(true));
    }
  };

  const handleWifiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'null') {
      dispatch(setWifi(null));
    } else if (value === 'no') {
      dispatch(setWifi(false));
    } else if (value === 'si') {
      dispatch(setWifi(true));
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row w-full sm:w-content justify-between items-center p-4 bg-gray-900 rounded-lg shadow-lg max-w-3xl space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center w-full sm:w-auto">
          <label htmlFor="sos-select" className="mr-2 text-gray-200">
            SOS:
          </label>
          <select
            id="sos-select"
            value={
              selectedSOS === null
                ? 'null'
                : selectedSOS
                  ? 'activado'
                  : 'desactivado'
            }
            onChange={handleSOSChange}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          >
            <option value="null">Todos</option>
            <option value="desactivado">Desactivado</option>
            <option value="activado">Activado</option>
          </select>
        </div>

        <div className="flex items-center w-full sm:w-auto">
          <label htmlFor="wifi-select" className="mr-2 text-gray-200">
            <FaWifi />
          </label>
          <select
            id="wifi-select"
            value={selectedWifi === null ? 'null' : selectedWifi ? 'si' : 'no'}
            onChange={handleWifiChange}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          >
            <option value="null">Todos</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            id="search-input"
            placeholder="Id/Nombre/Propietario"
            value={selectedSearch}
            onChange={handleSearchChange}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;