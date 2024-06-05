import React, { useState } from 'react'
import style from './SearchBar.module.css'
import { searchDevices } from '../redux/actions.js'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [found, setFound] = useState('')

  const searchHandler = (event) => {
    event.preventDefault()
    setFound(event.target.value)
  }
  const submitHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (found.length === 0) {
        alert('Debes ingresar un nombre')
      } else {
        dispatch(searchDevices(found))
      }
    }
  }

  return (
    <nav className={style.search}>
      <input
        id="search"
        type="text"
        placeholder="ID/Nombre/Propietario"
        onChange={(event) => {
          searchHandler(event)
        }}
        onKeyPress={submitHandler}
        className={style.input}
      />
    </nav>
  )
}

export default SearchBar
