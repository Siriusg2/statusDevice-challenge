'use client';

import { useState } from "react";
import { Device } from "@/interfaces/interface";
import { CiBatteryFull, CiWifiOff } from "react-icons/ci";
import { FaWhatsapp, FaWifi, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface TableMobileProps {
  currentDevices: Device[];
}

const TableMobile: React.FC<TableMobileProps> = ({ currentDevices }) => {
  const [expandedDeviceIds, setExpandedDeviceIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedDeviceIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col w-full">
      {currentDevices.map((device) => {
        const isExpanded = expandedDeviceIds.includes(device.id);
        return (
          <div
            key={device.id}
            className="bg-gray-800 text-gray-200 rounded-lg mb-4 shadow-lg"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleExpand(device.id)}
            >
              <span className="font-bold">Nombre: {device.name}</span>
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isExpanded && (
              <div className="p-4 border-t border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">ID:</span>
                  <span>{device.id}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Bateria:</span>
                  <span
                    className={`${
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
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Estado:</span>
                  <div
                    className={`rounded-full h-4 w-4 ${
                      device.connected ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">SOS:</span>
                  <div
                    className={`rounded-full h-4 w-4 ${
                      device.isSos ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">WiFi:</span>
                  {device.isWifi ? (
                    <FaWifi className="text-green-500" />
                  ) : (
                    <CiWifiOff className="text-red-500" />
                  )}
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Propietario:</span>
                  <span>{device.owner}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Contactos:</span>
                  <span>{device.contacts.join(', ')}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TableMobile;
