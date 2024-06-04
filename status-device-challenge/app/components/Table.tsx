'use client';

import { useEffect } from 'react';
import getDevices from '@/API/devicesData';
import { Device } from '@/interfaces/interface';
import { useDispatch, useSelector } from 'react-redux';
import ButtonPaged from './ButtonPaged';
import ErrorTable from './ErrorTable';
import { FaWifi } from 'react-icons/fa';
import { CiWifiOff } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { CiBatteryFull } from 'react-icons/ci';

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
        <div className="flex-1 overflow-y-auto w-full min-w-6xl max-w-6xl mx-auto">
          <table className="w-full bg-gray-800 text-gray-200 rounded-lg overflow-hidden mt-8">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-700 text-center">
                  ID
                </th>
                <th className="py-2 px-4 border-b border-gray-700 text-center">
                  Nombre
                </th>
                <th className="py-2 px-4 border-b border-gray-700 text-center">
                  <CiBatteryFull className="mx-auto" />
                </th>
                <th className="py-2 px-4 border-b border-gray-700 text-center">
                  Estado
                </th>
                <th className="py-2 px-4 border-b border-gray-700 text-center">
                  SOS
                </th>
                <th className="py-2 px-4 border-b border-gray-700 text-center">
                  <FaWifi className="mx-auto" />
                </th>
                <th className="py-2 px-4 border-b border-gray-700 text-center">
                  Propietario
                </th>
                <th className="py-2 px-2 border-b border-gray-700 text-center">
                  <FaWhatsapp className="mx-auto" />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentDevices.map((device) => (
                <tr key={device.id} className="hover:bg-gray-700">
                  <td className="py-2 px-4 border-b border-gray-700 text-center">
                    {device.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-center">
                    {device.name}
                  </td>
                  <td
                    className={`py-2 px-4 border-b border-gray-700 text-center ${
                      device.battery > 75
                        ? 'text-green-500'
                        : device.battery > 50
                          ? 'text-yellow-500'
                          : device.battery > 25
                            ? 'text-orange-500'
                            : 'text-red-500'
                    }`}
                  >
                    {device.battery}%
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-center">
                    <div
                      className={`rounded-full h-4 w-4 flex items-center justify-center mx-auto ${device.connected ? 'bg-green-500' : 'bg-red-500'}`}
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-center">
                    <div
                      className={`rounded-full h-4 w-4 flex items-center justify-center mx-auto ${device.isSos ? 'bg-green-500' : 'bg-red-500'}`}
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-center">
                    {device.isWifi ? (
                      <FaWifi className="mx-auto" />
                    ) : (
                      <CiWifiOff className="mx-auto" />
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700 text-center">
                    {device.owner}
                  </td>
                  <td className="py-2 px-2 border-b border-gray-700 text-center">
                    {device.contacts.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ButtonPaged
        totalDevices={filteredDevices.length}
        devicesPerPage={devicesPerPage}
      />
    </div>
  );
};

export default Table;
