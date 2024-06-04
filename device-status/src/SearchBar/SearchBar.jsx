import React from "react";
import style from './SearchBar.module.css'

const searchBar = () => {
    return (
        <nav className={style.search}>
            <input id= "search" type="text" placeholder="ID/Nombre/Propietario"  /* onChange={(event) => {searchHandler(event)}} */ className={style.input}/>
        </nav>
    )
}

export default searchBar;