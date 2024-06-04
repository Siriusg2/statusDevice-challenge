import React, { useState } from "react";
import style from './SearchBar.module.css'
import { getDevices } from '../Data/devicesData.ts';

const SearchBar = () => {

    const devicesData = getDevices();
    const [searchKeyword, setSearchKeyword] = useState('');


    const searchHandler = (event) => {
        event.preventDefault();
        const searchKeyword = event.target.value.toLowerCase();
        const filteredDevices = devicesData.filter(device => {
            return (
                device.name.toLowerCase().includes(searchKeyword) ||
                device.id.toString().includes(searchKeyword) ||
                device.owner.toLowerCase().includes(searchKeyword)
            );
        });
        console.log(filteredDevices);
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
    )
}

export default SearchBar;
