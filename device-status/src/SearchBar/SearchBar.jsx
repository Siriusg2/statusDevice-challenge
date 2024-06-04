import React, { useState } from "react";
import style from './SearchBar.module.css'
import getDevices from '../Data/devicesData.ts';
import DeviceTable from "../Table/Table.jsx";

const SearchBar = () => {

    const devicesData = getDevices();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [foundDevice, setFoundDevice] = useState(null);

    const searchHandler = (event) => {
        if (event.key === "Enter") {
            const searchKeyword = event.target.value.toLowerCase();
            const foundDevice = devicesData.find(device => {
                return (
                    device.name.toLowerCase().includes(searchKeyword) ||
                    device.id.toString().includes(searchKeyword) ||
                    device.owner.toLowerCase().includes(searchKeyword)
                );
            });
            setFoundDevice(foundDevice);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchHandler(event);
        }
    };
    const handleChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    return (
        <div>
            <nav className={style.search}>
                <input id="search"
                    type="text"
                    placeholder="ID/Nombre/Propietario"
                    onChange={(event) => {
                        handleChange(event);
                        searchHandler(event);
                    }}
                    onKeyPress={(event) => handleKeyPress(event)}
                    className={style.input}
                    value={searchKeyword} />
            </nav>
            {foundDevice?.length > 0 && <DeviceTable device={[foundDevice]} />}
        </div>

    )
}

export default SearchBar;
