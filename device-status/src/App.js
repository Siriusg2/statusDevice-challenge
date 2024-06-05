import style from './App.module.css'
import DeviceTable from './Table/Table'
import SearchBar from './SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterByConnect,
  filterBySos,
  filterByID,
  resetFilter,
} from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const devices = useSelector((state) => state.devices)

  const handlerSos = (event) => {
    event.preventDefault()
    const sosValue = event.target.value
    if (sosValue === 'true' || sosValue === 'false') {
      dispatch(filterBySos(sosValue === 'true'))
    } else {
      dispatch(resetFilter())
    }
  }

  const handlerMode = (event) => {
    event.preventDefault()
    const modeValue = event.target.value
    if (modeValue === 'true' || modeValue === 'false') {
      console.log(modeValue)
      dispatch(filterByConnect(modeValue === 'true'))
    } else {
      dispatch(resetFilter())
    }
  }

  const handlerId = (event) => {
    event.preventDefault()
    const idValue = event.target.value
    dispatch(filterByID(idValue))
  }

  const handleResetFilter = () => {
    dispatch(resetFilter())
  }

  return (
    <div className={style.AppContainer}>
      <div className={style.container}>
        <h1 className={style.title}>Dispositivos</h1>
        <nav className={style.filter}>
          <select onChange={(event) => handlerId(event)}>
            <option value="all">ID</option>
            {devices?.map((element) => {
              return (
                <option key={element.id} value={element.id}>
                  {element.name}
                </option>
              )
            })}
          </select>
          <select onChange={(event) => handlerSos(event)}>
            <option value="all">sos</option>
            <option value="true">SOS</option>
            <option value="false">OK</option>
          </select>
          <button onClick={handleResetFilter} className={style.button}>
            RESET
          </button>
          <select onChange={(event) => handlerMode(event)}>
            <option value="all">Modo</option>
            <option value="true">Conectados</option>
            <option value="false">Desconectados</option>
          </select>
          <SearchBar />
        </nav>
        <div>
          <DeviceTable />
        </div>
      </div>
    </div>
  )
}

export default App
