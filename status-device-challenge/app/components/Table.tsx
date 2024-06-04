"use client";

import { useEffect, useState } from 'react';
import getDevices from '@/API/devicesData';
import { Device } from '@/interfaces/interface';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const selectedSOS = useSelector((state: { filters: { sos: boolean | null } }) => state.filters.sos);
  const selectedWifi = useSelector((state: { filters: { wifi: boolean | null } }) => state.filters.wifi);
  const selectedSearch = useSelector((state: { filters: { search: string } }) => state.filters.search);
  const filteredDevices = useSelector((state: { filters: { filteredDevices: Device[] } }) => state.filters.filteredDevices);

  useEffect(() => {
    applyFilters();
  }, [selectedSOS, selectedWifi, selectedSearch]);

  const applyFilters = () => {
    const devicesData = getDevices();
    dispatch({ type: 'APPLY_FILTERS', payload: { devicesData } });
  };

  return (
    <div className="overflow-x-auto p-4 bg-gray-900 rounded-lg shadow-lg">
      <table className="min-w-full bg-gray-800 text-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-700 text-center">ID</th>
            <th className="py-2 px-4 border-b border-gray-700 text-center">Nombre</th>
            <th className="py-2 px-4 border-b border-gray-700 text-center">Batería</th>
            <th className="py-2 px-4 border-b border-gray-700 text-center">Estado</th>
            <th className="py-2 px-4 border-b border-gray-700 text-center">SOS</th>
            <th className="py-2 px-4 border-b border-gray-700 text-center">WiFi</th>
            <th className="py-2 px-4 border-b border-gray-700 text-center">Propietario</th>
            <th className="py-2 px-4 border-b border-gray-700 text-center">Contactos</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device) => (
            <tr key={device.id} className="hover:bg-gray-700">
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.id}</td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.name}</td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.battery}%</td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.connected ? 'Conectado' : 'Desconectado'}</td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.isSos ? 'Activado' : 'Desactivado'}</td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.isWifi ? 'Sí' : 'No'}</td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.owner}</td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">{device.contacts.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
