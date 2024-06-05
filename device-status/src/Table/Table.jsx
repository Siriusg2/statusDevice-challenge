import React, { useEffect, useState } from 'react'
import style from './Table.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApiDevices } from '../redux/actions'
import {
  FaBatteryQuarter,
  FaBatteryHalf,
  FaBatteryFull,
  FaWifi,
  FaExclamationTriangle,
  FaCircle,
} from 'react-icons/fa'
import { BiNetworkChart } from 'react-icons/bi'
import { RiWhatsappLine } from 'react-icons/ri'

function DeviceTable() {
  const dispatch = useDispatch()
  const devicesData = useSelector((state) => state.devices)

  const [currentPage, setCurrentPage] = useState(1)
  const devicesPerPage = 5

  const totalPages = Math.ceil(devicesData.length / devicesPerPage)

  const iLastDevice = currentPage * devicesPerPage
  const iFirstDevice = iLastDevice - devicesPerPage
  const currentDevices = devicesData.slice(iFirstDevice, iLastDevice)

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1)
    }
  }

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1)
    }
  }

  useEffect(() => {
    dispatch(getApiDevices())
    setCurrentPage(1)
  }, [dispatch])

  useEffect(() => {
    setCurrentPage(1)
  }, [devicesData])

  return (
    <div>
      <table className={style.device}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>BATERIA</th>
            <th>ESTADO</th>
            <th>SOS</th>
            <th>WI-FI</th>
            <th>PROPIETARIO</th>
            <th>CONTACTOS</th>
          </tr>
        </thead>
        <tbody>
          {currentDevices?.map((device) => (
            <tr key={device.id}>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>
                {renderBatteryIcon(device.battery)} {device.battery}%
              </td>
              <td>{renderConnectionIcon(device.connected)}</td>
              <td>{renderSOSIcon(device.isSos)}</td>
              <td>{renderWiFiIcon(device.isWifi)}</td>
              <td>{device.owner}</td>
              <td>{renderContactIcons(device?.contacts)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.paginationContainer}>
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className={style.button}
        >
          &lt;{' '}
        </button>
        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          className={style.button}
        >
          {' '}
          &gt;
        </button>
      </div>
    </div>
  )
}

function renderBatteryIcon(battery) {
  if (battery >= 75) {
    return <FaBatteryFull />
  } else if (battery >= 50) {
    return <FaBatteryHalf />
  } else {
    return <FaBatteryQuarter />
  }
}

function renderConnectionIcon(connected) {
  const circleStyle = {
    color: connected ? 'green' : 'red',
    border: '1px solid white',
  }
  return <FaCircle style={circleStyle} />
}

function renderSOSIcon(isSos) {
  return isSos ? <FaExclamationTriangle /> : `${'OK'}`
}

function renderWiFiIcon(isWifi) {
  return isWifi ? <FaWifi /> : <BiNetworkChart />
}

function renderContactIcons(contacts) {
  return contacts.map((contact) => (
    <div className="tooltip" key={`${contact}`}>
      <span className="icon">
        <RiWhatsappLine style={{ color: 'white', fontSize: '1.2em' }} />
      </span>
      <span className="tooltip-text">{contact}</span>
    </div>
  ))
}

export default DeviceTable