"use client";

import React from 'react'
import DeviceStatus from "@/components/DeviceStatusTable";

const Home: React.FC = () => {
  return (
    <div className="py-6 ">
      <main  >
        <h1 className="text-2xl font-bold text-white text-center mb-6">Tabla de Estado de Dispositivos</h1>
        <DeviceStatus />
        {/* <DeviceStatusTable/> */}
      </main>
    </div>
  );
}

export default Home;
