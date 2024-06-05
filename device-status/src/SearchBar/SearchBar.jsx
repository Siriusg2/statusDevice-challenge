 import React, { useState } from "react";
import style from './SearchBar.module.css'
import { searchDevices } from "../redux/actions.js";
import { useDispatch } from "react-redux";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [found, setFound] = useState("");

    const searchHandler = (event) => {
        event.preventDefault()
        setFound(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (found.length === 0) alert('Debes ingresar un nombre')
        else {
            dispatch(searchDevices(found))
        };
    }

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            submitHandler(event)
        }
    }

    return (
        <nav className={style.search}>
            <input id="search" 
            type="text" 
            placeholder="ID/Nombre/Propietario" 
            onChange={(event) => { searchHandler(event) }} 
            className={style.input} 
            onKeyPress={(event) => { keyPressHandler(event) }}
            />
        </nav>
    )
}

export default SearchBar;
