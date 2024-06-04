'use client';

import { useEffect } from 'react';
import getDevices from '@/API/devicesData';
import { Device } from '@/interfaces/interface';
import { useDispatch, useSelector } from 'react-redux';
import ButtonPaged from '../ButtonPaged';
import ErrorTable from '../ErrorTable';
import TableDesktop from './TableDesktop';

const Table = () => {
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
  const filteredDevices = useSelector(
    (state: { filters: { filteredDevices: Device[] } }) =>
      state.filters.filteredDevices,
  );
  const currentPage = useSelector(
    (state: { filters: { currentPage: number } }) => state.filters.currentPage,
  );
  const devicesPerPage = useSelector(
    (state: { filters: { devicesPerPage: number } }) =>
      state.filters.devicesPerPage,
  );

  useEffect(() => {
    applyFilters();
  }, [selectedSOS, selectedWifi, selectedSearch]);

  const applyFilters = () => {
    const devicesData = getDevices();
    dispatch({ type: 'APPLY_FILTERS', payload: { devicesData } });
  };

  const indexOfLastDevice = currentPage * devicesPerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
  const currentDevices = filteredDevices.slice(
    indexOfFirstDevice,
    indexOfLastDevice,
  );

  return (
    <div className="flex flex-col justify-between min-h-96 overflow-x-auto p-4 bg-gray-900 rounded-lg shadow-lg">
      {currentDevices.length === 0 ? (
        <ErrorTable />
      ) : (
        <TableDesktop currentDevices={currentDevices} />
      )}
      <ButtonPaged
        totalDevices={filteredDevices.length}
        devicesPerPage={devicesPerPage}
      />
    </div>
  );
};

export default Table;
