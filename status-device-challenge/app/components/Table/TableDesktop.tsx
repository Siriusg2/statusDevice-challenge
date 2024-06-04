'use client';

import { Device, TableDesktopProps } from '@/interfaces/interface';
import { CiBatteryFull, CiWifiOff } from 'react-icons/ci';
import { FaWhatsapp, FaWifi } from 'react-icons/fa';

const TableDesktop: React.FC<TableDesktopProps> = ({ currentDevices }) => {
  return (
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
                  className={`rounded-full h-4 w-4 flex items-center justify-center mx-auto ${
                    device.connected ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
              </td>
              <td className="py-2 px-4 border-b border-gray-700 text-center">
                <div
                  className={`rounded-full h-4 w-4 flex items-center justify-center mx-auto ${
                    device.isSos ? 'bg-green-500' : 'bg-red-500'
                  }`}
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
  );
};

export default TableDesktop;
