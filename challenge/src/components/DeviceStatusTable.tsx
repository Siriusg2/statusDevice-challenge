"use client";

import { useState } from "react";
import getDevices from "../seed/devicesData";
import { Device } from "@/interfaces/interface";
import { PiWifiSlash } from "react-icons/pi";
import { AiOutlineStop } from "react-icons/ai";
import { MdCastConnected } from "react-icons/md";
import {
  FaBatteryFull,
  FaBatteryEmpty,
  FaWifi,
  FaExclamationTriangle,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";
import Pagination from "./Paginations";

const DeviceStatus: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedId(value !== "Seleccionar" ? Number(value) : null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const devices: Device[] = getDevices();

  const filteredDevices = devices.filter((device: Device) => {
    const matchesId = selectedId ? device.id === selectedId : true;
    const matchesSearchTerm = searchTerm
      ? device.name.toLowerCase().includes(searchTerm) ||
        device.owner.toLowerCase().includes(searchTerm) ||
        device.id.toString().includes(searchTerm)
      : true;
    return matchesId && matchesSearchTerm;
  });

  // const filteredDevices = selectedId
  //   ? devicesData.filter((device) => device.id === selectedId)
  //   : devicesData;

  return (
    <div className="p-4 m-4 bg-gray-700 text-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dispositivos</h1>
      <div className="flex space-x-4 mb-8 justify-around h-10">
        <select
          id="device-select"
          className="bg-gray-700 border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleSelectChange}
        >
          <option value="Seleccionar">Seleccionar</option>
          {devices.map((device) => (
            <option key={device.id} value={device.id}>
              {device.id}
            </option>
          ))}
        </select>
        {/* Otros filtros aquí */}

        <select
          id="device-select"
          className="bg-gray-700 border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Seleccionar</option>
          <option value="SOS">SOS</option>
        </select>

        <select
          id="device-select"
          className="bg-gray-700 border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Seleccionar</option>
          <option value="SOS">Modo</option>
        </select>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full h-10 p-4 ps-10 text-sm text-white border border-gray-300 rounded-full bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Id/Nombre/Propietario"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-4 bg-white">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Batería</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">SOS</th>
              <th className="px-4 py-2">WiFi</th>
              <th className="px-4 py-2">Propietario</th>
              <th className="px-4 py-2">Contactos</th>
            </tr>
          </thead>

          <tbody>
            <hr />
            {filteredDevices.map((device: Device) => (
              <tr
                key={device.id}
                className="bg-gray-700  border-b border-gray-700"
              >
                <td className="px-4 py-2">{device.id}</td>
                <td className="px-4 py-2">{device.name}</td>
                <td className="px-4 py-2 flex items-center">
                  {device.battery > 60 ? (
                    <FaBatteryFull className="mr-2 text-green-600" />
                  ) : (
                    <FaBatteryEmpty className="mr-2 text-orange-500" />
                  )}
                  {device.battery}%
                </td>
                <td className="px-4 py-2">
                  {device.connected ? <MdCastConnected /> : <AiOutlineStop />}
                </td>
                <td className="px-4 py-2">
                  {device.isSos ? (
                    <FaExclamationTriangle className="text-yellow-500" />
                  ) : (
                    "OK"
                  )}
                </td>
                <td className="px-4 py-2">
                  {device.isWifi ? (
                    <FaWifi className="text-green-500" />
                  ) : (
                    <PiWifiSlash className="text-red-500" />
                  )}
                </td>
                <td className="px-4 py-2">{device.owner}</td>
                <td className="px-8 py-2 flex items-center">
                  {device.contacts.map((contact) => (
                    <a key={contact} href={`tel:${contact}`} className="mr-2">
                      <FaWhatsapp className="text-yellow-500" />
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-gray-700 flex justify-around text-center content-center items-center  ">
          <p>Showing 1 To 1 Of 1 Entrios</p>
          <Pagination devices={[]} itemsPerPage={0} />
        </div>
      </div>
    </div>
  );
};

export default DeviceStatus;
